import { component$, useSignal } from "@builder.io/qwik";
import { ProfilePicture } from "~/components/picture";

export const IntroSection = component$(() => {
  const showTechList = useSignal(false);
  return (
    <section class="relative flex  w-full items-center justify-center px-4">
      <div data-section="intro">
        <div class="flex flex-col items-center gap-2 p-4 pb-2 sm:p-8 md:p-8">
          <ProfilePicture />
          <h1 class="bg-300% animate-gradient flex flex-col items-center justify-center bg-gradient-to-r from-xy-cyan via-xy-green-accent to-xy-cyan bg-clip-text text-center text-2xl font-bold text-transparent sm:flex-row sm:text-3xl md:text-5xl">
            <span class="transition-colors duration-500">Hi, I'm Jean.</span>
            <span class="mt-2 flex items-center text-xy-muted transition-colors duration-500 sm:ml-2 sm:mt-0">
              <span class="animate-pulse">&nbsp;Building...</span>
            </span>
          </h1>
          <p class="max-w-2xl px-2 text-center text-base leading-relaxed text-gray-400  sm:text-lg">
            Building AI infrastructure and vertical solutions with emerging
            technologies.
          </p>
          <div class="mt-6">
            <button
              onClick$={() => (showTechList.value = !showTechList.value)}
              class="underline-dashed cursor-pointer text-sm font-semibold text-xy-cyan underline decoration-2 underline-offset-4 transition-colors hover:text-xy-green-accent"
            >
              Technologies
            </button>
            {showTechList.value && (
              <div class="mt-4 flex flex-wrap justify-center gap-2 rounded-lg border border-xy-green-accent/20 bg-xy-black-secondary/30 px-4 py-3">
                <span class="text-xs text-xy-muted">Qwik</span>
                <span class="text-xs text-xy-muted">React 19</span>
                <span class="text-xs text-xy-muted">TypeScript</span>
                <span class="text-xs text-xy-muted">Tailwind CSS</span>

                <span class="text-xs text-xy-muted">Cloudflare</span>

                <span class="text-xs text-xy-muted">NEAR Protocol</span>

                <span class="text-xs text-xy-muted">Drizzle ORM</span>
                <span class="text-xs text-xy-muted">D1</span>
                <span class="text-xs text-xy-muted">TEE</span>
                <span class="text-xs text-xy-muted">P2P</span>

                <span class="text-xs text-xy-muted">Python</span>
                <span class="text-xs text-xy-muted">AI Integration</span>
                <span class="text-xs text-xy-muted">Shadcn/UI</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default IntroSection;
