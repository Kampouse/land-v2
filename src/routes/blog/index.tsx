import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
interface BlogPost {
  id: number;
  title: string;
  date: string;
  description: string;
  tag: string;
}

export default component$(() => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with Qwik",
      date: "2023-12-01",
      description:
        "Learn how to build blazing fast websites with Qwik framework",
      tag: "Framework",
    },
    {
      id: 2,
      title: "Modern Web Development",
      date: "2023-11-15",
      description:
        "Best practices and patterns for building modern web applications",
      tag: "Web Dev",
    },
    {
      id: 3,
      title: "State Management in Qwik",
      date: "2023-10-30",
      description: "Deep dive into state management solutions in Qwik",
      tag: "State",
    },
  ];

  return (
    <div class="min-h-screen  px-4 py-16">
      <div class="mx-auto max-w-4xl">
        <h1 class="mb-12 text-center text-4xl font-bold text-xy-cyan">
          Blog Posts
        </h1>

        <div class="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              class="group relative flex flex-col overflow-hidden rounded-xl border border-xy-green-accent/30 bg-xy-black-primary/30 p-6 shadow-lg shadow-xy-green-accent/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-xy-black-primary/40 hover:shadow-xy-green-accent/30"
            >
              <div class="flex items-center justify-between">
                <span class="mb-4 inline-block rounded-full bg-xy-green-accent/20 px-3 py-1 text-xs font-medium text-xy-green-accent">
                  {post.tag}
                </span>
                <span class="text-sm text-xy-muted">{post.date}</span>
              </div>

              <h2 class="mb-4 text-2xl font-semibold text-xy-cyan group-hover:text-xy-green-accent">
                {post.title}
              </h2>

              <p class="mb-6 text-gray-300">{post.description}</p>

              <div class="mt-auto">
                <span class="inline-flex items-center text-xy-cyan transition-colors hover:text-xy-green-accent">
                  Read more <span class="ml-2">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Blog - Jean's Qwik Site",
  meta: [
    {
      name: "description",
      content: "Read my latest blog posts about web development and technology",
    },
  ],
};
