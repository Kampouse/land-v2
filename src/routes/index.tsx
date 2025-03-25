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
  title: "Jean's Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Personal Portfolio of Jean-philppe maretl",
    },
    {
      name: "og:title",
      content: "landing page",
    },
    {
      name: "og:description",
      content:
        "just a landing page",
    },
    {
      name: "og:image",
      content: OG,
    },
    {
      name: "og:image:width",
      content: "1200",
    },
    {
      name: "og:image:height",
      content: "630",
    },
    {
      name: "og:url",
      content: "https://www.jemartel.dev",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Jean's Portfolio",
    },
    {
      name: "twitter:description",
      content:
        "Personal portfolio website of Jean-Philippe Martel, showcasing projects, blog posts, and about me section.",
    },
    {
      name: "twitter:image",
      content: OG,
    },
  ],
};
