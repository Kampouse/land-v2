import { component$, useOnDocument, useSignal, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { initCanvas } from "~/utils/render";
// Import all blog posts
import gettingStarted from "../posts/1.mdx";
import style from "./mdx.css?inline";
import modernWeb from "../posts/2.mdx";
import stateManagement from "../posts/3.mdx";

import { SocialMediaSection } from "~/components/contactSection";
const posts = {
  "1": gettingStarted,
  "2": modernWeb,
  "3": stateManagement,
};

export const getBlogPost = (slug: string) => {
  //@ts-ignore
  return posts[slug];
};

export default component$(() => {
  const location = useLocation();
  const post = getBlogPost(location.params.slug as string);
  const canvasRef = useSignal<HTMLCanvasElement>();

  const initCanvasEffect = $(() => {
    const canvas = canvasRef.value;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    return initCanvas(canvas, ctx);
  });

  useOnDocument("DOMContentLoaded", initCanvasEffect);

  useStyles$(style);

  return (
    <div class="relative min-h-screen w-full overflow-y-auto overflow-x-hidden ">
      <div class="fixed inset-0 h-full w-full">
        <canvas ref={canvasRef} class="h-full w-full" />
      </div>
      <div class="flex min-h-screen items-center justify-center px-2 py-16 md:px-4">
        <div class="w-full max-w-4xl">
          <article class="prose  dark:prose-invert prose-lg mx-auto rounded-xl border-2 border-xy-green-accent/20 p-10 backdrop-blur-sm transition-colors duration-300 md:shadow-[0_0_15px_rgba(125,228,134,0.3)]  ">
            {post()}
          </article>
          <footer class="relative mt-10 text-center">
            <Link href="/blog" class="text-xy-green-accent hover:underline">
              ← Back to Blog Archive
            </Link>
          </footer>
          <SocialMediaSection />
        </div>
      </div>
    </div>
  );
});
