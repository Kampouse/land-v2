import { Slot, component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  return (
    <div class="min-h-screen w-full bg-xy-black-primary/25 px-4 py-12">
      <div class="mx-auto max-w-6xl">
        {location.url.pathname == "/projects" && (
          <h1 class="mb-12 text-center text-4xl font-bold tracking-tight text-xy-cyan">
            My Projects
          </h1>
        )}
        <div class="relative">
          {/* Decorative elements */}
          <div class="animate-blob fixed left-0 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-xy-cyan/10 blur-3xl filter"></div>
          <div class="animate-blob animation-delay-2000 fixed right-0 top-1/4 -z-10 h-[35rem] w-[35rem] rounded-full bg-xy-green-accent/10 blur-3xl filter"></div>
          <div class="animate-blob animation-delay-4000 fixed bottom-0 left-1/3 -z-10 h-[25rem] w-[25rem] rounded-full bg-xy-purple/10 blur-3xl filter"></div>

          {/* Main content */}
          <Slot />
        </div>
      </div>
    </div>
  );
});
