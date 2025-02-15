import { component$ } from "@builder.io/qwik";
export default component$(() => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "A brief description of the first project and its key features.",
      imageSrc:
        "https://images.nightcafe.studio/ik-seo/jobs/tIn0SKf5naXab6dX3KyU/tIn0SKf5naXab6dX3KyU--0--jbxlc/a-better-tomorrow.jpg?tr=w-1600,c-at_max",
      imageAlt: "Project 1",
      url: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "A brief description of the second project and its key features.",
      imageSrc:
        "https://images.nightcafe.studio/ik-seo/jobs/tIn0SKf5naXab6dX3KyU/tIn0SKf5naXab6dX3KyU--0--jbxlc/a-better-tomorrow.jpg?tr=w-1600,c-at_max",
      imageAlt: "Project 2",
      url: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "A brief description of the third project and its key features.",
      imageSrc:
        "https://images.nightcafe.studio/ik-seo/jobs/tIn0SKf5naXab6dX3KyU/tIn0SKf5naXab6dX3KyU--0--jbxlc/a-better-tomorrow.jpg?tr=w-1600,c-at_max",
      imageAlt: "Project 3",
      url: "#",
    },
  ];

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
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
