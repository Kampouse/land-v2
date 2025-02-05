import { component$, useStyles$ } from "@builder.io/qwik";
import * as   icon from "lucide-qwik"

export const ProfilePicture = component$(() => {
  useStyles$(`
    @keyframes float {
      0%, 100% {
        transform: translate(var(--tw-translate-x), var(--tw-translate-y));
      }
      50% {
        transform: translate(var(--tw-translate-x), calc(var(--tw-translate-y) - 0.5rem));
      }
    }
  `);
  return (
    <div class="relative">
      <img
        src="https://github.com/Kampouse/land/blob/main/public/cover.jpg?raw=true"
        alt="Jean Profile"
        class="w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full border-4 sm:border-[6px] border-xy-green-accent animate-[glow_2s_ease-in-out_infinite] shadow-[0_0_30px_rgba(125,228,134,0.3)] transition-all duration-300 scale-100 relative z-10"
        width={150}
        height={150}
      />
      <div class="absolute inset-0 w-full h-full scale-100 sm:scale-[1.5] md:scale-[2]">
        <a href="https://www.linkedin.com/in/jemartel/" target="_blank" class="absolute cursor-pointer left-0 top-1/2 -translate-x-12 sm:-translate-x-10 md:-translate-x-12 -translate-y-1/2 animate-[float_3s_ease-in-out_infinite_1s] hover:text-xy-green-accent transition-colors">
          <icon.LinkedinIcon class="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 text-xy-green-accent" />
        </a>
        <a href="https://github.com/Kampouse" target="_blank" class="absolute cursor-pointer right-0 top-1/2 translate-x-12 sm:translate-x-10 md:translate-x-12 -translate-y-1/2 animate-[float_3s_ease-in-out_infinite_1.5s] hover:text-xy-green-accent transition-colors">
          <icon.GithubIcon class="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 text-xy-green-accent" />
        </a>
      </div>
    </div>
  )
}
);
