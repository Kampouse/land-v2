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

// Placeholder images for new projects (reuse existing for now)
const PlaceholderRust = JustRND;
const PlaceholderTS = JustChat;
const PlaceholderPython = Studyhack;

export const projects = [
  // ============ NEW FEATURED PROJECTS ============
  {
    id: "gork-protocol",
    title: "Gork Protocol",
    description: "P2P communication system between AI agents using blockchain as trust layer",
    longDescription: `
      Decentralized P2P protocol enabling AI agents to communicate securely
      using NEAR blockchain for identity and trust verification. Features
      end-to-end encryption, replay protection, and relay-based routing.
      Built with Rust for maximum performance and reliability.
    `,
    image: PlaceholderRust,
    ogImage: OGJustRND,
    imageAlt: "Gork Protocol - P2P Agent Communication",
    technologies: [
      "Rust",
      "NEAR Protocol",
      "P2P",
      "libp2p",
      "Cryptography",
    ],
    featured: true,
    images: [],
    demoUrl: "https://github.com/Kampouse/gork-protocol",
    githubUrl: "https://github.com/Kampouse/gork-protocol",
  },
  {
    id: "key-manager",
    title: "Key Manager (TEE)",
    description: "OutLayer TEE Key Manager - Encrypted KV storage with CKD-based keys",
    longDescription: `
      Secure key management system leveraging Trusted Execution Environments (TEE)
      for encrypted key-value storage. Uses Child Key Derivation (CKD) for
      hierarchical key generation. Built in Rust for security-critical operations.
    `,
    image: PlaceholderRust,
    ogImage: OGJustRND,
    imageAlt: "Key Manager - TEE Encrypted Storage",
    technologies: [
      "Rust",
      "TEE",
      "Cryptography",
      "Key Derivation",
      "NEAR",
    ],
    featured: true,
    images: [],
    demoUrl: "https://github.com/Kampouse/key-manager",
    githubUrl: "https://github.com/Kampouse/key-manager",
  },
  {
    id: "near-starter-kit",
    title: "NEAR Starter Kit",
    description: "Production-ready NEAR dApp starter with React 19 + Tailwind v4",
    longDescription: `
      Modern starter kit for building NEAR Protocol dApps. Includes React 19,
      TypeScript, Tailwind CSS v4, Hot Labs wallet integration, TanStack Query,
      and Cloudflare Pages deployment. Zero-config, production-ready.
    `,
    image: PlaceholderTS,
    ogImage: OGJustChat,
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
    description: "Speculative AI memory systems - exploratory research concepts",
    longDescription: `
      Collection of speculative ideas exploring AI memory architectures.
      Includes Compact Context Model (CCM) - graph-based decision extraction
      for long-term context in LLMs. Potentially reduce token usage by 80-90%
      while preserving what actually matters. Research playground.
    `,
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
  // ============ LEGACY PROJECTS ============
  {
    id: "just-rnd",
    title: "Just R&D",
    description:
      "The alternative to the traditional Meetup platform for like-minded professionals",
    longDescription: `
      Just R&D is a unique coworking space platform designed for individuals who think differently.
      It provides an alternative way to connect and collaborate with like-minded professionals.

      The platform focuses on creating an environment where innovation and creative thinking can thrive,
      while maintaining a comfortable space for focused work and collaboration.
    `,
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
    id: "coffee-shop",
    title: "Coffee Shop Platform",
    description: "a Simple Coffee shop store front",
    longDescription: `
     Simple Coffee shop store frontend without any api integration praticed  responsive web design on mutliplaform while learning the basic of qwikjs
    `,
    image: Coffee,
    ogImage: OGCoffee,
    imageAlt: "Coffee Shop Platform Interface",
    technologies: ["qwikjs", "tailwindcss", "coffee"],
    featured: false,
    images: [],
    demoUrl: "https://coffee-plum-two.vercel.app",
    githubUrl: "https://github.com/kampouse/coffee",
  },
  {
    id: "just-chat",
    title: "Just Chat",
    description: "Learn foreign language with the help of AI",
    longDescription: `
     The project is a chat application that helps users learn foreign languages. It uses AI to simulate friend conversation in two languages. the one you currently speak and the one that you want to learn. You can also analyse the content of sentence to have a better understanding of  the said sentence
    `,
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
  longDescription: string;
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
