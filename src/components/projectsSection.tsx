import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { projects } from "~/routes/projects";
export default component$(() => {
  return (
    <section class="flex w-full items-start justify-start px-4 pt-4 md:items-center md:justify-center md:pt-0">
      <div
        data-section="projects"
        class="z-10 flex w-full max-w-4xl flex-col items-center rounded-lg bg-xy-black-secondary/30 p-4 backdrop-blur-sm sm:p-8"
      >
        <h2 class="mb-8 text-xl font-bold text-xy-cyan sm:text-2xl md:text-4xl">
          Projects
        </h2>
        <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              class="group relative flex flex-col overflow-hidden rounded-lg border border-xy-green-accent/30 bg-xy-black-primary/30 p-6 shadow-lg shadow-xy-green-accent/20 backdrop-blur-sm transition-all duration-300 hover:border-xy-green-accent/60 hover:bg-xy-black-primary/40 hover:shadow-xl hover:shadow-xy-green-accent/30"
            >
              <div class="relative mb-4 pt-[56.25%]">
                <project.image
                  alt={project.imageAlt}
                  class="absolute inset-0 h-full w-full rounded-lg object-cover"
                />
              </div>
              <h3 class="mb-2 text-xl font-semibold text-xy-cyan transition-colors duration-300 group-hover:text-xy-green-accent">
                {project.title}
              </h3>
              <p class="flex-grow text-sm text-gray-300">{project.description}</p>
              <div class="mt-4 flex items-center">
              </div>
            </Link>
          ))}
        </div>
        <div class="mt-8 flex justify-center">
          <Link
            href="/projects"
            class="text-lg font-semibold text-xy-cyan transition-colors hover:text-xy-green-accent"
          >
            See all projects →
          </Link>
        </div>
      </div>
    </section>
  );
});
