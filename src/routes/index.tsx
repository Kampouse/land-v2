import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import IntroSection from "~/components/introSection";
import AboutSection from "~/components/aboutSection";
import ProjectsSection from "~/components/projectsSection";
import { BlogSection } from "../components/blogSection";
import OG from "~/assets/og.png";

//------------------------------------------------------------------------------
// Main Component
//------------------------------------------------------------------------------

export default component$(() => {
  return (
    <main>
      <div class="relative  w-full overflow-y-auto overflow-x-hidden">
        <div class="py-24">
          <IntroSection />
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
      content: "Jean's portfolio",
    },
    {
      property: "og:image",
      content: OG, // Replace with your image URL
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      name: "twitter:image",
      content: OG, // Replace with your image URL
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "og:url",
      content: "https://jemartel.dev", // replace with url
    },
    {
      property: "og:site_name",
      content: "Jean's Portfolio",
    },

  ],
};
