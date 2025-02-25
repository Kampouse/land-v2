import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const projects = [
  {
    id: "project-one",
    title: "Project One",
    description:
      "A brief description of the first project and its key features.",
    imageSrc:
      "https://images.nightcafe.studio/ik-seo/jobs/tIn0SKf5naXab6dX3KyU/tIn0SKf5naXab6dX3KyU--0--jbxlc/a-better-tomorrow.jpg?tr=w-1600,c-at_max",
    imageAlt: "Project 1",
    tags: ["React", "TypeScript", "Node.js"],
    featured: true,
  },
  {
    id: "project-two",
    title: "Project Two",
    description:
      "A brief description of the second project and its key features.",
    imageSrc:
      "https://images.nightcafe.studio/ik-seo/jobs/tIn0SKf5naXab6dX3KyU/tIn0SKf5naXab6dX3KyU--0--jbxlc/a-better-tomorrow.jpg?tr=w-1600,c-at_max",
    imageAlt: "Project 2",
    tags: ["Vue", "Python", "Django"],
    featured: true,
  },
  {
    id: "project-three",
    title: "Project Three",
    description:
      "A brief description of the third project and its key features.",
    imageSrc:
      "https://images.nightcafe.studio/ik-seo/jobs/tIn0SKf5naXab6dX3KyU/tIn0SKf5naXab6dX3KyU--0--jbxlc/a-better-tomorrow.jpg?tr=w-1600,c-at_max",
    imageAlt: "Project 3",
    tags: ["Next.js", "TailwindCSS", "MongoDB"],
    featured: false,
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
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  class="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <h3 class="mb-2 text-xl font-bold text-xy-cyan">
                {project.title}
              </h3>
              <p class="mb-4 text-xy-muted">{project.description}</p>
              <div class="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h3 class="mb-2 text-lg font-bold text-xy-cyan">
                {project.title}
              </h3>
              <p class="mb-4 text-sm text-xy-muted">{project.description}</p>
              <div class="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
