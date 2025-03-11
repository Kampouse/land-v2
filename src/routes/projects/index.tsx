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
export const projects = [
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
    featured: true,
    images: [
      {
        src: Studyhack,
        alt: "landing page for the app",
      },
    ],
    demoUrl: "https://justrnd.com",
    githubUrl: "https://github.com/Kampouse/just-rnd",
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
    featured: true,
    images: [],
    demoUrl: "https://coffee-plum-two.vercel.app",
    githubUrl: "https://github.com/example/coffee-platform",
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
              class="group rounded-xl bg-xy-black-secondary/30 p-4 transition-transform duration-300 hover:-translate-y-2"
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
