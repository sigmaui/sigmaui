import path from 'node:path'
import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import rehypeSlug from 'rehype-slug'
import GithubSlugger from 'github-slugger'

const computedFields = {
  name: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
  dir: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileDir,
  },
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  // url: {
  //   type: 'string',
  //   resolve: (doc) => `/${doc._raw.flattenedPath}`
  // },
  toc: {
    type: 'json',
    resolve: (doc) => {
      const slugs = new GithubSlugger()
      
      const regHeading = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
      
      return Array.from(doc.body.raw.matchAll(regHeading)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          
          return {
            level: flag.length,
            label: content,
            value: slugs.slug(content)
          };
        }
      );
    }
  }
};

export const components = defineDocumentType(() => ({
  name: 'Components',
  filePathPattern: ['components/*.mdx'],
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: false },
    description: { type: 'string', required: false }
  },
  computedFields
}))

export const guides = defineDocumentType(() => ({
  name: 'Guides',
  filePathPattern: ['guides/*.mdx'],
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: false },
    description: { type: 'string', required: false }
  },
  computedFields
}))

export const theming = defineDocumentType(() => ({
  name: 'Theming',
  filePathPattern: ['theming/*.mdx'],
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: false },
    description: { type: 'string', required: false }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: path.join(process.cwd(), './src/content/docs'),
  documentTypes: [components, guides, theming],
  disableImportAliasWarning: true,
  mdx: {
    rehypePlugins: [
      rehypeSlug,
    ]
  }
})