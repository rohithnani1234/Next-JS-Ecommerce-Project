"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, User, Bot } from "lucide-react";
import { agent } from "@/lib/agent";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Greetings. I am the Archive Protocol Assistant. How may I facilitate your experience today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  /* Agent Integration */
  const processQuery = async (input: string) => {
    // Simulate network latency for realism
    await new Promise((resolve) =>
      setTimeout(resolve, 800 + Math.random() * 800)
    );
    return agent.generateResponse(input);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // AI Agent Processing
    processQuery(userMsg.text).then((responseText) => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] md:w-[420px] lg:w-[450px] h-[70vh] sm:h-[600px] max-h-[700px] bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[1.5rem] sm:rounded-[2rem] z-[1000] flex flex-col overflow-hidden ring-1 ring-gray-900/5"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-black p-4 sm:p-6 flex justify-between items-center text-white">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-black text-xs sm:text-sm uppercase tracking-widest">
                    Protocol AI
                  </h3>
                  <div className="flex items-center space-x-1.5 mt-0.5 sm:mt-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                      Online
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Chat Area */}
            <div
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50 relative"
              ref={scrollRef}
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <Bot className="h-64 w-64 text-black" />
              </div>

              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] p-4 rounded-2xl text-xs font-medium leading-relaxed shadow-sm relative group ${
                        msg.sender === "user"
                          ? "bg-black text-white rounded-br-sm"
                          : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm"
                      }`}
                    >
                      <span className="whitespace-pre-wrap">{msg.text}</span>
                      {msg.sender === "bot" && (
                        <div className="absolute -left-2 top-0 w-2 h-2 bg-white [clip-path:polygon(100%_0,0_0,100%_100%)]"></div>
                      )}
                      {msg.sender === "user" && (
                        <div className="absolute -right-2 top-0 w-2 h-2 bg-black [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm border border-gray-100 shadow-sm flex space-x-1 items-center">
                    <span className="text-[10px] font-bold text-gray-400 mr-2 uppercase tracking-wider">
                      Processing
                    </span>
                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full animate-bounce delay-0" />
                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full animate-bounce delay-150" />
                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full animate-bounce delay-300" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              {/* Suggested Chips */}
              {messages.length < 3 && (
                <div className="flex space-x-2 mb-4 overflow-x-auto pb-2 no-scrollbar">
                  {[
                    "Shipping Status",
                    "Return Policy",
                    "New Arrivals",
                    "Help",
                  ].map((chip) => (
                    <button
                      key={chip}
                      onClick={() => {
                        setInputValue(chip);
                        // Optional: auto-send
                      }}
                      className="whitespace-nowrap px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-black hover:text-white transition-all active:scale-95"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              )}

              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about products, orders, or protocols..."
                  className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-black/10 rounded-2xl py-4 pl-5 pr-14 text-xs font-medium text-gray-900 placeholder:text-gray-400 transition-all outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="absolute right-2 top-2 bottom-2 aspect-square bg-black text-white rounded-xl flex items-center justify-center hover:bg-gray-800 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <div className="text-center mt-3">
                <p className="text-[9px] text-gray-300 uppercase tracking-widest font-bold">
                  VOGUESTORE INTELLIGENCE v2.1
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 h-16 w-16 bg-black text-white rounded-full shadow-2xl flex items-center justify-center z-[1000] ring-4 ring-white/20 overflow-hidden group"
      >
        <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageSquare className="h-6 w-6" />
          )}
        </div>
      </motion.button>
    </>
  );
};

export default Chatbot;
