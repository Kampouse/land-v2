import { component$, useStyles$ } from "@builder.io/qwik";
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
        class="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full border-[6px] border-xy-green-accent animate-[glow_2s_ease-in-out_infinite] shadow-[0_0_30px_rgba(125,228,134,0.3)] transition-all duration-300 scale-100 relative z-10"
        width={150}
        height={150}
      />
      <div class="absolute inset-0 w-full h-full scale-150">
        <a href="https://github.com/Kampouse" target="_blank" class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 animate-[float_3s_ease-in-out_infinite] hover:text-xy-green-accent transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-xy-cyan" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
        </a>

        <a href="https://www.linkedin.com/in/jemartel/" target="_blank" class="absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2 animate-[float_3s_ease-in-out_infinite_1s] hover:text-xy-green-accent transition-colors">

          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-xy-cyan" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
        </a>
        <a href="https://x.com/jemartel98" target="_blank" class="absolute right-0 top-1/2 translate-x-6 -translate-y-1/2 animate-[float_3s_ease-in-out_infinite_1.5s] hover:text-xy-green-accent transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-xy-green-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
        </a>
      </div>
    </div>
  );
});
