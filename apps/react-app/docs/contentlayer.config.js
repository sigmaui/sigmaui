import path from 'node:path'
import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files';

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
  url: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
};

export const components = defineDocumentType(() => ({
  name: 'Components',
  filePathPattern: ['components/*.mdx'],
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: false },
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
    name: { type: 'string', required: false },
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
    name: { type: 'string', required: false },
    title: { type: 'string', required: false },
    description: { type: 'string', required: false }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: path.join(process.cwd(), './src/content/docs'),
  documentTypes: [components, guides, theming],
  disableImportAliasWarning: true,
  mdx: {}
})