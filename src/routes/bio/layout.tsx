import { component$ } from "@builder.io/qwik";
import { useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
// Import all blog posts
import style from "./mdx.css?inline";
import post from "./index.mdx";
export default component$(() => {
  useStyles$(style);
  return (
    <div class="relative min-h-screen w-full overflow-y-auto overflow-x-hidden ">
      <div class="flex min-h-screen items-center justify-center px-2 py-16 md:px-4">
        <div class="w-full max-w-4xl">
          <article class="prose  dark:prose-invert prose-lg mx-auto rounded-xl border-2 border-xy-green-accent/20 p-10 backdrop-blur-sm transition-colors duration-300 md:shadow-[0_0_15px_rgba(125,228,134,0.3)]  ">
            {post(1, "hello", 1, 1 as any) as any}
          </article>
          <footer class="relative mt-10 text-center">
            <Link href="/blog" class="text-xy-green-accent hover:underline">
              ← Back to Blog Archive
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
});
