export type Product = {
  slug: string;
  title: string;
  description: string;
  screenshots: string[];
  features: string[];
  techStack: string[];
  architecture: string;
  businessProblem: string;
};

export const products: Product[] = [
  {
    slug: "vehicle-auction-platform",
    title: "Vehicle Auction Platform",
    description: "A realtime auction platform for buying and selling vehicles.",
    screenshots: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    ],
    features: [
      "Live bidding with WebSockets",
      "Seller dashboards and listings",
      "Automated escrow and payments",
    ],
    techStack: ["Next.js", "Node.js", "Postgres", "Redis", "WebSockets"],
    architecture:
      "Microservices: auction service, user service, payments; Postgres for data, Redis for bidding cache; WebSocket layer for live updates.",
    businessProblem:
      "Reduce friction and fraud in vehicle auctions by providing transparent live bidding and escrowed payments.",
  },
  {
    slug: "ride-booking-app",
    title: "Ride Booking App",
    description: "End-to-end ride booking with real-time tracking and routing.",
    screenshots: [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["Real-time driver tracking", "Dynamic pricing", "In-app payments"],
    techStack: ["React Native", "Next.js", "Google Maps API", "Stripe"],
    architecture:
      "Mobile clients talk to API gateway, which routes to matching, dispatch, and payments microservices. Map tiles via provider.",
    businessProblem:
      "Improve rider experience and reduce wait times through real-time matching and optimized routing.",
  },
  {
    slug: "food-delivery-platform",
    title: "Food Delivery Platform",
    description: "A platform connecting restaurants, couriers, and customers.",
    screenshots: [
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["Order tracking", "Restaurant menus", "Courier management"],
    techStack: ["Next.js", "Node.js", "Postgres", "Redis"],
    architecture:
      "Event-driven order pipeline: orders -> dispatch -> courier; retries and observability with centralized logging.",
    businessProblem:
      "Streamline food delivery logistics to increase on-time delivery and restaurant throughput.",
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    description: "Manage patients, appointments, billing, and clinical records.",
    screenshots: [
      "https://images.unsplash.com/photo-1582719478250-6e3a8d5a7e22?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["Patient records", "Scheduling", "Billing and insurance"],
    techStack: ["Next.js", "Node.js", "Postgres", "OAuth2"],
    architecture:
      "Monolith API with strict RBAC; sensitive data encrypted at rest; audit trails for clinical compliance.",
    businessProblem:
      "Reduce administrative overhead and improve patient record accuracy across departments.",
  },
  {
    slug: "lms-platform",
    title: "LMS Platform",
    description: "A learning management system for courses and assessments.",
    screenshots: [
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["Course authoring", "Quizzes & grading", "Progress tracking"],
    techStack: ["Next.js", "Node.js", "Postgres", "Vercel"],
    architecture:
      "Server-rendered public pages with headless CMS for course content and stateless APIs for learners.",
    businessProblem:
      "Enable organizations to scale training while keeping learners engaged and measurable.",
  },
  {
    slug: "real-estate-crm",
    title: "Real Estate CRM",
    description: "CRM tailored to real estate agents and property workflows.",
    screenshots: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["Lead management", "Property listings", "Task automation"],
    techStack: ["Next.js", "Node.js", "Postgres", "Algolia"],
    architecture:
      "Single-page app with server-side APIs; search powered by indexed search service for fast property queries.",
    businessProblem:
      "Help agents convert leads faster by automating follow-ups and surfacing relevant properties.",
  },
  {
    slug: "erp-dashboard",
    title: "ERP Dashboard",
    description: "Enterprise dashboard for finance, HR, and operations.",
    screenshots: [
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["Financial reporting", "Inventory sync", "User permissions"],
    techStack: ["React", "Node.js", "Postgres", "Grafana"],
    architecture:
      "Data warehouse aggregates services; analytics surfaced through dashboarding layer with auth.",
    businessProblem:
      "Unify disjointed enterprise data into one dashboard for faster decision making.",
  },
  {
    slug: "fintech-wallet",
    title: "FinTech Wallet",
    description: "A secure digital wallet for payments, transfers, and savings.",
    screenshots: [
      "https://images.unsplash.com/photo-1600906196162-6d1b0d0f1ee6?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["KYC flows", "Instant transfers", "Savings vaults"],
    techStack: ["Next.js", "Node.js", "Postgres", "Plaid/Stripe"],
    architecture:
      "Secure core with payment rails and a compliance layer; encryption and tokenization for sensitive data.",
    businessProblem:
      "Provide low-friction digital payments and a modern savings experience for users.",
  },
  {
    slug: "ai-chat-platform",
    title: "AI Chat Platform",
    description: "Conversational AI platform with plugins and moderation.",
    screenshots: [
      "https://images.unsplash.com/photo-1590608897129-79b0d6b5f0a6?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["Multi-model support", "Conversation memory", "Plugin integrations"],
    techStack: ["Node.js", "Vector DB", "OpenAI-like models"],
    architecture:
      "Frontend clients call conversational API; embeddings stored in vector DB for context retrieval; moderation pipeline.",
    businessProblem:
      "Add AI-driven interactions to products while keeping context and safety under control.",
  },
  {
    slug: "inventory-management",
    title: "Inventory Management",
    description: "Track stock, orders, and suppliers with real-time sync.",
    screenshots: [
      "https://images.unsplash.com/photo-1581091012184-7f4a8f7c5a3c?auto=format&fit=crop&w=1200&q=80",
    ],
    features: ["Stock reconciliation", "Supplier workflows", "Low-stock alerts"],
    techStack: ["Next.js", "Node.js", "Postgres", "RabbitMQ"],
    architecture:
      "Event-driven inventory sync across warehouses; integration adapters for suppliers and marketplaces.",
    businessProblem:
      "Prevent stockouts and oversells through centralized realtime inventory control.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) || null;
}
