import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import IntroSection from "~/routes/introSection";
import AboutSection from "~/routes/aboutSection";
import ProjectsSection from "~/routes/projectsSection";
import { BlogSection } from "./blogSection";

//------------------------------------------------------------------------------
// Main Component
//------------------------------------------------------------------------------

export default component$(() => {
  return (
    <main>
      <div class="relative  w-full overflow-y-auto overflow-x-hidden">
        <div class="py-24">
          <IntroSection isVisible={true} />
        </div>

        <div class="relative flex w-full flex-col items-center gap-12">
          <AboutSection />
          <ProjectsSection />
          <BlogSection />
        </div>
      </div>
    </main>
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
};
