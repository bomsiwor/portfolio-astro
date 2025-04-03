// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react()],
    site: "https://bomsiwor.dev",

    adapter: netlify(),
});

