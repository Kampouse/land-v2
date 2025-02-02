import { initCanvas } from "~/utils/render";
import { component$, useOnDocument, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ProfilePicture } from "~/components/picture";
export default component$(() => {
  const canvasRef = useSignal<HTMLCanvasElement>();
  const isVisible = useSignal(false);

  useOnDocument("DOMContentLoaded", $(() => {
    const canvas = canvasRef.value;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    return initCanvas(canvas, ctx);
  }));

  useOnDocument("DOMContentLoaded", $(() => {
    setTimeout(() => {
      isVisible.value = true;
    }, 10);
  }));
  return (
    <div class="relative h-screen w-screen overflow-hidden bg-xy-black-secondary">
      <div class="fixed inset-0 w-full h-full">
        <canvas
          ref={canvasRef}
          class="w-full h-full"
        />
      </div>

      <div class="h-screen w-screen flex flex-col items-center snap-y snap-mandatory overflow-y-auto overflow-x-hidden">
        <section class="min-h-[90vh] w-screen flex items-center justify-center snap-start px-4">
          <div data-section="intro" class={`w-full max-w-4xl z-10 flex flex-col items-center backdrop-blur-sm bg-xy-black-secondary/30 rounded-lg transition-all duration-1000 transform ${isVisible.value ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
            <div class="flex flex-col gap-2 items-center p-4 sm:p-8 md:p-16 pb-2">
              <ProfilePicture />
              <h1 class="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-xy-cyan via-xy-green-accent to-xy-cyan bg-300% animate-gradient flex flex-col sm:flex-row items-center justify-center text-center">
                <span class="transition-colors duration-500">Hi, I'm Jean.</span>
                <span class="mt-2 sm:mt-0 sm:ml-2 text-xy-muted transition-colors duration-500 flex items-center">
                  <span class="animate-pulse">&nbsp;Building...</span>
                </span>
              </h1>
              <div class="absolute bottom-4 sm:bottom-8 animate-bounce">
                <svg class="w-4 h-4 sm:w-6 sm:h-6 text-xy-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section class="min-h-[90vh] w-screen flex items-center justify-center snap-start px-4">
          <div data-section="about" class="w-full max-w-4xl z-10 flex flex-col items-center backdrop-blur-sm bg-xy-black-secondary/30 rounded-lg p-4 sm:p-8">
            <h2 class="text-xl sm:text-2xl md:text-4xl font-bold text-xy-cyan mb-4 sm:mb-6">About Me</h2>
            <p class="text-xy-muted text-base sm:text-lg leading-relaxed text-center max-w-2xl px-2">
              I make stuff work. Whether it's React, Tailwind, Qwik or something else - I'll use what's
              available and figure out how to get things done. If the tools don't exist yet, I'll
              build them myself. No fancy buzzwords, just practical solutions that actually work.
            </p>
            <div class="mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full px-2">
              <div class="flex flex-col items-center p-3 sm:p-4 bg-xy-black-primary/50 rounded-lg">
                <span class="text-xy-green-accent font-bold text-sm sm:text-base">enought to prompt</span>
                <span class="text-xy-muted text-xs sm:text-sm">Years Experience</span>
              </div>
              <div class="flex flex-col items-center p-3 sm:p-4 bg-xy-black-primary/50 rounded-lg">
                <span class="text-xy-green-accent font-bold text-sm sm:text-base">enought to ship </span>
                <span class="text-xy-muted text-xs sm:text-sm">Projects Completed</span>
              </div>
              <div class="flex flex-col items-center p-3 sm:p-4 bg-xy-black-primary/50 rounded-lg">
                <span class="text-xy-green-accent font-bold text-sm sm:text-base">enought to ship</span>
                <span class="text-xy-muted text-xs sm:text-sm">Lines of Code</span>
              </div>
            </div>
          </div>
        </section>
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
}
