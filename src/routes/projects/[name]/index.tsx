import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

interface ProjectDetail {
  name: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: { src: string; alt: string }[];
  demoUrl?: string;
  githubUrl?: string;
}

// In a real app, this would come from an API or database
const projectsData: Record<string, ProjectDetail> = {
  "project-one": {
    name: "project-one",
    title: "Project One",
    description:
      "A brief description of the first project and its key features.",
    longDescription: `
      This is an extensive description of Project One. It goes into detail about
      the challenges faced, solutions implemented, and the impact of the project.

      The project aimed to solve specific problems and achieved notable results
      through innovative approaches and careful consideration of user needs.
    `,
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    images: [
      {
        src: "https://images.nightcafe.studio/ik-seo/jobs/tIn0SKf5naXab6dX3KyU/tIn0SKf5naXab6dX3KyU--0--jbxlc/a-better-tomorrow.jpg?tr=w-1600,c-at_max",
        alt: "Project One Screenshot 1",
      },
      {
        src: "https://images.nightcafe.studio/ik-seo/jobs/tIn0SKf5naXab6dX3KyU/tIn0SKf5naXab6dX3KyU--0--jbxlc/a-better-tomorrow.jpg?tr=w-1600,c-at_max",
        alt: "Project One Screenshot 2",
      },
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project-one",
  },
  // Add more projects as needed
};

export default component$(() => {
  const location = useLocation();
  const projectName = location.params.name;
  const project = projectsData[projectName];

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
      <div class="relative mb-12 h-[60vh] w-full overflow-hidden">
        <img
          src={project.images[0].src}
          alt={project.images[0].alt}
          width={1600}
          height={900}
          class="h-full w-full rounded-lg border object-cover"
        />
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
            {project.images.length > 1 && (
              <section class="mb-12">
                <h3 class="mb-6 text-2xl font-semibold text-xy-green-accent">
                  Gallery
                </h3>
                <div class="grid gap-4 sm:grid-cols-2">
                  {project.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      class="group relative aspect-video cursor-pointer overflow-hidden rounded-lg"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
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
    </article>
  );
});
