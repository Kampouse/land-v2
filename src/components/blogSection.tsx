import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
export const BlogSection = component$(() => {
  const blogPosts = [
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
    <section class="flex w-full items-start justify-start px-4 pt-4 md:items-center md:justify-center md:pt-0">
      <div
        data-section="blog"
        class="z-10 flex w-full max-w-4xl flex-col items-center rounded-lg bg-xy-black-secondary/30 p-4 backdrop-blur-sm sm:p-8"
      >
        <h2 class="mb-8 text-xl font-bold text-xy-cyan sm:text-2xl md:text-4xl">
          Latest Posts
        </h2>
        <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              class="group relative flex flex-col overflow-hidden rounded-lg border border-xy-green-accent/30 bg-xy-black-primary/30 p-6 shadow-lg shadow-xy-green-accent/20 backdrop-blur-sm transition-all duration-300  hover:border-xy-green-accent/60 hover:bg-xy-black-primary/40 hover:shadow-xl hover:shadow-xy-green-accent/30"
            >
              <span class="mb-4 inline-block rounded-full bg-xy-green-accent/20 px-3 py-1 text-center text-xs font-medium text-xy-green-accent">
                {post.tag}
              </span>
              <h3 class="mb-2 text-xl font-semibold text-xy-cyan transition-colors duration-300 group-hover:text-xy-green-accent">
                {post.title}
              </h3>
              <p class="mb-4 text-sm text-xy-muted">{post.date}</p>
              <p class="flex-grow text-sm text-gray-300">{post.description}</p>
              <div class="mt-4 flex items-center">
                <span class="text-xy-cyan transition-colors duration-300 group-hover:text-xy-green-accent">
                  Read more{" "}
                  <span class="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div class="mt-8 flex justify-center">
          <Link
            href="/blog"
            class="text-lg font-semibold text-xy-cyan transition-colors hover:text-xy-green-accent"
          >
            See all posts →
          </Link>
        </div>
      </div>
    </section>
  );
});
