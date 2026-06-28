import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { projectsData, type ProjectData } from "~/data/projects";

import Studyhack from "~/assets/study-hack.png";
import JustRND from "~/assets/just-rnd.png?jsx";
import OGJustRND from "~/assets/just-rnd.png";
import LegionSocial from "~/assets/legion-social.jpg?jsx";
import OGLegionSocial from "~/assets/legion-social.jpg";
import ToolKit from "~/assets/tool-kit.jpg?jsx";
import OGToolKit from "~/assets/tool-kit.jpg";
import KeyManager from "~/assets/key-manager.jpg?jsx";
import OGKeyManager from "~/assets/key-manager.jpg";
import NullClaw from "~/assets/nullclaw.jpg?jsx";
import OGNullClaw from "~/assets/nullclaw.jpg";
import NearBalancer from "~/assets/near-balancer.jpg?jsx";
import OGNearBalancer from "~/assets/near-balancer.jpg";
import SevenGen from "~/assets/7gen.jpg?jsx";
import OGSevenGen from "~/assets/7gen.jpg";
import Vibe from "~/assets/vibe.jpg?jsx";
import OGVibe from "~/assets/vibe.jpg";
import OutLayerWallet from "~/assets/outlayer-wallet.jpg?jsx";
import OGOutLayerWallet from "~/assets/outlayer-wallet.jpg";
import OutLayerWalletGallery from "~/assets/outlayer-wallet-2.jpg";
import Fintrack from "~/assets/fintrack.jpg?jsx";
import OGFintrack from "~/assets/fintrack.jpg";
import NostrDocs from "~/assets/nostr-docs.jpg?jsx";
import OGNostrDocs from "~/assets/nostr-docs.jpg";
import NostrLink from "~/assets/nostrlink.jpg?jsx";
import OGNostrLink from "~/assets/nostrlink.jpg";

/** Image/asset fields keyed by project id. Data lives in src/data/projects.ts. */
const projectAssets: Record<string, { image: any; ogImage: string; imageAlt: string; images?: { src: string; alt: string }[] }> = {
  "7gen": { image: SevenGen, ogImage: OGSevenGen, imageAlt: "7Gen EV Fleet Management Platform" },
  "outlayer-wallet": {
    image: OutLayerWallet,
    ogImage: OGOutLayerWallet,
    imageAlt: "OutLayer Wallet - NEAR Multi-Wallet Custody Manager",
    images: [{ src: OutLayerWalletGallery, alt: "OutLayer Wallet - Send flow" }],
  },
  "fintrack": { image: Fintrack, ogImage: OGFintrack, imageAlt: "Fintrack - Personal Portfolio Tracker" },
  "legion-social": { image: LegionSocial, ogImage: OGLegionSocial, imageAlt: "Legion Social - NEAR Builder Platform" },
  "nullclaw": { image: NullClaw, ogImage: OGNullClaw, imageAlt: "NullClaw - AI Assistant Infrastructure in Zig" },
  "key-manager": { image: KeyManager, ogImage: OGKeyManager, imageAlt: "Key Manager - TEE Encrypted Storage" },
  "near-starter-kit": { image: ToolKit, ogImage: OGToolKit, imageAlt: "NEAR Starter Kit" },
  "vibe-paper": { image: Vibe, ogImage: OGVibe, imageAlt: "Vibe Paper - AI Memory Research" },
  "nostr-docs": { image: NostrDocs, ogImage: OGNostrDocs, imageAlt: "Nostr Docs - Decentralized Social Protocol Documentation" },
  "nostrlink": { image: NostrLink, ogImage: OGNostrLink, imageAlt: "NostrLink - Decentralized Professional Network" },
  "just-rnd": {
    image: JustRND,
    ogImage: OGJustRND,
    imageAlt: "display of Just-R&D",
    images: [{ src: Studyhack, alt: "landing page for the app" }],
  },
  "near-balancer": { image: NearBalancer, ogImage: OGNearBalancer, imageAlt: "NEAR Balancer - Round-Robin RPC Load Balancer" },
};

export const projects = projectsData.map((p) => {
  const assets = projectAssets[p.id];
  return {
    ...p,
    ...assets,
    images: assets?.images ?? [],
  };
});

export type Project = ProjectData & {
  image: any;
  ogImage: string;
  imageAlt: string;
  images: { src: string; alt: string }[];
};

export default component$(() => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div class="space-y-12">
      {/* Featured Projects */}
      <section>
        <h2 class="mb-6 text-2xl font-bold text-xy-green-accent">
          Featured Projects
        </h2>
        <div class="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              class="group rounded-xl border border-xy-black-secondary bg-xy-black-secondary/30 p-6 transition-all duration-200 hover:border-xy-cyan/30 hover:bg-xy-black-secondary/50"
            >
              <div class="relative mb-6 aspect-video overflow-hidden rounded-lg border border-xy-black-secondary bg-xy-black-secondary/50">
                <project.image class="h-full w-full object-cover transition-opacity duration-200" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <h3 class="mb-2 text-xl font-bold text-xy-cyan">
                {project.title}
              </h3>
              <p class="mb-4 text-xy-muted">{project.description}</p>
              <div class="flex flex-wrap gap-2">
                {project.technologies.map((tag) => (
                  <span
                    key={tag}
                    class="rounded-full bg-xy-black-primary px-3 py-1 text-sm text-xy-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 class="mb-6 text-2xl font-bold text-xy-green-accent">
          More Projects
        </h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              class="group rounded-xl bg-xy-black-secondary/30 p-4 transition-transform duration-300"
            >
              <div class="relative mb-4 aspect-video overflow-hidden rounded-lg">
                <project.image class="h-full w-full object-cover transition-transform duration-300" />

                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h3 class="mb-2 text-lg font-bold text-xy-cyan">
                {project.title}
              </h3>
              <p class="mb-4 text-sm text-xy-muted">{project.description}</p>
              <div class="flex flex-wrap gap-2">
                {project.technologies.map((tag) => (
                  <span
                    key={tag}
                    class="rounded-full bg-xy-black-primary px-3 py-1 text-xs text-xy-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
});
