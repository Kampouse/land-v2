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
        <h2 class="mb-2 text-xl font-bold text-xy-cyan sm:mb-4 sm:text-2xl md:text-4xl">
          Projects
        </h2>
        <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              class="flex cursor-pointer flex-col overflow-hidden rounded-lg bg-xy-black-primary/50 "
            >
              <div class="relative h-48">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  height={192}
                  width={256}
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div class="p-4">
                <h3 class="mb-2 font-bold text-xy-green-accent">
                  {project.title}
                </h3>
                <p class="text-sm text-xy-muted">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});
