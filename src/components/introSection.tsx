import { component$, } from "@builder.io/qwik";
import { ProfilePicture } from "~/components/picture";

export const IntroSection = component$(() => {
  return (
    <section class="relative flex  w-full items-center justify-center px-4">
      <div
        data-section="intro"
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
            building web solutions from the ground up. I'll build what is required
            while keeping an eye on emerging technologies.
          </p>
        </div>
      </div>
    </section >
  );
});

export default IntroSection;
