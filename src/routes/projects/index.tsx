import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import Studyhack from "~/assets/study-hack.png?jsx";
import Coffee from "~/assets/coffee.jpg?jsx";
export const projects = [
  {
    id: "just-rnd",
    title: "Coworking for the odd one",
    description: "The alternative connections that you were looking for",
    longDescription: `
      Just R&D is a unique coworking space platform designed for individuals who think differently.
      It provides an alternative way to connect and collaborate with like-minded professionals.

      The platform focuses on creating an environment where innovation and creative thinking can thrive,
      while maintaining a comfortable space for focused work and collaboration.
    `,
    image: Studyhack,
    imageAlt: "display of Just-R&D",
    technologies: ["Qwik", "TypeScript", "Node.js"],
    featured: true,
    images: [
      {
        src: "/images/just-rd-main.jpg",
        alt: "Just R&D Main Space",
      },
      {
        src: "/images/just-rd-collab.jpg",
        alt: "Collaboration Area",
      },
    ],
    demoUrl: "https://just-rd.example.com",
    githubUrl: "https://github.com/example/just-rd",
  },
  {
    id: "coffee-shop",
    title: "Coffee Shop Platform",
    description: "A modern solution for coffee shop management",
    longDescription: `
      A comprehensive platform for coffee shop management that helps owners streamline
      their operations and provide better service to their customers.

      Features include inventory management, order processing, and customer loyalty programs.
    `,
    image: Coffee,
    imageAlt: "Coffee Shop Platform Interface",
    technologies: ["Vue", "Python", "Django", "PostgreSQL"],
    featured: true,
    images: [
      {
        src: "/images/coffee-main.jpg",
        alt: "Coffee Shop Dashboard",
      },
      {
        src: "/images/coffee-orders.jpg",
        alt: "Order Management Interface",
      },
    ],
    demoUrl: "https://coffee-platform.example.com",
    githubUrl: "https://github.com/example/coffee-platform",
  },
  {
    id: "project-three",
    title: "Project Three",
    description:
      "A brief description of the third project and its key features",
    longDescription: `
      Detailed description of project three and its implementation details.
      Includes information about the challenges faced and solutions implemented.
    `,
    image: Studyhack,
    imageAlt: "Project 3 Screenshot",
    technologies: ["Next.js", "TailwindCSS", "MongoDB"],
    featured: false,
    images: [
      {
        src: "/images/project-three-main.jpg",
        alt: "Project Three Main View",
      },
    ],
    demoUrl: "https://project-three.example.com",
    githubUrl: "https://github.com/example/project-three",
  },
];

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
