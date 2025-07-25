import path from 'node:path'
import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import GithubSlugger from 'github-slugger'

const tocField = {
  toc: {
    type: 'json',
    resolve: (doc) => {
      const slugs = new GithubSlugger()
      
      const regHeading = /\n(?<flag>#{1,6})\s+(?<title>.+)/g;
      
      return Array.from(doc.body.raw.matchAll(regHeading)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const title = groups?.title;
          
          const slug = slugs.slug(title);
          
          return {
            level: flag.length,
            title,
            slug
          };
        }
      );
    }
  }
}

const fields = {
  title: { type: 'string', required: false },
  description: { type: 'string', required: false }
}

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
  // tocField
};

export const components = defineDocumentType(() => ({
  name: 'Components',
  filePathPattern: ['components/*.mdx'],
  contentType: 'mdx',
  fields,
  computedFields
}))

export const guides = defineDocumentType(() => ({
  name: 'Guides',
  filePathPattern: ['guides/*.mdx'],
  contentType: 'mdx',
  fields,
  computedFields
}))

export const theming = defineDocumentType(() => ({
  name: 'Theming',
  filePathPattern: ['theming/*.mdx'],
  contentType: 'mdx',
  fields,
  computedFields
}))

export default makeSource({
  contentDirPath: path.join(process.cwd(), './src/content/docs'),
  documentTypes: [components, guides, theming],
  disableImportAliasWarning: true,
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ]
  }
})