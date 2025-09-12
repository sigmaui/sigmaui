import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const FILE_NAME = {
  MAIN: 'main',
  VENDOR: 'vendor',
  COMPONENT: 'component',
  LIBRARY: 'library',
  PAGE: 'page',
  SERVER: 'server',
  ROOT_CONFIG: 'root-config',
}

const PATH_NAME = {
  HTML: 'index.html',
  SERVER: 'entry/server.tsx',
  CLIENT: 'entry/client.tsx',
  SERVER_CONFIG: 'server.config.ts',
  SERVER_API: 'apis/index.tsx',
  PAGE: '/pages/',
  COMPONENT: '/components/',
}

const BUILD_NAME = {
  CLIENT: 'client',
  CLIENT_MICRO: 'client-micro',
  SERVER: 'server',
  SERVER_CONFIG: 'server-config',
  SERVER_API: 'server-api',
}

export default defineConfig(({ mode }) => {
  console.log('mode', mode)
  const isDev = mode === 'development'

  const staticPath = 'static'

  return {
    base: './',
    publicDir: 'public',
    optimizeDeps: {
      exclude: ['@sigmaui-kit/theme-tailwind', '@sigmaui-kit/v-box'],
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
        '.velite': path.resolve(__dirname, './.velite'),
        '.contentlayer/generated': path.resolve(__dirname, './.contentlayer/generated'),
        packages: path.resolve(__dirname, '../../../packages'),
        '@docs': path.resolve(__dirname, '../../../apps/react-app/docs/src'),
        '@packages/common/hooks/use-stylex': path.resolve(__dirname, '../../../packages/common/hooks/use-stylex/src'),
        '@packages/react/hooks/with-stylex': path.resolve(
          __dirname,
          '../../../packages/react/src/hooks/with-stylex/src',
        ),
        '@packages/react/hooks/use-theme': path.resolve(__dirname, '../../../packages/react/src/hooks/use-theme/src'),
        '@packages/react/components/select': path.resolve(
          __dirname,
          '../../../packages/react/src/components/select/src',
        ),
        '@packages/react/components/button': path.resolve(
          __dirname,
          '../../../packages/react/src/components/button/src',
        ),
        '@packages/react/components/box': path.resolve(__dirname, '../../../packages/react/src/components/box/src'),
        '@sigmaui-kit/layout': path.resolve(__dirname, '../../../packages/react/src/components/layout/src'),
        '@sigmaui-kit/button': path.resolve(__dirname, '../../../packages/react/src/components/button/src'),
        '@sigmaui-kit/input': path.resolve(__dirname, '../../../packages/react/src/components/input/src'),
        '@sigmaui-kit/text': path.resolve(__dirname, '../../../packages/react/src/components/text/src'),
        '@sigmaui-kit/select': path.resolve(__dirname, '../../../packages/react/src/components/select/src'),
        '@sigmaui-kit/icon': path.resolve(__dirname, '../../../packages/react/src/components/icon/src'),
        '@sigmaui-kit/slider': path.resolve(__dirname, '../../../packages/react/src/components/slider/src'),
        '@sigmaui-kit/tabs': path.resolve(__dirname, '../../../packages/react/src/components/tabs/src'),
        '@sigmaui-kit/segment-group': path.resolve(
          __dirname,
          '../../../packages/react/src/components/segment-group/src',
        ),
        '@sigmaui-kit/menu': path.resolve(__dirname, '../../../packages/react/src/components/menu/src'),
      },
    },
    build: {
      minify: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          // entryFileNames: (params: any) => {
          //   const { facadeModuleId } = params;
          //
          //   // console.log('facadeModuleId', facadeModuleId);
          //
          //   // const defaultPath = `${staticPath}/[name].${version}.min.js`;
          //   const defaultPath = `${staticPath}/[name].[hash].min.js`;
          //
          //   if (facadeModuleId.endsWith(PATH_NAME.HTML)) {
          //     // return `${staticPath}/${FILE_NAME.MAIN}.${version}.min.js`
          //
          //     return `${staticPath}/${FILE_NAME.MAIN}.[hash].min.js`
          //   }
          //
          //   if (facadeModuleId.endsWith(PATH_NAME.SERVER)) {
          //     return `${FILE_NAME.SERVER}.min.js`
          //   }
          //
          //   if (facadeModuleId.endsWith(PATH_NAME.SERVER_CONFIG)) {
          //     return 'server.config.js'
          //   }
          //
          //   if (facadeModuleId.endsWith(PATH_NAME.SERVER_API)) {
          //     return 'server.api.js'
          //   }
          //
          //   return defaultPath
          // },
          // chunkFileNames: (params: any) => {
          //   const { facadeModuleId, name } = params;
          //
          //   // console.log('facadeModuleId', name, facadeModuleId);
          //
          //   if (name === FILE_NAME.VENDOR) {
          //     // console.log('name', name, params)
          //
          //     // return `${staticPath}/vendor.${version}.min.js`
          //     return `${staticPath}/vendor.[hash].min.js`
          //   }
          //
          //   let defaultPath;
          //
          //   if (name === 'index') {
          //     // console.log('facadeModuleId', facadeModuleId);
          //     defaultPath = `${staticPath}/${FILE_NAME.COMPONENT}.[hash].min.js`;
          //   } else {
          //     // defaultPath = `${staticPath}/${FILE_NAME.LIBRARY}.[hash].[name].min.js`;
          //     defaultPath = `${staticPath}/${FILE_NAME.LIBRARY}.[hash].min.js`;
          //   }
          //
          //   if (facadeModuleId) {
          //     if (facadeModuleId.includes(PATH_NAME.PAGE)) {
          //       return `${staticPath}/${FILE_NAME.PAGE}.[hash].min.js`
          //
          //       // const paths = facadeModuleId.match(/(.*)\/pages\/(.*)\/(.*)\.tsx$/) || [];
          //       // let name;
          //       // const folder = paths[2];
          //       //
          //       // if (folder) {
          //       //   if (folder.includes('/')) {
          //       //     const folders = folder.split('/');
          //       //
          //       //     folders.shift();
          //       //
          //       //     name = folders.join('-')
          //       //   } else {
          //       //     name = folder
          //       //   }
          //       // } else {
          //       //   name = FILE_NAME.COMPONENT
          //       // }
          //
          //       // return `${staticPath}/${FILE_NAME.PAGE}.${name}.[hash].min.js`
          //     }
          //
          //     return defaultPath
          //   }
          //
          //   return defaultPath
          // },
          // assetFileNames: () => {
          //   return `${staticPath}/assets/[name].[hash].[ext]`
          // },
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              const segments = id.split('node_modules/')
              if (segments[1]) {
                return segments[1].split('/')[0]
              }
            }
          },
        },
      },
    },
    esbuild: {
      pure: ['console.log', 'console.warn'],
    },
    plugins: [
      reactRefresh(),
      mdx({
        providerImportSource: '@mdx-js/react',
        jsxImportSource: 'react',
        remarkPlugins: [remarkFrontmatter],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ['heading-anchor'],
                ariaLabel: 'Link to section',
              },
            },
          ],
        ],
      }),
    ],
  }
})
