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
    description: "A brief description of the first project and its key features.",
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
        alt: "Project One Screenshot 1"
      },
      {
        src: "https://images.nightcafe.studio/ik-seo/jobs/tIn0SKf5naXab6dX3KyU/tIn0SKf5naXab6dX3KyU--0--jbxlc/a-better-tomorrow.jpg?tr=w-1600,c-at_max",
        alt: "Project One Screenshot 2"
      }
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project-one"
  }
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
    <article class="rounded-xl bg-xy-black-secondary/30 p-6 backdrop-blur-sm">
      <header class="mb-8">
        <h2 class="mb-4 text-3xl font-bold text-xy-cyan">{project.title}</h2>
        <p class="text-lg text-xy-muted">{project.description}</p>
      </header>

      {/* Image Gallery */}
      <div class="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {project.images.map((image, index) => (
          <div key={index} class="relative aspect-video overflow-hidden rounded-lg border border-xy-black-secondary bg-xy-black-secondary/50">
            <img
              src={image.src}
              alt={image.alt}
              class="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Project Details */}
      <div class="mb-8">
        <h3 class="mb-4 text-xl font-semibold text-xy-green-accent">
          Project Details
        </h3>
        <div class="whitespace-pre-line text-xy-muted">
          {project.longDescription}
        </div>
      </div>

      {/* Technologies */}
      <div class="mb-8">
        <h3 class="mb-4 text-xl font-semibold text-xy-green-accent">
          Technologies Used
        </h3>
        <div class="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              class="rounded-full bg-xy-black-primary px-4 py-1 text-sm text-xy-cyan"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div class="flex gap-4">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-lg bg-xy-cyan px-6 py-2 font-semibold text-xy-black-primary transition-colors hover:bg-xy-cyan/80"
          >
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-lg border border-xy-cyan px-6 py-2 font-semibold text-xy-cyan transition-colors hover:bg-xy-cyan/20"
          >
            View Source
          </a>
        )}
      </div>
    </article>
  );
});