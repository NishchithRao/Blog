import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  redirects: {
    "/": {
      status: 302,
      destination: "/blog/drama",
    },
  },
  site: "https://nishchithrao.github.io/blog",
  base: "/blog",
});
