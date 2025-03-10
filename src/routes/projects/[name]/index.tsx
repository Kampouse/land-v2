import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { projects } from "..";

export default component$(() => {
  const location = useLocation();
  const projectName = location.params.name;
  const project = projects.find((p) => p.id === projectName);
  const selectedImage = useSignal<{ src: string; alt: string } | null>(null);
  const isModalOpen = useSignal(false);

  const openModal$ = $((image: { src: string; alt: string }) => {
    selectedImage.value = image;
    isModalOpen.value = true;
    document.body.style.overflow = "hidden";
  });

  const closeModal$ = $(() => {
    isModalOpen.value = false;
    document.body.style.overflow = "";
  });

  if (!project) {
    return (
      <div class="text-center text-xy-muted">
        <h2 class="text-2xl">Project not found</h2>
      </div>
    );
  }

  return (
    <article class="min-h-screen">
      {/* Hero Section with Main Image */}
      <div class="relative mb-12 h-[60vh]  w-full overflow-hidden rounded-lg border border-xy-cyan/30 object-cover shadow-lg shadow-xy-cyan/10 transition-all duration-300 hover:brightness-110">
        <project.image class=" h-full w-full rounded-lg border border-xy-cyan/30 object-cover shadow-lg shadow-xy-cyan/10 transition-all duration-300 hover:brightness-110" />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-xy-black-primary"></div>
        <div class="absolute bottom-0 left-0 right-0 p-8">
          <div class="container mx-auto">
            <h2 class="mb-4 text-4xl font-bold text-xy-cyan">
              {project.title}
            </h2>
            <p class="text-xl text-xy-muted">{project.description}</p>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4">
        <div class="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Project Info */}
          <div class="lg:col-span-2">
            {/* Project Details */}
            <section class="mb-12 rounded-xl bg-xy-black-secondary/30 p-6 backdrop-blur-sm">
              <h3 class="mb-6 text-2xl font-semibold text-xy-green-accent">
                Project Overview
              </h3>
              <div class="prose prose-invert max-w-none text-xy-muted">
                {project.longDescription}
              </div>
            </section>

            {/* Additional Images Gallery */}
            {project.images.length > 0 && (
              <section class="mb-12">
                <h3 class="mb-6 text-2xl font-semibold text-xy-green-accent">
                  Gallery
                </h3>
                <div class="grid gap-4 sm:grid-cols-2">
                  {project.images.map((image, index: number) => (
                    <div
                      key={index}
                      class="group relative aspect-video cursor-pointer overflow-hidden rounded-lg"
                      onClick$={() => openModal$(image)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={500}
                        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Tech Stack & Links */}
          <div class="lg:sticky lg:top-4 lg:h-fit">
            <div class="rounded-xl bg-xy-black-secondary/30 p-6 backdrop-blur-sm">
              {/* Technologies */}
              <section class="mb-8">
                <h3 class="mb-4 text-xl font-semibold text-xy-green-accent">
                  Technologies Used
                </h3>
                <div class="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      class="rounded-full bg-xy-black-primary px-4 py-2 text-sm font-medium text-xy-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Links */}
              <section class="flex flex-col gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center rounded-lg bg-xy-cyan px-6 py-3 font-semibold text-xy-black-primary transition-colors hover:bg-xy-cyan/80"
                  >
                    View Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center rounded-lg border border-xy-cyan px-6 py-3 font-semibold text-xy-cyan transition-colors hover:bg-xy-cyan/20"
                  >
                    View Source Code
                  </a>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen.value && selectedImage.value && (
        <div
          class="fixed inset-0 z-50 flex items-center justify-center bg-xy-black-primary/80 p-4 backdrop-blur-sm"
          onClick$={closeModal$}
        >
          <div
            class="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg"
            onClick$={(e) => e.stopPropagation()}
          >
            <button
              class="absolute right-2 top-2 rounded-full bg-xy-black-primary p-2 text-xy-cyan hover:bg-xy-black-secondary"
              onClick$={closeModal$}
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage.value.src}
              alt={selectedImage.value.alt}
              width={1000}
              height={1000}
              class="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </article>
  );
});
export const head: DocumentHead = ({ params }) => {
  const project = projects.find((p) => p.id === params.name);

  return {
    title: project ? `${project.title} | Project Details` : "Project Not Found",
    meta: [
      {
        name: "description",
        content: project
          ? project.description
          : "Project details not available",
      },
      {
        name: "keywords",
        content: project
          ? `projects, ${project.title}, ${project.technologies.join(", ")}`
          : "projects",
      },
      {
        name: "author",
        content: "Portfolio Creator",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "theme-color",
        content: "#0f172a",
      },
      {
        property: "og:image",
        content: project?.image,
      },
      {
        property: "og:image:width",
        content: 1200,
      },
      {
        property: "og:image:height",
        content: 630,
      },
      {
        property: "og:image:alt",
        content: project
          ? `Screenshot of ${project.title} project`
          : "Project image",
      },
      {
        property: "og:title",
        content: project
          ? `${project.title} | Project Details`
          : "Project Not Found",
      },
      {
        property: "og:description",
        content: project
          ? project.description
          : "Project details not available",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: project ? `/projects/${project.id}` : "/projects",
      },
      {
        property: "og:site_name",
        content: "Portfolio",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: project
          ? `${project.title} | Project Details`
          : "Project Not Found",
      },
      {
        name: "twitter:description",
        content: project
          ? project.description
          : "Project details not available",
      },
      {
        name: "twitter:image",
        content: project?.image,
      },
    ],
  };
};
