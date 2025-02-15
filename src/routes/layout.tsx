import {
  component$,
  Slot,
  useSignal,
  useOnDocument,
  $,
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { initCanvas } from "~/utils/render";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const canvasRef = useSignal<HTMLCanvasElement>();

  const initCanvasEffect = $(() => {
    const canvas = canvasRef.value;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    return initCanvas(canvas, ctx);
  });

  useOnDocument("DOMContentLoaded", initCanvasEffect);

  return (
    <>
      <div class="fixed inset-0 h-full w-full">
        <canvas ref={canvasRef} class="h-full w-full" />
      </div>
      <nav class="fixed top-0 z-50 w-full bg-xy-black-primary/80 px-4 py-3 backdrop-blur-sm">
        <div class="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            href="/"
            class="flex items-center space-x-2 text-xl font-semibold text-xy-cyan hover:text-xy-green-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span>Jean's Site</span>
          </Link>
          <div class="flex items-center space-x-4">
            <Link
              href="/"
              class="rounded-md px-3 py-2 text-xy-muted hover:bg-xy-white-transparent hover:text-xy-green-accent"
            >
              Home
            </Link>
            <Link
              href="/blog"
              class="rounded-md px-3 py-2 text-xy-muted hover:bg-xy-white-transparent hover:text-xy-green-accent"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
      <main class="pt-16">
        <Slot />
      </main>
    </>
  );
});
