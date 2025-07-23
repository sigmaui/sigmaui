import { defineComponent, h } from 'vue'
import Box from '../box/src/index.vue'
import Button from '../button/src/index.vue'
import Select from '../select/src/index.vue'
import Table from '../table/src/index.vue'
import SegmentGroup from '../segment-group/src/index.vue'
import Form from '../form/src/index.vue'

// Helper function to create styled components using Box
const createComponent = (as: keyof HTMLElementTagNameMap, className: string) =>
  defineComponent({
    render() {
      return h(Box, { as, class: className }, this.$slots.default?.())
    },
  })

export const MDXComponents = {
  // Basic HTML elements with styling using Box component
  h1: createComponent('h1', 'text-3xl font-bold mb-4 text-gray-900'),
  h2: createComponent('h2', 'text-2xl font-semibold mb-3 text-gray-800'),
  h3: createComponent('h3', 'text-xl font-medium mb-2 text-gray-700'),
  h4: createComponent('h4', 'text-lg font-medium mb-2 text-gray-600'),
  h5: createComponent('h5', 'text-base font-medium mb-2 text-gray-600'),
  h6: createComponent('h6', 'text-sm font-medium mb-2 text-gray-600'),
  p: createComponent('p', 'mb-4 leading-relaxed text-gray-700'),
  code: createComponent('code', 'bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800'),
  pre: createComponent('pre', 'bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm'),
  ul: createComponent('ul', 'list-disc list-inside mb-4 space-y-1 text-gray-700'),
  ol: createComponent('ol', 'list-decimal list-inside mb-4 space-y-1 text-gray-700'),
  li: createComponent('li', 'text-gray-700'),
  blockquote: createComponent('blockquote', 'border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4'),
  a: defineComponent({
    render() {
      return h(
        Box,
        {
          as: 'a',
          class: 'text-blue-600 hover:text-blue-800 underline',
          href: '#',
        },
        this.$slots.default?.(),
      )
    },
  }),
  strong: createComponent('strong', 'font-semibold text-gray-900'),
  em: createComponent('em', 'italic text-gray-700'),

  // SigmaUI Components
  Box,
  Button,
  Select,
  Table,
  SegmentGroup,
  Form,
}
