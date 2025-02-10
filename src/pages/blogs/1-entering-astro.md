---
layout: ../../layouts/BlogMarkdownLayout.astro
title: "Entering Astro"
pubDate: 2025-02-10
description: "Guys, i just write to my first blog!"
author: "Bomsiwor"
image:
    url: "https://docs.astro.build/assets/rose.webp"
    alt: "First blog image"
tags: ["blogging", "learning in public"]
---

# Bomsiwor entering astro

Welcome to my first page learning astro and building my portfolio. In this section i will write everything i've learned before. I'll try to share as much as possible.

But beware, likely i just rephrase the documentation and add my own implementation. 😁

## What I've accomplished

1. **Installing Astro**: First, I created a new Astro project. Combine it with react and tailwindcss.

2. **Raged out by index** : I spent (or waste) most of my times to build my index page.

3. **Writing blogs, Finally!** : OK, imma just write the blogs. So i can share my opinion and everything learned before.

First, i installed raw astro using pnpm. Then separately add Tailwind and React integration. I think astro just updated the docs when this post published. Based on this [Astro Tailwind Integration docs](https://docs.astro.build/en/guides/styling/#tailwind), we should import `tailwindcss` into the global.css (ror another choosen CSS file). Astro automatically create the file and import it, but if you surfed into my portfolio repository you won't find this configuration. I'm not importing the tailwind on the global css.

## What's next

Continuously learn everything because i still feel skill issue.

## Misc

Here i test some markdown syntax.

!["Testing image"](https://docs.astro.build/assets/rose.webp)

Testing image.

> Here i'm adding block quote
> and give some styling to this blockquote.

Here i test the codeblock. Then i realize astro automatically assign class for the block.

```json
{
    "test": "value"
}
```
