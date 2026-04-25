export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  tags: string[];
  icon: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface ImpactItem {
  title: string;
  description: string;
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "digital-workflow-platform",
    title: "Digital Workflow Platform",
    category: "Full-Stack / Desktop Application",
    summary:
      "Contributed to a production-grade desktop application for managing digital workflows, report generation, and template building — built with a modern full-stack architecture.",
    highlights: [
      "Built and maintained report/template builder features using React, TypeScript, and Electron",
      "Debugged authentication errors, performance lag, missing data issues, and broken build pipelines",
      "Worked with MySQL and Drizzle ORM to handle local report data reliably",
    ],
    tags: ["React", "TypeScript", "Electron", "Node.js", "MySQL", "Drizzle ORM"],
    icon: "Monitor",
  },
  {
    id: "dw-ai-assistant",
    title: "DW AI Assistant",
    category: "AI Integration",
    summary:
      "Integrated a local AI assistant into the platform using Ollama, enabling natural language interaction with application data for report summaries and intelligent field detection.",
    highlights: [
      "Connected live application data to AI responses for context-aware report summaries",
      "Handled timeout limits, token overflow, fallback logic, and response formatting",
      "Improved prompt quality to produce consistent, professional natural language output",
    ],
    tags: ["Ollama", "LLM", "Prompt Engineering", "Node.js", "TypeScript"],
    icon: "Bot",
  },
  {
    id: "data-access-api-catalog",
    title: "Data Access API Catalog",
    category: "Backend / API Development",
    summary:
      "Designed and improved an internal API catalog exposing structured data feeds with authentication, filtering, and pagination — clearly separating development and production endpoints.",
    highlights: [
      "Built Data Feed endpoints with API key authentication and query parameter support",
      "Implemented limit, offset, updatedSince, and filter parameters for flexible data access",
      "Clarified and documented the distinction between localhost/dev and production endpoints",
    ],
    tags: ["REST API", "API Key Auth", "Node.js", "TypeScript", "Pagination"],
    icon: "Database",
  },
  {
    id: "digital-desk-licensing",
    title: "Digital Desk Licensing",
    category: "Product / License Management",
    summary:
      "Worked on the customer-facing licensing system, implementing seat-based license logic and improving admin workflows for managing product access at scale.",
    highlights: [
      "Implemented fixed and floating seat logic for multi-seat license management",
      "Improved admin and product flows for customer license assignment and revocation",
      "Contributed to cleaner UX for license status visibility and seat allocation",
    ],
    tags: ["License Management", "React", "TypeScript", "Node.js", "MySQL"],
    icon: "KeyRound",
  },
  {
    id: "background-sync-service",
    title: "Background Sync Service Automation",
    category: "System Service / Automation",
    summary:
      "Worked on a background sync service that runs as a Windows service to keep application data synchronized without manual startup.",
    highlights: [
      "Configured sync processes to run continuously as Windows services using NSSM",
      "Handled service startup, restart behavior, logging, and troubleshooting",
      "Supported reliable background data synchronization for application workflows",
    ],
    tags: ["NSSM", "Windows Service", "Node.js", "Sync Service", "Logging", "Automation"],
    icon: "Wrench",
  },
  {
    id: "server-hosting-deployment",
    title: "Server Hosting & Deployment Operations",
    category: "Infrastructure / Deployment",
    summary:
      "Hosted and configured internal application environments, handling server setup, domain routing, SSL issues, and production deployment troubleshooting.",
    highlights: [
      "Configured hosting environments using Windows Server, IIS, Cloudflare, and deployment platforms",
      "Troubleshot SSL/TLS, DNS, reverse proxy, tunnel, and production endpoint issues",
      "Improved deployment reliability by identifying differences between local, staging, and production environments",
    ],
    tags: ["Windows Server", "IIS", "Cloudflare", "SSL/TLS", "DNS", "Vercel"],
    icon: "Server",
  },
  {
    id: "teltonika-sms-gateway",
    title: "Teltonika SMS Gateway",
    category: "Infrastructure / Network Testing",
    summary:
      "Configured and tested an SMS gateway using Teltonika hardware, validating device networking, HTTP endpoints, and diagnosing slow or inconsistent message delivery.",
    highlights: [
      "Configured IP, subnet, and gateway settings for device network connectivity",
      "Validated HTTP SMS endpoints and tested message delivery under real conditions",
      "Diagnosed and documented root causes of slow or failed SMS transmissions",
    ],
    tags: ["Teltonika", "SMS Gateway", "HTTP API", "Networking", "Device Config"],
    icon: "Wifi",
  },
  {
    id: "system-testing-acceptance-documentation",
    title: "System Testing & Acceptance Documentation",
    category: "QA / Documentation",
    summary:
      "Prepared and improved structured testing documentation for system acceptance, helping technical checks become clearer, more organized, and easier to verify.",
    highlights: [
      "Created and refined UAT, OSAT, and SSAT-style test documentation for project validation",
      "Organized test cases, expected results, actual results, tester details, dates, and pass/fail criteria",
      "Improved document formatting and wording so testing records looked more official and easier to review",
    ],
    tags: ["UAT", "OSAT", "SSAT", "Test Cases", "Documentation", "QA"],
    icon: "CheckCircle2",
  },
  {
    id: "security-testing-qa",
    title: "Security Testing & QA",
    category: "Security / Quality Assurance",
    summary:
      "Conducted structured security testing and quality assurance activities including XSS, SQL injection, and CSRF assessments, alongside formal UAT documentation and bug reporting.",
    highlights: [
      "Performed XSS, SQL injection, and CSRF testing with documented findings",
      "Identified client-side validation bypass vulnerabilities and reported them clearly",
      "Produced UAT documents, bug reports, and structured testing workflows",
    ],
    tags: ["XSS", "SQL Injection", "CSRF", "UAT", "Bug Reporting", "QA"],
    icon: "ShieldCheck",
  },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML/CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "REST APIs", "API Key Auth", "Data Feed APIs", "Drizzle ORM", "MySQL"],
  },
  {
    label: "Desktop Apps",
    skills: ["Electron", "IPC Communication", "Local Data Handling"],
  },
  {
    label: "AI / Automation",
    skills: ["Ollama", "LLM Integration", "Prompt Engineering", "Context Injection"],
  },
  {
    label: "Infrastructure",
    skills: ["Windows Server", "IIS", "Cloudflare Tunnel", "SSL/TLS", "DNS", "Apache", "VM Access", "Device Networking"],
  },
  {
    label: "Security / Testing",
    skills: ["XSS Testing", "SQL Injection", "CSRF", "UAT Documentation", "Bug Reporting"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "pnpm", "Chrome DevTools", "NSSM", "Linux CLI"],
  },
  {
    label: "Delivery / Documentation",
    skills: ["UAT Documentation", "OSAT / SSAT", "Technical Handover", "Setup Guides", "Issue Analysis", "Testing Records"],
  },
];

// ─── IMPACT ──────────────────────────────────────────────────────────────────

export const impactItems: ImpactItem[] = [
  {
    title: "End-to-End Ownership",
    description:
      "Took features from initial understanding through implementation, debugging, and delivery — not just assigned subtasks.",
  },
  {
    title: "Real-World Debugging",
    description:
      "Resolved production-level issues including authentication failures, performance regressions, and broken build pipelines.",
  },
  {
    title: "Cross-Stack Contribution",
    description:
      "Worked across frontend, backend, desktop, AI, infrastructure, and security — adapting quickly to each domain.",
  },
  {
    title: "Product Thinking",
    description:
      "Considered user impact and business logic when implementing features, not just technical correctness.",
  },
  {
    title: "Documentation & Communication",
    description:
      "Produced UAT documents, bug reports, and API documentation that the team could act on directly.",
  },
  {
    title: "Independent Problem Solving",
    description:
      "Diagnosed unfamiliar systems — from SMS hardware to LLM prompt behavior — with minimal hand-holding.",
  },
];
