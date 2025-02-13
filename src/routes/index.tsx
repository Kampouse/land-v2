import { initCanvas } from "~/utils/render";
import { component$, useOnDocument, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import IntroSection from "~/routes/introSection";
import AboutSection from "~/routes/aboutSection";
import ProjectsSection from "~/routes/projectsSection";

//------------------------------------------------------------------------------
// Main Component
//------------------------------------------------------------------------------
export default component$(() => {
  const canvasRef = useSignal<HTMLCanvasElement>();

  const initCanvasEffect = $(() => {
    const canvas = canvasRef.value;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    return initCanvas(canvas, ctx);
  });

  useOnDocument("DOMContentLoaded", initCanvasEffect);

  return (
    <div class="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-xy-black-secondary">
      <div class="fixed inset-0 h-full w-full">
        <canvas ref={canvasRef} class="h-full w-full" />
      </div>

      <div class="relative flex w-full flex-col items-center">
        <IntroSection isVisible={true} />
        <AboutSection />
        <ProjectsSection />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Jean's Qwik Site",
  meta: [
    {
      name: "description",
      content: "Jean's portfolio built with Qwik",
    },
  ],
};
