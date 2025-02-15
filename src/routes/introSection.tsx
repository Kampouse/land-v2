import { component$ } from "@builder.io/qwik";
import { ProfilePicture } from "~/components/picture";

export const IntroSection = component$((props: { isVisible: boolean }) => {
  return (
    <section class="relative flex  w-full items-center justify-center px-4">
      <div
        data-section="intro"
        class={`z-10 flex w-full max-w-4xl transform flex-col items-center rounded-lg bg-xy-black-secondary/30 backdrop-blur-sm transition-all duration-100 ${
          props.isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div class="flex flex-col items-center gap-2 p-4 pb-2 sm:p-8 md:p-8">
          <ProfilePicture />
          <h1 class="bg-300% animate-gradient flex flex-col items-center justify-center bg-gradient-to-r from-xy-cyan via-xy-green-accent to-xy-cyan bg-clip-text text-center text-2xl font-bold text-transparent sm:flex-row sm:text-3xl md:text-5xl">
            <span class="transition-colors duration-500">Hi, I'm Jean.</span>
            <span class="mt-2 flex items-center text-xy-muted transition-colors duration-500 sm:ml-2 sm:mt-0">
              <span class="animate-pulse">&nbsp;Building...</span>
            </span>
          </h1>
          <p class="max-w-2xl px-2 text-center text-base leading-relaxed text-gray-400  sm:text-lg">
            I make web solutions using React, Tailwind, Qwik and other tools.
            I'll build what needs to be built and get things done without the
            buzzwords.
          </p>
        </div>
      </div>
    </section>
  );
});

export default IntroSection;
