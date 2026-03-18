import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import Studyhack from "~/assets/study-hack.png";
import JustRND from "~/assets/just-rnd.png?jsx";
import Coffee from "~/assets/coffee.jpg?jsx";
import JustChat from "~/assets/just-chat.png?jsx";
import OGJustRND from "~/assets/just-rnd.png";

import OGCoffee from "~/assets/coffee.jpg";
import OGJustChat from "~/assets/just-chat.png";

import JustChatConversation from "~/assets/just-chat-convo.png";
import JustChatConversationAnalysis from "~/assets/just-chat-convo-analysis.png";
import LegionSocial from "~/assets/legion-social.jpg?jsx";
import OGLegionSocial from "~/assets/legion-social.jpg";
import ToolKit from "~/assets/tool-kit.jpg?jsx";
import OGToolKit from "~/assets/tool-kit.jpg";
import SevenGen from "~/assets/7gen.jpg?jsx";
import OGSevenGen from "~/assets/7gen.jpg";

// Placeholder images for new projects (reuse existing for now)
const PlaceholderRust = JustRND;
const PlaceholderTS = JustChat;
const PlaceholderPython = Studyhack;

export const projects = [
  // ============ NEW FEATURED PROJECTS ============
  {
    id: "gork-protocol",
    title: "Gork Protocol",
    description:
      "P2P communication system between AI agents using blockchain as trust layer",
    longDescription: [
      "Gork is a research project exploring decentralized AI agent collaboration. The goal is to enable AI agents to discover each other, verify reputation on-chain, and collaborate directly via P2P without centralized platforms. Following the Agent Skills open standard, the protocol investigates how agents could share capabilities, execute tasks, and build trust in a decentralized network.",
      "The research proposes a two-layer architecture: Trust layer (NEAR blockchain) for identity verification, reputation scores (0-100), skill registration, and historical ratings; Collaboration layer (P2P network) for direct agent-to-agent task execution, Agent Skills compatibility, end-to-end encrypted messaging, and natural conversation flow.",
      "Real-world usage would feel like a trustworthy freelance marketplace for AI agents. You could discover agents by capability—'Hey alice.near, I saw you have a csv-analyzer skill. Can you help me analyze my Q4 sales data?'—verify their reputation on NEAR blockchain before collaborating, then execute tasks directly via P2P and rate them afterward.",
      "The implementation explores Agent Skills standard (agentskills.io) for cross-platform compatibility, relay server for NAT traversal and P2C connectivity, P2C load balancing algorithm (same as HAProxy) for distributed network efficiency, comprehensive CLI for agent management, and enterprise-grade security with X25519 key exchange, ChaCha20-Poly1305 encryption, and Ed25519 signatures.",
      "This research project explores an ambitious goal: to create a network that's always alive, like blockchain itself. Unlike traditional centralized AI platforms that can shut down or change policies, Gork's trust layer on NEAR blockchain would ensure that agents, their reputations, and their capabilities persist indefinitely. The network would stay alive as long as agents are running and the blockchain exists, creating a truly decentralized and resilient foundation for AI agent collaboration.",
      "Built entirely in Rust for maximum performance and security, Gork solves the problem of platform lock-in in AI development. You choose who you work with, see real reputation scores verified on-chain, own your portable reputation across platforms, and pay for results rather than API calls.",
    ],
    image: PlaceholderRust,
    ogImage: OGJustRND,
    imageAlt: "Gork Protocol - P2P Agent Communication",
    technologies: ["Rust", "NEAR Protocol", "P2P", "libp2p", "Cryptography"],
    featured: true,
    images: [],
    demoUrl: "https://github.com/Kampouse/gork-protocol",
    githubUrl: "https://github.com/Kampouse/gork-protocol",
  },
  {
    id: "key-manager",
    title: "Key Manager (TEE)",
    description:
      "OutLayer TEE Key Manager - Encrypted KV storage with CKD-based keys",
    longDescription: [
      "The fundamental challenge: how to store private data on a public ledger without exposing sensitive information. Traditional blockchains are transparent by design, but real-world applications need to keep certain data private while still leveraging blockchain's trust and immutability.",
      "This Key Manager solves that problem using Trusted Execution Environments (TEE). TEEs provide hardware-isolated secure enclaves where code and data are protected from the rest of the system. Keys are generated and used within these secure enclaves, ensuring they never leave protected memory in plaintext.",
      "The system implements encrypted key-value storage with Child Key Derivation (CKD) for hierarchical key generation. This allows applications to derive multiple keys from a single master key while maintaining security boundaries between different data domains. Built entirely in Rust for memory safety and security guarantees.",
    ],
    image: PlaceholderRust,
    ogImage: OGJustRND,
    imageAlt: "Key Manager - TEE Encrypted Storage",
    technologies: ["Rust", "TEE", "Cryptography", "Key Derivation", "NEAR"],
    featured: true,
    images: [],
    demoUrl: "https://github.com/Kampouse/key-manager",
    githubUrl: "https://github.com/Kampouse/key-manager",
  },
  {
    id: "near-starter-kit",
    title: "NEAR Starter Kit",
    description:
      "Production-ready NEAR dApp starter with React 19 + Tailwind v4",
    longDescription: [
      "The hardest part of building a new dApp isn't writing the smart contracts or the frontend—it's finding the right tools and figuring out how to integrate them together. Wallet connection, state management, deployment, and styling libraries all need to play nicely, but documentation rarely covers how to wire everything up from scratch.",
      "I built this NEAR Starter Kit to solve exactly that problem. It provides a complete, production-ready foundation with React 19, TypeScript, Tailwind CSS v4, Hot Labs wallet integration, TanStack Query, and Cloudflare Pages deployment—all pre-configured and tested together.",
      "Now when I want to build a new application on NEAR, I can start coding features immediately instead of spending hours setting up the toolchain. Everything just works, so I know exactly where to start from every time.",
    ],
    image: ToolKit,
    ogImage: OGToolKit,
    imageAlt: "NEAR Starter Kit",
    technologies: [
      "TypeScript",
      "React 19",
      "NEAR Protocol",
      "Tailwind CSS v4",
      "Cloudflare Pages",
    ],
    featured: true,
    images: [],
    demoUrl: "https://near-starter-kit.pages.dev/",
    githubUrl: "https://github.com/Kampouse/near-starter-kit",
  },
  {
    id: "vibe-paper",
    title: "Vibe Paper",
    description:
      "Speculative AI memory systems - exploratory research concepts",
    longDescription: [
      "A collection of exploratory ideas exploring AI memory systems and long-term context in large language models. This is not production code or fully working implementations—these are speculative concepts inspired by research papers, meant as starting points for actual research rather than polished solutions.",
      "The core concept, Compact Context Model (CCM), proposes a graph-based approach to handling long-term context by extracting the decisional structure of conversations while discarding the rest. The goal is to potentially reduce token usage by 80-90% while preserving what actually matters for decision-making.",
      "These ideas emerged from exploring research on long-term memory for AI systems, context compression techniques, graph-based knowledge representation, and agent learning systems. The philosophy is simple: sometimes you need to throw ideas at a wall and see what sticks. This is that wall.",
      "Reality check: no working code, no benchmarks, no rigorous evaluation. But these are interesting ideas written down as concept papers, potential research directions, and speculative architectures that could inform real implementations down the line.",
    ],
    image: PlaceholderPython,
    ogImage: Studyhack,
    imageAlt: "Vibe Paper - AI Memory Research",
    technologies: [
      "Python",
      "LLM",
      "Memory Systems",
      "Research",
      "Graph Theory",
    ],
    featured: true,
    images: [],
    demoUrl: "https://github.com/Kampouse/vibe-paper",
    githubUrl: "https://github.com/Kampouse/vibe-paper",
  },
  {
    id: "7gen",
    title: "7Gen Marketing Website",
    description:
      "Marketing website for EV fleet solutions company, built with Qwik, Tailwind, Sanity, and Cloudflare",
    longDescription: [
      "In just 4 weeks, I delivered a production-ready marketing website for 7Gen, a company helping businesses transition to electric vehicles. The site showcases their core services: vehicle financing, charging infrastructure, fleet management, and carbon credit tracking.",
      "I chose Qwik because I've built many applications with it before and knew it offers the best developer experience and performance. Combined with Tailwind CSS for rapid styling, I set up Sanity as a headless CMS for content flexibility, enabling the marketing team to update content independently. Everything deploys automatically via Cloudflare Pages with global edge caching.",
      "The website includes service pages for each offering, customer testimonials with a carousel interface, and full English/French bilingual support. I prioritized SEO and responsive design to ensure it performs well across all devices.",
      "The result speaks for itself: 90+ Lighthouse scores, sub-second page loads, and a seamless deployment workflow that lets the marketing team self-publish content without developer involvement.",
    ],
    image: SevenGen,
    ogImage: OGSevenGen,
    imageAlt: "7Gen EV Fleet Management Platform",
    technologies: [
      "Qwik",
      "Tailwind CSS",
      "Sanity",
      "Cloudflare",
      "TypeScript",
    ],
    featured: true,
    images: [],
    demoUrl: "https://7gen.com/solutions/",
    githubUrl: "",
  },
  // ============ LEGACY PROJECTS ============
  {
    id: "just-rnd",
    title: "Just R&D",
    description:
      "The alternative to the traditional Meetup platform for like-minded professionals",
    longDescription: [
      "Just R&D is a unique coworking space platform designed for individuals who think differently. It provides an alternative way to connect and collaborate with like-minded professionals.",
      "The platform focuses on creating an environment where innovation and creative thinking can thrive, while maintaining a comfortable space for focused work and collaboration.",
    ],
    image: JustRND,
    ogImage: OGJustRND,
    imageAlt: "display of Just-R&D",
    technologies: [
      "Qwik",
      "TypeScript",
      "Node.js",
      "Turso",
      "sqlite",
      "TailwindCss",
    ],
    featured: false,
    images: [
      {
        src: Studyhack,
        alt: "landing page for the app",
      },
    ],
    demoUrl: "https://space.justrnd.com",
    githubUrl: "https://github.com/Kampouse/study-hack",
  },
  {
    id: "legion-social",
    title: "Legion Social (Cyborg)",
    description:
      "Social platform for NEAR builders with AI chat, builder directory, and project management",
    longDescription: [
      "Built Legion Social as a main contributor—a hybrid platform creating the social layer for NEAR ecosystem builders through AI chat, directory services, and meaningful connections. The platform solves the problem of discovering who's actually building in NEAR beyond just the 'yappers' on X.",
      "Leveraged the FastKV protocol for storing and retrieving key-value data on NEAR blockchain without storage deposits—only transaction fees. This eliminates the barrier created by NEAR Social's deposit requirements and is 10-50x cheaper than traditional contract storage. I also developed near-balancer, a round-robin RPC load balancer that distributes requests across multiple endpoints for improved reliability and reduced rate limiting. I integrated both systems to enable instant project updates and social graph features.",
      "The platform features AI chat powered by NEAR AI Cloud's GLM-4.6 model with streaming responses and NEAR-specific context—essentially Grok for the NEAR ecosystem. The builder directory lets users browse NEAR Legion NFT holders, view profiles, and see project showcases. All data syncs from blockchain to D1 database via comprehensive sync scripts for 10-50x faster query times.",
      "Tech stack includes React 19, TanStack Router/Query, Tailwind CSS v4, and shadcn/ui on the frontend. Backend uses Hono.js, Drizzle ORM with D1, Better-Auth, and better-near-auth. Integrated with NEAR AI Cloud, NEAR Social, NEARBlocks API, FastData, and OutLayer payment keys.",
    ],
    image: LegionSocial,
    ogImage: OGLegionSocial,
    imageAlt: "Legion Social - NEAR Builder Platform",
    technologies: [
      "React 19",
      "TypeScript",
      "Hono.js",
      "Drizzle ORM",
      "NEAR Protocol",
      "Tailwind CSS v4",
      "AI Integration",
    ],
    featured: false,
    images: [],
    demoUrl: "https://near-agent.pages.dev/",
    githubUrl: "https://github.com/NEARBuilders/cyborg",
  },
  {
    id: "just-chat",
    title: "Just Chat",
    description: "Learn foreign language with the help of AI",
    longDescription: [
      "The project is a chat application that helps users learn foreign languages. It uses AI to simulate friend conversation in two languages - the one you currently speak and the one that you want to learn. You can also analyse the content of sentences to have a better understanding of what was said.",
    ],
    image: JustChat,
    ogImage: OGJustChat,
    imageAlt: "Just chat logo",
    technologies: ["qwikjs", "tailwindcss", "railway", "drizzle", "openAI"],
    featured: false,
    images: [
      {
        src: JustChatConversationAnalysis,
        alt: "Just R&D Main Space",
      },
      {
        src: JustChatConversation,
        alt: "Collaboration Area",
      },
    ],
    demoUrl: "https://chat.justrnd.com",
    githubUrl: "https://github.com/kampouse/justchat",
  },
];
export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  image: any;
  imageAlt: string;
  technologies: string[];
  featured: boolean;
  images: {
    src: string;
    alt: string;
  }[];
  demoUrl: string;
  githubUrl: string;
};
export default component$(() => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div class="space-y-12">
      {/* Featured Projects */}
      <section>
        <h2 class="mb-6 text-2xl font-bold text-xy-green-accent">
          Featured Projects
        </h2>
        <div class="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              class="group rounded-xl border border-xy-black-secondary bg-xy-black-secondary/30 p-6 transition-all duration-200 hover:border-xy-cyan/30 hover:bg-xy-black-secondary/50"
            >
              <div class="relative mb-6 aspect-video overflow-hidden rounded-lg border border-xy-black-secondary bg-xy-black-secondary/50">
                <project.image class="h-full w-full object-cover transition-opacity duration-200" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <h3 class="mb-2 text-xl font-bold text-xy-cyan">
                {project.title}
              </h3>
              <p class="mb-4 text-xy-muted">{project.description}</p>
              <div class="flex flex-wrap gap-2">
                {project.technologies.map((tag) => (
                  <span
                    key={tag}
                    class="rounded-full bg-xy-black-primary px-3 py-1 text-sm text-xy-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 class="mb-6 text-2xl font-bold text-xy-green-accent">
          More Projects
        </h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              class="group rounded-xl bg-xy-black-secondary/30 p-4 transition-transform duration-300"
            >
              <div class="relative mb-4 aspect-video overflow-hidden rounded-lg">
                <project.image class="h-full w-full object-cover transition-transform duration-300" />

                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h3 class="mb-2 text-lg font-bold text-xy-cyan">
                {project.title}
              </h3>
              <p class="mb-4 text-sm text-xy-muted">{project.description}</p>
              <div class="flex flex-wrap gap-2">
                {project.technologies.map((tag) => (
                  <span
                    key={tag}
                    class="rounded-full bg-xy-black-primary px-3 py-1 text-xs text-xy-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
});
