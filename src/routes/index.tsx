import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import IntroSection from "~/components/introSection";
import AboutSection from "~/components/aboutSection";
import ContactSection from "~/components/contactSection";

import ProjectsSection from "~/components/projectsSection";
import { BlogSection } from "../components/blogSection";
import OG from "~/assets/og.png?url";

//------------------------------------------------------------------------------
// Main Component
//------------------------------------------------------------------------------

export default component$(() => {
  return (
    <main>
      <div class="relative  w-full overflow-y-auto overflow-x-hidden">
        <div class="">
          <IntroSection />
        </div>

        <div class="relative flex w-full flex-col items-center gap-8">
          <AboutSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Jean website 🪄",
  meta: [
    {
      name: "description",
      content: "my personal site ",
    },
    {
      name: "og:title",
      content: "jemartel | porfolio",
    },
    {
      name: "og:description",
      content: "my personal site",
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
      content: "my Professional site",
    },
    {
      name: "twitter:image",
      content: OG,
    },
  ],
};
