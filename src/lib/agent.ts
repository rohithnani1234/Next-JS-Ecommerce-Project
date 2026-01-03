import { products, Product } from "@/data/products";

export class ProtocolAgent {
  private knowledgeBase: Product[];

  constructor() {
    this.knowledgeBase = products;
  }

  // 1. Keyword Extraction & Intent Analysis
  private analyzeIntent(input: string): { type: string; keywords: string[] } {
    const lower = input.toLowerCase();

    // Check for high-level intent
    if (/(shipping|delivery|track|order|arrive|transport)/.test(lower))
      return { type: "LOGISTICS", keywords: [] };
    if (/(return|refund|policy|exchange|warranty)/.test(lower))
      return { type: "POLICY", keywords: [] };
    if (/(price|cost|how much|expensive|value|worth)/.test(lower))
      return { type: "PRICING", keywords: [] };
    if (/(contact|support|email|help|human|person|assist)/.test(lower))
      return { type: "SUPPORT", keywords: [] };
    if (
      /(hello|hi|greetings|hey|sup|yo|good morning|good evening|welcome)/.test(
        lower
      )
    )
      return { type: "GREETING", keywords: [] };
    if (/(thank|goodbye|bye|cya|later)/.test(lower))
      return { type: "CLOSING", keywords: [] };
    if (
      /(what can you do|capabilities|features|who are you|function)/.test(lower)
    )
      return { type: "CAPABILITIES", keywords: [] };

    // Otherwise, assume PRODUCT_DISCOVERY and extract viable keywords
    // Remove common stop words to focus on the nouns
    const stopWords = [
      "the",
      "a",
      "an",
      "is",
      "are",
      "do",
      "you",
      "have",
      "some",
      "any",
      "looking",
      "for",
      "me",
      "show",
      "recommend",
      "i",
      "want",
      "need",
      "can",
      "get",
      "find",
      "search",
    ];
    const keywords = lower
      .split(" ")
      .filter((w) => !stopWords.includes(w) && w.length > 2);

    // If no valuable keywords found, return UNKNOWN instead of empty discovery
    if (keywords.length === 0) return { type: "UNKNOWN", keywords: [] };

    return { type: "PRODUCT_DISCOVERY", keywords };
  }

  // 2. Similarity Search (Simulated Vector Search)
  private findRelevantProducts(keywords: string[]): Product[] {
    if (keywords.length === 0) return [];

    return this.knowledgeBase
      .map((product) => {
        let score = 0;
        const textToSearch =
          `${product.name} ${product.description} ${product.category}`.toLowerCase();

        keywords.forEach((keyword) => {
          if (textToSearch.includes(keyword)) score += 1; // Basic match
          if (product.category.toLowerCase().includes(keyword)) score += 3; // Category boost
          if (product.name.toLowerCase().includes(keyword)) score += 5; // Name exact match boost
        });

        return { product, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.product)
      .slice(0, 3); // Return top 3 matches
  }

  // 3. Response Construction Engine
  public async generateResponse(input: string): Promise<string> {
    const analysis = this.analyzeIntent(input);

    switch (analysis.type) {
      case "GREETING":
        return "Protocol Online. Identification verified. Welcome to the VOGUESTORE Archive. Query parameters ready.";

      case "LOGISTICS":
        return "Logistics Protocol: We utilize a secure global courier network. All artifacts are vacuum-sealed for transit. Priority dispatch is standard for verified clientele.";

      case "POLICY":
        return "Returns are accepted within 30 days of acquisition, provided the archival seal remains unbroken. We prioritize preservation above all.";

      case "PRICING":
        return "Valuations are fixed based on global scarcity and material provenance. The catalog reflects the current market equilibrium.";

      case "SUPPORT":
        return "For sensitive inquiries, please establish a secure channel with our Concierge Desk at concierge@voguestore.global. Human operators are on standby.";

      case "CLOSING":
        return "Session terminated. We await your return to the network.";

      case "CAPABILITIES":
        return "I am authorized to assist with Supply Chain tracking, Archival Returns, Value assessments, and Asset discovery. Currently scanning for: Fashion, Wristwear, and Electronics.";

      case "PRODUCT_DISCOVERY":
        const matches = this.findRelevantProducts(analysis.keywords);

        if (matches.length > 0) {
          const productNames = matches
            .map((p) => `• ${p.name} (${p.category})`)
            .join("\n");
          return `I have isolated ${matches.length} artifact${
            matches.length > 1 ? "s" : ""
          } matching your parameters:\n\n${productNames}\n\nWould you like to initialize a viewing protocol for any of these?`;
        } else {
          // No matches found, try a broader fallback based on the query category if possible
          if (
            analysis.keywords.some((k) =>
              ["shoe", "wear", "cloth", "fashion", "jacket", "shirt"].includes(
                k
              )
            )
          ) {
            return "I could not locate a specific match, but our 'Fashion' archive contains several high-performance garments. Would you like to access the full directory?";
          }
          if (
            analysis.keywords.some((k) =>
              ["tech", "device", "electric", "gadget", "phone"].includes(k)
            )
          ) {
            return "Specific telemetry unavailable. However, our 'Electronics' sector features the latest in quantum consumer hardware.";
          }
          if (
            analysis.keywords.some((k) =>
              ["watch", "time", "wrist"].includes(k)
            )
          ) {
            return "Precise model unavailable. Navigate to 'Wristwear' to view our available chronographs.";
          }
          return `Query parameters '${analysis.keywords.join(
            " "
          )}' yielded no results in the active archive. Please refine your syntax.`;
        }

      default:
        return "Input unclear. Please specify a category (e.g., 'Watches', 'Shipping') or a specific artifact name.";
    }
  }
}

export const agent = new ProtocolAgent();
