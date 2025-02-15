import { Slot, component$ } from "@builder.io/qwik";

interface StatCardProps {
  title: string;
  subtitle: string;
}
const StatCard = component$((props: StatCardProps & { children?: any }) => {
  return (
    <div class="animate-glow group relative flex  flex-col items-center rounded-xl border border-xy-green-accent/30 bg-xy-black-primary/30 p-3 shadow-lg shadow-xy-green-accent/20 backdrop-blur-sm transition-all duration-500 hover:translate-y-[-4px] hover:bg-xy-black-primary/40 hover:shadow-xy-green-accent/30 sm:p-4">
      <span class="relative z-10 text-sm font-bold text-xy-green-accent sm:text-base">
        {props.title}
      </span>
      <span class="relative z-10 text-xs text-xy-muted sm:text-sm">
        {props.subtitle}
      </span>
      <Slot />
    </div>
  );
});

export const AboutSection = component$(() => {
  return (
    <section class="flex w-full items-start justify-start px-4 pt-4 md:items-center md:justify-center md:pt-0">
      <div
        data-section="about"
        class="z-10 flex w-full max-w-4xl flex-col items-center rounded-xl border border-xy-black-secondary/10 bg-xy-black-secondary/20 p-4  backdrop-blur-md sm:p-8"
      >
        <h2 class="font-display mb-2  text-xl font-bold leading-tight tracking-wide text-xy-cyan sm:mb-4 sm:text-2xl md:text-4xl">
          to craft & tinkering
        </h2>

        <div class="mt-2 grid w-full grid-cols-1 gap-2 px-2 sm:mt-4 sm:grid-cols-3">
          <StatCard title=" 🚀" subtitle="">
            <span class="mt-2 text-xs text-xy-muted">
              overcook / overthink{" "}
            </span>
          </StatCard>

          <StatCard title="🎯" subtitle="Projects to Projects"></StatCard>

          <StatCard title="⚡" subtitle="Powered by AI"></StatCard>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
