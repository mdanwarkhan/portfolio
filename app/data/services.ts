import { Globe, ShoppingCart, Smartphone, Database } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  icon: any;
  details: {
    overview: string;
    keyFeatures: string[];
    functionalities: {
      category: string;
      items: string[];
    }[];
    technologies: string[];
    benefits: string[];
  };
}

export const services: Service[] = [
  {
    id: "web-design",
    title: "Web Design",
    slug: "web-design",
    summary: "Beautiful, conversion-focused websites with modern UX.",
    description:
      "We craft immersive brand websites that feel premium and perform well across devices. Every design is built with conversion, clarity, and speed in mind.",
    icon: Globe,
    details: {
      overview:
        "Our web design services combine stunning visual aesthetics with user-centered design principles to create websites that not only look great but also drive business results.",
      keyFeatures: [
        "Responsive Design",
        "Modern UI/UX",
        "Fast Performance",
        "SEO Optimized",
        "Mobile First",
        "Conversion Focused",
      ],
      functionalities: [
        {
          category: "Design & Layout",
          items: [
            "Fully responsive layouts that work on all devices",
            "Custom design tailored to brand identity",
            "Intuitive navigation and information architecture",
            "Accessibility compliance (WCAG standards)",
            "Dark/Light mode support",
            "Smooth animations and transitions",
          ],
        },
        {
          category: "Performance & Optimization",
          items: [
            "Optimized images and media loading",
            "Code splitting and lazy loading",
            "CDN integration for fast global delivery",
            "Caching strategies for improved performance",
            "Lighthouse score optimization",
            "PageSpeed insights implementation",
          ],
        },
        {
          category: "SEO & Analytics",
          items: [
            "SEO-friendly structure and metadata",
            "Schema markup implementation",
            "Sitemap and robots.txt generation",
            "Google Analytics integration",
            "Conversion tracking setup",
            "Heatmap and user behavior analytics",
          ],
        },
        {
          category: "User Experience",
          items: [
            "Clear call-to-action elements",
            "Intuitive form design and validation",
            "Fast load times (< 3 seconds)",
            "Mobile touch-friendly interfaces",
            "Smooth scrolling and interactions",
            "User feedback mechanisms",
          ],
        },
        {
          category: "Maintenance & Support",
          items: [
            "Regular security updates",
            "Performance monitoring",
            "Content updates and management",
            "Bug fixes and improvements",
            "24/7 availability monitoring",
            "Backup and disaster recovery",
          ],
        },
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
        "Figma",
        "Adobe XD",
      ],
      benefits: [
        "Increased user engagement and time on site",
        "Higher conversion rates",
        "Improved search engine rankings",
        "Better mobile user experience",
        "Professional brand image",
        "Faster page load times",
      ],
    },
  },
  {
    id: "ecommerce-development",
    title: "ECommerce Development",
    slug: "ecommerce-development",
    summary: "Scalable online stores with fast checkout and inventory workflows.",
    description:
      "From product catalogs to payment flows, we build secure eCommerce experiences that support growth, optimized checkout, and reliable inventory management.",
    icon: ShoppingCart,
    details: {
      overview:
        "We develop full-featured eCommerce platforms designed to maximize sales, streamline operations, and provide excellent customer experiences. Our solutions scale with your business growth.",
      keyFeatures: [
        "Product Management",
        "Shopping Cart",
        "Payment Integration",
        "Inventory Management",
        "Order Tracking",
        "Customer Accounts",
      ],
      functionalities: [
        {
          category: "Product Management",
          items: [
            "Unlimited product catalog support",
            "Product variants and options (size, color, etc.)",
            "Bulk product upload functionality",
            "Product recommendations engine",
            "Digital and physical product support",
            "Product reviews and ratings system",
          ],
        },
        {
          category: "Shopping Cart & Checkout",
          items: [
            "Persistent shopping cart across sessions",
            "One-step checkout process",
            "Guest checkout option",
            "Multiple payment method support",
            "Coupon and discount code system",
            "Order confirmation emails",
          ],
        },
        {
          category: "Payment Processing",
          items: [
            "Stripe integration",
            "PayPal support",
            "Credit/Debit card processing",
            "Digital wallet support (Apple Pay, Google Pay)",
            "Secure PCI-DSS compliant transactions",
            "Subscription and recurring billing",
          ],
        },
        {
          category: "Inventory Management",
          items: [
            "Real-time stock tracking",
            "Automatic inventory updates",
            "Low stock alerts",
            "Backorder management",
            "Warehouse management system",
            "Product SKU tracking",
          ],
        },
        {
          category: "Order Management",
          items: [
            "Order status tracking for customers",
            "Admin order management dashboard",
            "Invoice generation and download",
            "Shipping integration and labels",
            "Return and refund management",
            "Order history and reorder functionality",
          ],
        },
        {
          category: "Customer Experience",
          items: [
            "User accounts and profiles",
            "Saved addresses and payment methods",
            "Order history and tracking",
            "Wishlist functionality",
            "Product comparison tools",
            "Live chat and customer support",
          ],
        },
        {
          category: "Analytics & Reporting",
          items: [
            "Sales analytics and reports",
            "Customer behavior tracking",
            "Revenue and profit analysis",
            "Popular products insights",
            "Conversion rate tracking",
            "Customer lifetime value metrics",
          ],
        },
      ],
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "Stripe",
        "Shopify API",
        "WooCommerce",
      ],
      benefits: [
        "Increased online sales",
        "Reduced cart abandonment",
        "Improved customer satisfaction",
        "Streamlined operations",
        "Better inventory control",
        "24/7 sales capability",
      ],
    },
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    summary: "Native and cross-platform apps for mobile-first experiences.",
    description:
      "Our mobile apps deliver intuitive experiences and polished interactions for iOS and Android, whether it's a consumer app or internal business tool.",
    icon: Smartphone,
    details: {
      overview:
        "We develop high-performance mobile applications for iOS and Android platforms. With expertise in native and cross-platform development, we deliver apps that users love.",
      keyFeatures: [
        "Native & Cross-Platform",
        "Push Notifications",
        "Offline Support",
        "Real-time Sync",
        "App Store Optimization",
        "Regular Updates",
      ],
      functionalities: [
        {
          category: "Core Features",
          items: [
            "Native iOS development (Swift)",
            "Native Android development (Kotlin)",
            "Cross-platform development (React Native/Flutter)",
            "Intuitive user interface design",
            "Smooth animations and transitions",
            "Hardware access (camera, GPS, sensors)",
          ],
        },
        {
          category: "Communication",
          items: [
            "Push notifications",
            "In-app messaging",
            "Email notifications",
            "SMS alerts",
            "Real-time messaging",
            "Voice and video calling",
          ],
        },
        {
          category: "Data & Storage",
          items: [
            "Secure local data storage",
            "Cloud synchronization",
            "Offline mode functionality",
            "Automatic data backup",
            "Encryption of sensitive data",
            "Database management",
          ],
        },
        {
          category: "User Management",
          items: [
            "User authentication (Email, Social, Biometric)",
            "Two-factor authentication",
            "User profiles and preferences",
            "Permission management",
            "Role-based access control",
            "Session management",
          ],
        },
        {
          category: "Performance & Security",
          items: [
            "App optimization for fast loading",
            "Battery and memory optimization",
            "Secure API communication (SSL/TLS)",
            "Data encryption",
            "App signing and verification",
            "Regular security updates",
          ],
        },
        {
          category: "Analytics & Feedback",
          items: [
            "User behavior tracking",
            "Crash reporting and analytics",
            "Performance monitoring",
            "In-app feedback collection",
            "A/B testing capabilities",
            "Custom event tracking",
          ],
        },
        {
          category: "App Store Management",
          items: [
            "App Store and Google Play submission",
            "Version management and updates",
            "Release notes and changelogs",
            "App Store Optimization (ASO)",
            "Rating and review management",
            "Beta testing through TestFlight/Google Play Beta",
          ],
        },
      ],
      technologies: [
        "Swift (iOS)",
        "Kotlin (Android)",
        "React Native",
        "Flutter",
        "Firebase",
        "AWS",
        "GraphQL",
      ],
      benefits: [
        "Enhanced user engagement",
        "Increased customer loyalty",
        "Higher conversion rates",
        "Direct customer communication",
        "Offline functionality",
        "Better brand presence",
      ],
    },
  },
  {
    id: "crm-software",
    title: "CRM Software",
    slug: "crm-software",
    summary: "Custom CRM tools for customer management and business automation.",
    description:
      "We build CRM solutions that simplify sales workflows, automate follow-ups, and give teams a single source of truth for customer data.",
    icon: Database,
    details: {
      overview:
        "Our custom CRM solutions are designed to streamline sales processes, improve customer relationships, and automate workflow operations. Built specifically for your business needs.",
      keyFeatures: [
        "Contact Management",
        "Sales Pipeline Tracking",
        "Task Automation",
        "Reporting & Analytics",
        "Team Collaboration",
        "Integration APIs",
      ],
      functionalities: [
        {
          category: "Contact & Account Management",
          items: [
            "Centralized contact database",
            "Company accounts and hierarchies",
            "Contact history and interactions",
            "Custom fields and attributes",
            "Contact segmentation and tagging",
            "Duplicate contact management",
          ],
        },
        {
          category: "Sales Pipeline",
          items: [
            "Customizable deal stages",
            "Sales opportunity tracking",
            "Pipeline visualization (Kanban board)",
            "Forecast and projections",
            "Deal probability tracking",
            "Automated pipeline movement",
          ],
        },
        {
          category: "Task & Activity Management",
          items: [
            "Task creation and assignment",
            "Activity logging (calls, emails, meetings)",
            "Calendar and scheduling",
            "Email integration and tracking",
            "Call recording and transcription",
            "Follow-up reminders and notifications",
          ],
        },
        {
          category: "Automation & Workflows",
          items: [
            "Workflow automation engine",
            "Lead scoring automation",
            "Automated email campaigns",
            "Trigger-based actions",
            "Task auto-assignment rules",
            "Data validation automation",
          ],
        },
        {
          category: "Reporting & Analytics",
          items: [
            "Sales performance dashboards",
            "Revenue forecasting reports",
            "Team productivity metrics",
            "Custom report builder",
            "Export to PDF and Excel",
            "Real-time data insights",
          ],
        },
        {
          category: "Collaboration Features",
          items: [
            "Team activity feeds",
            "Internal notes and comments",
            "Document sharing",
            "Sales team assignments",
            "Approval workflows",
            "Communication history",
          ],
        },
        {
          category: "Integration & APIs",
          items: [
            "Email integration (Gmail, Outlook)",
            "Calendar synchronization",
            "Slack and Teams integration",
            "Third-party app marketplace",
            "REST API for custom integrations",
            "Webhook support",
          ],
        },
        {
          category: "Mobile Access",
          items: [
            "Mobile app for iOS and Android",
            "Offline access to contacts",
            "Mobile task management",
            "Photo capture and attachment",
            "Mobile notification system",
            "Quick call and email logging",
          ],
        },
      ],
      technologies: [
        "Node.js",
        "React",
        "MongoDB",
        "PostgreSQL",
        "AWS",
        "Salesforce API",
        "WebSocket",
      ],
      benefits: [
        "Increased sales efficiency",
        "Better customer relationships",
        "Improved team collaboration",
        "Data-driven decision making",
        "Reduced administrative work",
        "Higher customer retention",
      ],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
