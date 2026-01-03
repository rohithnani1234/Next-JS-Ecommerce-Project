export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isFeatured?: boolean;
  stock?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Acoustic Master Wireless Speaker",
    price: 25499,
    description:
      "Immersive sound with deep bass and crystal clear highs. Perfect for any room.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 124,
    isFeatured: true,
    stock: 15,
  },
  {
    id: "2",
    name: "Precision Leather Briefcase",
    price: 16149,
    description:
      "Handcrafted premium leather briefcase for the modern professional.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 85,
    isNew: true,
    stock: 8,
  },
  {
    id: "3",
    name: "Zenith Gold Edition Smartwatch",
    price: 29749,
    description:
      "The ultimate blend of style and technology. Monitor your health in luxury.",
    category: "Wristwear",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 210,
    isFeatured: true,
    stock: 25,
  },
  {
    id: "4",
    name: "Eclipse Noise Cancelling Headphones",
    price: 33915,
    description:
      "Lose yourself in music with industry-leading noise cancellation.",
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 320,
    isFeatured: true,
    stock: 12,
  },
  {
    id: "5",
    name: "Luxe Cotton Minimalist Hoodie",
    price: 10200,
    description:
      "Ultra-soft premium cotton hoodie with a semi-fitted silhouette.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 94,
    isNew: true,
    stock: 30,
  },
  {
    id: "6",
    name: "Urban Explorer Sneakers",
    price: 13175,
    description:
      "Lightweight, breathable sneakers designed for the modern city dweller.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 156,
    stock: 20,
  },
  {
    id: "7",
    name: "Minimalist Desk Lamp",
    price: 7565,
    description: "Dimmable LED desk lamp with a sleek architectural design.",
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 78,
    stock: 18,
  },
  {
    id: "8",
    name: "Essential Canvas Backpack",
    price: 11475,
    description: "Water-resistant canvas backpack with multiple compartments.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 82,
    stock: 22,
  },
  {
    id: "9",
    name: "Titanium Mechanical Keyboard",
    price: 20825,
    description:
      "Custom-built mechanical keyboard with hot-swappable titanium switches.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 64,
    isNew: true,
    stock: 5,
  },
  {
    id: "10",
    name: "Nordic Ceramic Teapot",
    price: 5525,
    description:
      "Elegant minimalist teapot inspired by Scandinavian design principles.",
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 32,
    stock: 40,
  },
  {
    id: "11",
    name: "Silver Mirror Sunglasses",
    price: 14875,
    description:
      "Hand-polished frames with category 3 mirror lenses for ultimate clarity.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 112,
    stock: 14,
  },
  {
    id: "12",
    name: "Sleek Stainless Steel Flask",
    price: 3825,
    description:
      "Insulated stainless steel flask that keeps drinks hot for 12 hours.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    rating: 4.5,
    reviews: 45,
    stock: 50,
  },
  {
    id: "13",
    name: "Obsidian Fountain Pen",
    price: 9775,
    description:
      "Ebonite body with an 18k gold nib for the smoothest writing experience.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 28,
    isNew: true,
    stock: 10,
  },
  {
    id: "14",
    name: "Vanguard Mirror Camera",
    price: 127415,
    description:
      "Full-frame mirrorless camera with AI-powered autofocus and 8K video.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 12,
    isFeatured: true,
    isNew: true,
    stock: 3,
  },
  {
    id: "15",
    name: "Midnight Silk Scarf",
    price: 7225,
    description:
      "100% pure Mulberry silk with hand-rolled edges and bespoke print.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 45,
    stock: 12,
  },
  {
    id: "16",
    name: "Carbon Fiber Wallet",
    price: 6715,
    description:
      "Aerospace-grade carbon fiber with RFID protection and slim profile.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 89,
    stock: 25,
  },
  {
    id: "17",
    name: "Aura Diffuser",
    price: 10625,
    description:
      "Ultrasonic technology meets stone craftsmanship in this luxury diffuser.",
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 54,
    stock: 15,
  },
  {
    id: "18",
    name: "Pinnacle Running Shoes",
    price: 17850,
    description:
      "Reactive nitrogen-infused foam for maximum energy return and comfort.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 67,
    isFeatured: true,
    stock: 20,
  },
  {
    id: "19",
    name: "Quantum Pad Pro",
    price: 110415,
    description:
      "Ultra-thin professional tablet with a liquid retina XDR display and M-series chip.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 42,
    isNew: true,
    stock: 10,
  },
  {
    id: "20",
    name: "Stellar Drone 4K",
    price: 76415,
    description:
      "Foldable drone with 4K HDR camera and 3-axis gimbal for cinematic aerial shots.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 31,
    stock: 15,
  },
  {
    id: "21",
    name: "Obsidian Smart Mirror",
    price: 46750,
    description:
      "Voice-controlled smart mirror with built-in fitness tracking and skin analysis.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 19,
    stock: 5,
  },
  {
    id: "22",
    name: "Nexus VR Headset",
    price: 59415,
    description:
      "Next-generation VR headset with 8K resolution and ultra-precise motion tracking.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 56,
    isNew: true,
    stock: 8,
  },
  {
    id: "23",
    name: "Sartorial Wool Blazer",
    price: 38250,
    description:
      "Italian wool blazer for men, tailored for a sharp, modern silhouette.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 24,
    stock: 12,
  },
  {
    id: "24",
    name: "Cashmere Evening Gown",
    price: 72250,
    description:
      "Elegant silk-cashmere blended gown for women, perfect for elite evening events.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 15,
    isFeatured: true,
    stock: 4,
  },
  {
    id: "25",
    name: "Italian Calfskin Boots",
    price: 27200,
    description:
      "Handcrafted Chelsea boots in premium Italian calfskin for the modern man.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 38,
    stock: 20,
  },
  {
    id: "26",
    name: "Velvet Runway Heels",
    price: 24650,
    description:
      "Iconic velvet heels for women, featuring a sculptural gold-tone heel.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 22,
    stock: 10,
  },
  {
    id: "27",
    name: "Heritage Trench Coat",
    price: 49300,
    description:
      "Classic double-breasted trench coat for men, made from water-repellent gabardine.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 45,
    isFeatured: true,
    stock: 15,
  },
  {
    id: "28",
    name: "Sapphire Silk Blouse",
    price: 16575,
    description:
      "Fluid silk satin blouse for women in a deep sapphire blue hue.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 27,
    stock: 25,
  },
  {
    id: "29",
    name: "Chronos Sapphire Automatic",
    price: 102000,
    description:
      "Swiss-made automatic watch with a sapphire crystal case back and 72-hour power reserve.",
    category: "Wristwear",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 18,
    isFeatured: true,
    stock: 6,
  },
  {
    id: "30",
    name: "Nebula Diver 300",
    price: 80750,
    description:
      "Professional diving watch water-resistant to 300m with a luminous ceramic bezel.",
    category: "Wristwear",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 34,
    stock: 12,
  },
  {
    id: "31",
    name: "Eon Minimalist Quartz",
    price: 12750,
    description:
      "Ultra-slim quartz watch with a brushed steel case and genuine leather strap.",
    category: "Wristwear",
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop",
    rating: 4.5,
    reviews: 52,
    stock: 30,
  },
  {
    id: "32",
    name: "Harmony Tube Amplifier",
    price: 157250,
    description:
      "Audiophile-grade vacuum tube amplifier providing warm, rich analog sound.",
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
    rating: 5.0,
    reviews: 9,
    isFeatured: true,
    stock: 2,
  },
  {
    id: "33",
    name: "Sonar In-Ear Monitors",
    price: 20400,
    description:
      "Quad-driver balanced armature in-ear monitors for neutral, precise audio monitoring.",
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 21,
    stock: 18,
  },
  {
    id: "34",
    name: "Resonance Turntable",
    price: 52700,
    description:
      "High-precision belt-drive turntable with a carbon fiber tonearm and walnut plinth.",
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 42,
    isNew: true,
    stock: 7,
  },
  {
    id: "35",
    name: "Marble Sculptural Vase",
    price: 15300,
    description:
      "Hand-carved Carrara marble vase designed by renowned minimalist architects.",
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 14,
    stock: 20,
  },
  {
    id: "36",
    name: "Geometric Brass Mirror",
    price: 18700,
    description:
      "Asymmetrical wall mirror with a hand-burnished solid brass frame.",
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 28,
    stock: 15,
  },
  {
    id: "37",
    name: "Velvet Accent Chair",
    price: 41650,
    description:
      "Deep-seated lounge chair in emerald green silk velvet with walnut legs.",
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 36,
    isFeatured: true,
    stock: 8,
  },
  {
    id: "38",
    name: "Concrete Industrial Clock",
    price: 9350,
    description:
      "Raw concrete wall clock with copper hands, embodying brutalist elegance.",
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 19,
    stock: 25,
  },
  {
    id: "39",
    name: "Pure Graphite Yoga Mat",
    price: 10200,
    description:
      "Ultra-dense graphite yoga mat with superior grip and sustainable materials.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 45,
    stock: 30,
  },
  {
    id: "40",
    name: "Hand-Forged Chef's Knife",
    price: 29750,
    description:
      "Damascus steel chef's knife with a desert ironwood handle, hand-forged in Japan.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 12,
    isFeatured: true,
    stock: 4,
  },
  {
    id: "41",
    name: "Terrazzo Coffee Set",
    price: 8075,
    description:
      "Four-piece coffee set crafted from polished terrazzo and matte black porcelain.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 31,
    stock: 20,
  },
  {
    id: "42",
    name: "Leather Travel Humidor",
    price: 14875,
    description:
      "Spanish cedar lined travel humidor wrapped in top-grain Pebbled leather.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 14,
    stock: 10,
  },
  {
    id: "43",
    name: "Crystal Decanter Set",
    price: 23800,
    description:
      "Lead-free crystal decanter with four matching lowball glasses in a gift case.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 26,
    stock: 8,
  },
  {
    id: "44",
    name: "Titanium AI Drone",
    price: 76499,
    description:
      "Autonomous aerial cinematography unit with obstacle avoidance and 8K optics.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 56,
    isFeatured: true,
    stock: 10,
  },
  {
    id: "45",
    name: "Velocity Runner V2",
    price: 20825,
    description:
      "Aerodynamic silhouette with reactive kinetic foam for urban traversing.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 89,
    stock: 25,
  },
  {
    id: "46",
    name: "Obsidian Field Jacket",
    price: 27200,
    description:
      "Water-resistant technical outerwear with modular utility pockets.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 42,
    isNew: true,
    stock: 15,
  },
  {
    id: "47",
    name: "Carbon Fiber Cardholder",
    price: 7225,
    description:
      "Minimalist RFID-blocking wallet forged from aerospace-grade carbon fiber.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 112,
    stock: 50,
  },
  {
    id: "48",
    name: "Chronos Mechanical Watch",
    price: 46750,
    description:
      "Self-winding automatic movement housed in a sapphire crystal case.",
    category: "Wristwear",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 35,
    isFeatured: true,
    stock: 5,
  },
  {
    id: "49",
    name: "Bauhaus Desk Lamp",
    price: 15300,
    description:
      "Industrial chic lighting with adjustable brass arm and matte finish.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?q=80&w=800&auto=format&fit=crop",
    rating: 4.5,
    reviews: 67,
    stock: 20,
  },
  {
    id: "50",
    name: "Silk Noir Scarf",
    price: 11900,
    description:
      "100% organic silk scarf with hand-rolled edges and subtle monogram.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 29,
    stock: 40,
  },
  {
    id: "51",
    name: "Hydro-Smart Garden",
    price: 11049,
    description:
      "Automated indoor herb garden with grow lights and self-watering system.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 84,
    stock: 25,
  },
  {
    id: "52",
    name: "Cloud Modular Sofa",
    price: 110415,
    description:
      "Ultra-plush modular seating system customizable for any living space.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 45,
    isFeatured: true,
    stock: 5,
  },
  {
    id: "53",
    name: "Sonic Pro Earbuds",
    price: 16915,
    description:
      "True wireless earbuds with adaptive transparency mode and haptic touch controls.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 210,
    stock: 50,
  },
  {
    id: "54",
    name: "Lumina 4K Projector",
    price: 63750,
    description:
      "Compact laser projector delivering cinema-quality 4K resolution at home.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 32,
    stock: 12,
  },
  {
    id: "55",
    name: "Tactile Mech Keyboard",
    price: 13600,
    description:
      "Hot-swappable wireless mechanical keyboard with aluminum chassis and gasket mount.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 156,
    stock: 30,
  },
  {
    id: "56",
    name: "Heritage Leather Boots",
    price: 23800,
    description:
      "Hand-stitched full-grain leather boots built for durability and comfort.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 92,
    stock: 18,
  },
  {
    id: "57",
    name: "Skywalker High-Tops",
    price: 16150,
    description:
      "Futuristic high-top sneakers with responsive cushioning and ankle support.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 145,
    isNew: true,
    stock: 40,
  },
  {
    id: "58",
    name: "Cashmere Essential Crew",
    price: 18700,
    description:
      "Luxuriously soft Mongolian cashmere sweater in a timeless cut.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 78,
    stock: 22,
  },
  {
    id: "59",
    name: "Breathing Linen Trousers",
    price: 9350,
    description:
      "Relaxed fit linen trousers perfect for warm climates and casual elegance.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
    rating: 4.5,
    reviews: 63,
    stock: 35,
  },
  {
    id: "60",
    name: "Aviator Bomber Jacket",
    price: 29750,
    description:
      "Classic shearling-collar bomber jacket updated with modern technical fabrics.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 41,
    isFeatured: true,
    stock: 10,
  },
  {
    id: "61",
    name: "Spectra Titanium Shades",
    price: 17850,
    description:
      "Ultra-lightweight titanium frames with polarized UV400 lenses.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 99,
    stock: 45,
  },
  {
    id: "62",
    name: "Voyager Weekender",
    price: 35700,
    description:
      "Spacious full-grain leather travel bag with dedicated shoe compartment.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 58,
    stock: 8,
  },
  {
    id: "63",
    name: "Sterling Architect Cuff",
    price: 12325,
    description:
      "Hand-forged sterling silver cuff with a brutalist architectural texture.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 37,
    stock: 15,
  },
  {
    id: "64",
    name: "Zen Wall Clock",
    price: 7225,
    description:
      "Silent sweep movement minimalist clock with walnut wood face.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=800&auto=format&fit=crop",
    rating: 4.4,
    reviews: 72,
    stock: 30,
  },
  {
    id: "65",
    name: "Terra Ceramic Vases",
    price: 8075,
    description:
      "Set of three handcrafted terracotta vases in varying geometric shapes.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 110,
    isNew: true,
    stock: 25,
  },
  {
    id: "66",
    name: "Midnight Amber Candle",
    price: 3825,
    description:
      "Soy wax blend candle with notes of amber, sandalwood, and oud.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800&auto=format&fit=crop",
    rating: 4.5,
    reviews: 180,
    stock: 100,
  },
  {
    id: "67",
    name: "Eco-Sense Thermostat",
    price: 21165,
    description:
      "Smart learning thermostat that optimizes your home's energy usage.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 205,
    stock: 40,
  },
  {
    id: "68",
    name: "Canvas Digital Frame",
    price: 25415,
    description:
      "Anti-glare smart display for showcasing digital art and NFTs.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 44,
    stock: 15,
  },
  {
    id: "69",
    name: "Abyss Diver 300M",
    price: 55250,
    description:
      "Professional grade dive watch with helium escape valve and ceramic bezel.",
    category: "Wristwear",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 88,
    isFeatured: true,
    stock: 7,
  },
  {
    id: "70",
    name: "Gilded Curb Chain",
    price: 15725,
    description:
      "18k gold vermeil curb chain, diamond-cut for maximum sparkle.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 130,
    stock: 35,
  },
  {
    id: "71",
    name: "Holo-View Smart Mirror",
    price: 76415,
    description:
      "Interactive bathroom mirror with built-in display for news, weather, and fitness tracking.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 55,
    stock: 12,
  },
  {
    id: "72",
    name: "Merino Wool Trench",
    price: 38250,
    description:
      "Tailored long coat made from Italian merino wool, water-resistant finish.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 40,
    isFeatured: true,
    stock: 18,
  },
  {
    id: "73",
    name: "Retro Gaming Console",
    price: 10200,
    description:
      "Handheld console pre-loaded with classic 8-bit and 16-bit era games.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 310,
    stock: 60,
  },
  {
    id: "74",
    name: "Velvet Accent Chair",
    price: 32300,
    description:
      "Mid-century modern armchair upholstered in emerald green velvet.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 62,
    stock: 15,
  },
  {
    id: "75",
    name: "Ceramic Pour-Over Set",
    price: 5525,
    description: "Matte black ceramic coffee dripper and matching carafe.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1519326844852-704caea5679e?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 145,
    stock: 45,
  },
  {
    id: "76",
    name: "Suede Chelsea Boots",
    price: 17850,
    description:
      "Classic tan suede boots with elastic side panels and crepe sole.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 88,
    stock: 30,
  },
  {
    id: "77",
    name: "Levitating Bonsai Pot",
    price: 8075,
    description:
      "Magnetic floating plant pot that rotates for uniform sunlight exposure.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1456518563096-0ff5ee08204e?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 215,
    isNew: true,
    stock: 50,
  },
  {
    id: "78",
    name: "Graphite Yoga Set",
    price: 7225,
    description:
      "High-performance compression fitness wear made from recycled materials.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 130,
    stock: 70,
  },
  {
    id: "79",
    name: "Professional Drawing Tablet",
    price: 38250,
    description:
      "Ultra-slim graphics tablet with 8192 levels of pressure sensitivity.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 76,
    stock: 20,
  },
  {
    id: "80",
    name: "Minimalist Floor Lamp",
    price: 13175,
    description: "Sleek LED corner lamp with customizable RGB color gradients.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 94,
    stock: 35,
  },
  {
    id: "81",
    name: "Oxford Leather Satchel",
    price: 22100,
    description:
      "Vintage-inspired leather bag with brass buckles and laptop compartment.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 102,
    stock: 18,
  },
  {
    id: "82",
    name: "Smart Sleep Mask",
    price: 9350,
    description:
      "Comfortable eye mask with built-in Bluetooth speakers and sleep tracking sensors.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=800&auto=format&fit=crop",
    rating: 4.5,
    reviews: 60,
    stock: 40,
  },
  {
    id: "83",
    name: "Japanese Denim Jacket",
    price: 16575,
    description:
      "Raw selvedge denim jacket that develops a unique patina over time.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 53,
    stock: 25,
  },
  {
    id: "84",
    name: "Crystal Globe Decanter",
    price: 11050,
    description: "Etched globe whisky decanter with a mahogany wood stand.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 86,
    stock: 15,
  },
  {
    id: "85",
    name: "Wireless Charging Pad",
    price: 3825,
    description:
      "Fast-charging leather-wrapped Qi wireless charger for multiple devices.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 188,
    stock: 100,
  },
  {
    id: "86",
    name: "Silk Pocket Square",
    price: 3400,
    description: "Hand-printed silk pocket square to elevate any suit jacket.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 44,
    stock: 65,
  },
  {
    id: "87",
    name: "Tactical Hiking Watch",
    price: 27200,
    description:
      "Rugged GPS watch with altimeter, barometer, and solar charging.",
    category: "Wristwear",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 71,
    isFeatured: true,
    stock: 22,
  },
  {
    id: "88",
    name: "Weighted Anxiety Blanket",
    price: 12750,
    description:
      "Deep pressure therapy blanket with cooling bamboo fabric cover.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 320,
    stock: 30,
  },
  {
    id: "89",
    name: "Abstract Art Rug",
    price: 23800,
    description:
      "Hand-tufted wool rug featuring contemporary abstract geometric patterns.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 35,
    stock: 10,
  },
  {
    id: "90",
    name: "Smart Key Tracker",
    price: 2975,
    description:
      "Bluetooth tracking tag for keys, wallets, and bags with app integration.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=800&auto=format&fit=crop",
    rating: 4.5,
    reviews: 450,
    stock: 120,
  },
];
