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
  title: "Jean Martel — AI-Native Builder & Full-Stack Engineer",
  meta: [
    {
      name: "description",
      content:
        "AI-native full-stack engineer based in Montreal. I ship production systems across web, blockchain, and AI infrastructure — NEAR Protocol wallets, Nostr apps, RPC tooling, and more.",
    },
    {
      name: "keywords",
      content:
        "Jean Martel, AI-native engineer, full-stack developer, NEAR Protocol, blockchain, Nostr, Cloudflare, React, TypeScript, Montreal",
    },
    {
      name: "author",
      content: "Jean Martel",
    },
    {
      name: "og:title",
      content: "Jean Martel — AI-Native Builder & Full-Stack Engineer",
    },
    {
      name: "og:description",
      content:
        "AI-native full-stack engineer shipping production systems across web, blockchain, and AI infrastructure. NEAR Protocol, Nostr, Cloudflare, React.",
    },
    {
      name: "og:type",
      content: "website",
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
      content: "Jean Martel — AI-Native Builder & Full-Stack Engineer",
    },
    {
      name: "twitter:description",
      content:
        "AI-native full-stack engineer shipping production systems across web, blockchain, and AI infrastructure.",
    },
    {
      name: "twitter:image",
      content: OG,
    },
  ],
  links: [
    {
      rel: "alternate",
      type: "text/plain",
      href: "https://www.jemartel.dev/llms.txt",
    },
  ],
  scripts: [
    {
      props: { type: "application/ld+json" },
      script: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Jean Martel",
        url: "https://www.jemartel.dev",
        email: "jp@jemartel.dev",
        jobTitle: "AI-Native Full-Stack Engineer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Montreal",
          addressCountry: "Canada",
        },
        sameAs: [
          "https://github.com/Kampouse",
        ],
        knowsAbout: [
          "TypeScript",
          "Rust",
          "NEAR Protocol",
          "Nostr",
          "Cloudflare Workers",
          "React",
          "AI Infrastructure",
          "Blockchain",
          "Vite",
          "Zig",
        ],
        worksOn: [
          {
            "@type": "SoftwareApplication",
            name: "OutLayer Wallet",
            applicationCategory: "Blockchain Wallet",
            url: "https://wallet.jemartel.dev",
          },
          {
            "@type": "SoftwareApplication",
            name: "Fintrack",
            applicationCategory: "Finance App",
            url: "https://fin.jemartel.dev",
          },
          {
            "@type": "SoftwareApplication",
            name: "NostrLink",
            applicationCategory: "Social Network",
            url: "https://in.jemartel.dev",
          },
          {
            "@type": "SoftwareApplication",
            name: "Nostr Docs",
            applicationCategory: "Documentation",
            url: "https://nostr.jemartel.dev",
          },
        ],
      }),
    },
  ],
};
