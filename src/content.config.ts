import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Define conllection
const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/pages/projects" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            image: image(),
            imgCaption: z.string(),
            year: z.number(),
            teamSize: z.number().default(1),
            startPeriod: z.string(),
            endPeriod: z.string(),
            publishedAt: z.string().transform((str) => new Date(str)),
        }),
});

const blogs = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/pages/blogs" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        imgCaption: z.string(),
        year: z.number(),
        publishedAt: z.string().transform((str) => new Date(str)),
        tags: z.array(z.string()),
    }),
});

// Export single collection instance
// This is necessary to register collection(s) above
export const collections = { projects, blogs };
