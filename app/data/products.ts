export type Product = {
  slug: string;
  title: string;
  description: string;
  screenshots: string[];
  features: string[];
  techStack: string[];
  architecture: string;
  businessProblem: string;
  customerIssue: string;
  solutionApproach: string;
  businessImpact: string;
  downloadUrl?: string;
};

export const products: Product[] = [
  {
    slug: "arm-power-case-study",
    title: "ARM Power Infrastructure Case Study",
    description: "Comprehensive case study on ARM Power infrastructure optimization and deployment strategies.",
    screenshots: [],
    features: ["Infrastructure optimization", "Power management", "Deployment strategies"],
    techStack: ["ARM", "Infrastructure", "Cloud"],
    architecture: "Enterprise infrastructure solution showcasing best practices in ARM-based power systems.",
    businessProblem: "Organizations needed to optimize their ARM power infrastructure for better efficiency and reduced operational costs.",
    customerIssue: "Companies struggled with inefficient power management and high operational expenses in infrastructure deployment.",
    solutionApproach: "Developed comprehensive strategies for ARM power infrastructure optimization including deployment best practices.",
    businessImpact: "Successful optimization resulted in significant cost savings, improved infrastructure efficiency, and better resource utilization.",
    downloadUrl: "/documents/arm-power-case-study.pdf",
  },
    {
      slug: "school-management-case-study",
      title: "Moon Light Public School – School Management System",
      description: "School Management System implemented for Moon Light Public School, covering admissions, attendance, grading, and parent communications.",
      screenshots: [],
      features: ["Admissions & enrollment", "Attendance tracking", "Grades & reporting"],
      techStack: ["Next.js", "Node.js", "Postgres"],
      architecture: "Single application with modular services for admin, teachers, and parents.",
      businessProblem: "Manual school processes caused administrative overhead and inconsistent communication with parents.",
      customerIssue: "Staff spent excessive time on manual tasks and parents lacked timely updates on student progress.",
      solutionApproach: "Built a unified school management platform to automate administrative tasks and provide real-time updates to parents.",
      businessImpact: "Reduced administrative time, improved parent engagement, and streamlined grading and attendance workflows.",
      downloadUrl: "/documents/school-management-case-study.pdf",
    },
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
      "Auction marketplaces were losing bidders and sellers due to opaque bidding, slow refresh, and fraud risk.",
    customerIssue:
      "Sellers and buyers were uncertain about bid authenticity and needed faster updates to win auctions.",
    solutionApproach:
      "Built live WebSocket bidding, transparent auction statuses, escrow workflows, and seller dashboards to restore trust and accelerate transactions.",
    businessImpact:
      "By improving transparency, reducing disputes, and enabling faster bids, the platform increased auction turnover, improved bid revenue, and strengthened seller profit margins.",
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
      "Customers experienced long waits, missed pickups, and inconsistent pricing, causing cancellations and lost revenue.",
    customerIssue:
      "Riders were frustrated by long ETAs, unclear fares, and drivers not arriving on time.",
    solutionApproach:
      "Implemented real-time driver tracking, automated dispatch, and dynamic pricing with clear fare details.",
    businessImpact:
      "Real-time dispatch and optimized routing increased rides completed, reduced idle driver time, and boosted net revenue through higher utilization and smarter pricing.",
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
      "Delivery operations were inefficient, leading to late orders, low restaurant throughput, and customer churn.",
    customerIssue:
      "Restaurants and customers lost trust due to late deliveries, missing order data, and courier miscoordination.",
    solutionApproach:
      "Delivered a shared platform with end-to-end order visibility, courier assignment rules, and status notifications.",
    businessImpact:
      "Improved dispatch coordination and tracking increased on-time delivery, raised average daily orders, and grew commission revenue across the marketplace.",
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
      "Manual scheduling and billing created errors, insurance delays, and wasted staff time across departments.",
    customerIssue:
      "Staff were overloaded with paperwork and patients waited because schedules and records were not unified.",
    solutionApproach:
      "Centralized appointments, patient workflows, and billing on a secure platform with audit trails.",
    businessImpact:
      "By automating workflows and improving data accuracy, the system reduced billing leakage, sped up reimbursements, and improved operational profitability.",
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
      "Organizations struggled to deliver consistent training at scale while measuring learner progress and engagement.",
    customerIssue:
      "Learners lacked consistent access to training content and managers couldn't measure progress effectively.",
    solutionApproach:
      "Built course authoring, progress dashboards, and assessment workflows with analytics for administrators.",
    businessImpact:
      "The LMS improved training completion rates, enabled more billable seats, and allowed companies to scale revenue from corporate learning programs.",
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
      "Agents lost leads and time due to fragmented client data, slow follow-ups, and poor property discovery.",
    customerIssue:
      "Agents missed follow-ups and wasted time searching properties in disconnected tools.",
    solutionApproach:
      "Created integrated lead capture, automated reminders, and fast property search to streamline workflows.",
    businessImpact:
      "Automated lead workflows and fast search helped agents close deals faster, increasing conversion rate and commission-based income.",
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
      "Disparate enterprise systems made it hard for leaders to spot margin pressure and cost issues quickly.",
    customerIssue:
      "Executives had slow business reporting and couldn't react quickly to margin issues.",
    solutionApproach:
      "Connected finance, inventory and HR data into dashboards with alerting and trend analysis.",
    businessImpact:
      "Consolidated reporting accelerated decision-making, improved cost control, and helped protect profit by revealing revenue and expense trends faster.",
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
      "Existing payment experiences were slow and insecure, limiting customer trust and transaction volume.",
    customerIssue:
      "Users abandoned payments when KYC was cumbersome and transfers felt insecure.",
    solutionApproach:
      "Implemented secure onboarding, instant settlement, and tokenized payment flows.",
    businessImpact:
      "A faster, secure wallet increased customer retention, enabled more transactions, and generated higher fee revenue with lower fraud risk.",
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
      "Customer support and product experiences lacked intelligent automation and consistent context retention.",
    customerIssue:
      "Support teams struggled with repetitive questions and inconsistent customer context.",
    solutionApproach:
      "Built a conversational AI service with memory, plugin integrations, and moderation controls.",
    businessImpact:
      "AI-driven chat reduced support costs, improved customer engagement, and opened new revenue opportunities through premium AI interactions.",
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
      "Stockouts, oversells, and manual reconciliation were costing revenue and eroding customer trust.",
    customerIssue:
      "Operators could not tell stock availability in real time across warehouses.",
    solutionApproach:
      "Delivered event-driven syncing, alerts, and supplier coordination to avoid stockouts and oversells.",
    businessImpact:
      "Real-time inventory control reduced lost sales, improved order fulfillment, and protected profit by minimizing excess markdowns and stock carrying costs.",
  },
];

export function getProductBySlug(slug: string | string[]) {
  const rawSlug = Array.isArray(slug) ? slug[slug.length - 1] : slug;
  if (!rawSlug) return null;
  const normalizedSlug = rawSlug
    .toString()
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();
  return products.find((p) => p.slug.toLowerCase() === normalizedSlug) || null;
}
