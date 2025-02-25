import { component$, useStyles$ } from "@builder.io/qwik";
import ProfileImage from "/public/profile image.jpg?jsx";
import * as icon from "lucide-qwik";
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
      @keyframes breathing {
        0%, 100% {
          border-width: 4px;
          border-color: transparent;
          background-color: transparent;
          box-shadow: 0 0 30px rgba(125, 228, 134, 0.3);
        }
        50% {
          border-width: 4px;
          box-shadow: 0 0 40px rgba(125, 228, 134, 0.6);
        }
      }
    `);
  return (
    <div class="relative">
      <div class="inline-block animate-[breathing_3s_ease-in-out_infinite] rounded-full border-4 border-xy-green-accent shadow-[0_0_30px_rgba(125,228,134,0.3)] transition-all duration-300 sm:border-[6px]">
        <ProfileImage
          alt="Jean Profile"
          class="relative z-10 h-36 w-36 scale-100 rounded-full sm:h-64 sm:w-64 md:h-48 md:w-48"
        />
      </div>
      <div class="absolute inset-0 h-full w-full scale-150  md:scale-[2]">
        <a
          href="https://www.linkedin.com/in/jemartel/"
          target="_blank"
          class=" absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 animate-[float_3s_ease-in-out_infinite_1s] cursor-pointer
          bg-[rgba(125,228,134,0.1)]
          "
        >
          <icon.LinkedinIcon
            class="
          bg-green text-xy-green-accent
          shadow-[0_0_40px_rgba(125,228,134,0.6)]
          "
          />
        </a>
        <a
          href="https://github.com/Kampouse"
          target="_blank"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 animate-[float_3s_ease-in-out_infinite_1.5s] cursor-pointer bg-[rgba(125,228,134,0.1)] text-xy-green-accent transition-colors sm:translate-x-10 md:translate-x-12"
        >
          <icon.GithubIcon class="shadow-[0_0_40px_rgba(125,228,134,0.6)]" />
        </a>
      </div>
    </div>
  );
});
