import path from 'node:path'
import { defineConfig, defineCollection, s } from 'velite';

const transform = (data: any, { meta }) => {
  const normalizedPath = meta.path?.replace?.(/\\/g, '/');
  const paths = normalizedPath.match(/\/([^\/]+)\/([^\/]+)\.mdx$/) || [];

  // console.log('paths', paths);

  const folder = paths[1];
  const filename = paths[2];

  return {
    name: `${folder}-${filename}`,
    ...data
  }
}

const components = defineCollection({
  name: 'Components',
  pattern: ['components/*.mdx'],
  schema: s
    .object({
      name: s.string().optional(),
      title: s.string().optional(),
      description: s.string().optional(),
      toc: s.toc(),
      code: s.mdx()
    })
    .transform(transform)
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
      code: s.mdx(),
    })
    .transform(transform)
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
      code: s.mdx(),
    })
    .transform(transform)
})

export default defineConfig({
  root: path.join(process.cwd(), './src/content/docs'),
  collections: {
    components,
    guides,
    theming
  }
})