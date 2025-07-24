import path from 'node:path'
import { defineConfig, defineCollection, s } from 'velite';

const components = defineCollection({
  name: 'Components',
  pattern: ['components/*.mdx'],
  schema: s
    .object({
      name: s.string().optional(),
      title: s.string().optional(),
      description: s.string().optional(),
      toc: s.toc(),
    })
})

const guides = defineCollection({
  name: 'Guides',
  pattern: ['guides/*.mdx'],
  schema: s
    .object({
      name: s.string().optional(),
      title: s.string().optional(),
      description: s.string().optional(),
      toc: s.toc(),
    })
})

const theming = defineCollection({
  name: 'Theming',
  pattern: ['theming/*.mdx'],
  schema: s
    .object({
      name: s.string().optional(),
      title: s.string().optional(),
      description: s.string().optional(),
      toc: s.toc(),
    })
})

export default defineConfig({
  root: path.join(process.cwd(), './src/content/docs'),
  collections: {
    components,
    guides,
    theming
  }
})