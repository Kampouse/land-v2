import type { DocumentHead } from "@builder.io/qwik-city";
import { initCanvas } from "~/utils/render";
import { component$, useOnDocument, useOnWindow, useSignal, $ } from "@builder.io/qwik";
import { ProfilePicture } from "~/components/picture";

export default component$(() => {
  const canvasRef = useSignal<HTMLCanvasElement>();
  const isVisible = useSignal(false);
  const sectionsVisible = useSignal<{ [key: string]: boolean }>({
    intro: false,
    social: false,
    portfolio: false
  });

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
    }, 100);
  }));

  useOnWindow("scroll", $(() => {
    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionName = section.getAttribute("data-section");
      if (!sectionName) return;

      if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
        sectionsVisible.value = {
          ...sectionsVisible.value,
          [sectionName]: true
        };
      }
    });
  }));

  return (
    <div class="relative min-h-screen bg-xy-black-secondary overflow-hidden">
      <div class="fixed inset-0 w-full h-full">
        <canvas
          ref={canvasRef}
          class="w-full h-full"
        />
      </div>
      <div class="flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div data-section="intro" class={`w-full max-w-4xl z-10 flex flex-col items-center backdrop-blur-sm bg-xy-black-secondary/30 rounded-lg mt-20 transition-all duration-1000 transform ${sectionsVisible.value.intro || isVisible.value ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div class="flex flex-col gap-2 items-center p-8 sm:p-12 md:p-20 pb-2">
            <ProfilePicture />
            <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-xy-cyan via-xy-green-accent to-xy-cyan bg-300% animate-gradient flex flex-col sm:flex-row items-center justify-center text-center">
              <span class="transition-colors duration-500">Hi, I'm Jean.</span>
              <span class="mt-2 sm:mt-0 sm:ml-2 text-xy-muted transition-colors duration-500 flex items-center">
                <span class="animate-pulse">&nbsp;Building...</span>
              </span>
            </h1>
          </div >
        </div >
        <section data-section="social" class={`max - w - xl z - 10 text - center py - 6 sm: py - 10 pb - 0 transition - all duration - 1000 delay - 200 transform ${sectionsVisible.value.social || isVisible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} `}>

        </section>
        <section data-section="portfolio" class={`max - w - 4xl w - full mx - 4 sm: mx - 6 lg: mx - 8 z - 10 backdrop - blur - sm bg - xy - black - secondary / 30 p - 6 sm: p - 8 rounded - lg transition - all duration - 1000 delay - 400 transform ${sectionsVisible.value.portfolio || isVisible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} `}>
        </section>
      </div >
    </div >
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
