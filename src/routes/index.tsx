import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import IntroSection from "~/components/introSection";
import AboutSection from "~/components/aboutSection";
import ProjectsSection from "~/components/projectsSection";
import { BlogSection } from "../components/blogSection";
import OG from "../../public/og.png";

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
  title: "jean's site ",
  meta: [
    {
      name: "description",
      content:
        "my personal site ",
    },
    {
      name: "og:title",
      content: "jemartel | porfolio",
    },
    {
      name: "og:description",
      content:
        "my personal site",
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
      content: "jemartel site",
    },
    {
      name: "twitter:description",
      content:
        "my personal site",
    },
    {
      name: "twitter:image",
      content: OG,
    },
  ],
};
