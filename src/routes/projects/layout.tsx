import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="min-h-screen w-full bg-xy-black-primary px-4 py-12">
      <div class="mx-auto max-w-6xl">
        <h1 class="mb-12 text-center text-4xl font-bold text-xy-cyan tracking-tight">
          My Projects
        </h1>
        <div class="relative">
          {/* Decorative elements */}
          <div class="fixed left-0 top-0 -z-10 h-[30rem] w-[30rem] animate-blob rounded-full bg-xy-cyan/10 blur-3xl filter"></div>
          <div class="fixed right-0 top-1/4 -z-10 h-[35rem] w-[35rem] animate-blob animation-delay-2000 rounded-full bg-xy-green-accent/10 blur-3xl filter"></div>
          <div class="fixed bottom-0 left-1/3 -z-10 h-[25rem] w-[25rem] animate-blob animation-delay-4000 rounded-full bg-xy-purple/10 blur-3xl filter"></div>
          
          {/* Main content */}
          <Slot />
        </div>
      </div>
    </div>
  );
});