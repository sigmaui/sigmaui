import { Outlet } from 'react-router'
import { MDXProvider } from '@mdx-js/react'
import { createRenderer } from '@microui-kit/create-renderer'
import { MicroUIProvider, THEME_MODE } from '@microui-kit/provider'
import { useRouter } from '@microui-kit/use-router'
import Layout from '@sigmaui-kit/layout'
import { getRoute } from '@docs/helpers'
import themeConfig, { globalStyle } from 'packages/common/theme/config'
import { routes } from './router'

import { MDXComponents } from './components/mdx'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'

import { cssifyDeclaration, cssifyObject } from 'css-in-js-utils'
import { arrayReduce } from 'fast-loops'
import isPlainObject from 'isobject'

import {
  generateDeclarationReference,
  generateCombinedMediaQuery,
  generateCSSSelector,
  isMediaQuery,
  isNestedSelector,
  isUndefinedValue,
  isSupport,
  normalizeNestedProperty,
  processStyleWithPlugins,
  STATIC_TYPE,
  RULE_TYPE,
  KEYFRAME_TYPE,
  FONT_TYPE,
  CLEAR_TYPE,
} from 'fela-utils'

const App = ({ renderer }) => {
  const router = useRouter()
  const { pathname } = router

  const route = getRoute({ routes, pathname })
  const { routeProps = {}, name: pageName } = route

  const theme = {
    ...themeConfig,
  }

  const isSidebar = pathname.startsWith('/docs')

  console.log('renderer', renderer);

  renderer._renderStyleNestedSelector = (
    className,
    style,
    pseudo = '',
    media = '',
    support = ''
  ) => {
    const rules = {};

    for (const property in style) {
      const value = style[property]

      if (isPlainObject(value)) {
        if (isNestedSelector(property)) {
          renderer._renderStyleNestedSelector(
            className,
            value,
            pseudo + normalizeNestedProperty(property),
            media,
            support
          )
        } else if (isMediaQuery(property)) {
          const combinedMediaQuery = generateCombinedMediaQuery(
            media,
            property.slice(6).trim()
          )

          renderer._renderStyleNestedSelector(
            className,
            value,
            pseudo,
            combinedMediaQuery,
            support
          )
        } else if (isSupport(property)) {
          const combinedSupport = generateCombinedMediaQuery(
            support,
            property.slice(9).trim()
          )
          renderer._renderStyleNestedSelector(
            className,
            value,
            pseudo,
            media,
            combinedSupport
          )
        } else {
          console.warn(`The object key "${property}" is not a valid nested key in Fela.`)
        }
      } else if (!isUndefinedValue(value)) {
        rules[property] = value
      }
    }

    if (Object.keys(rules).length > 0) {
      const css = cssifyObject(rules)
      const selector = generateCSSSelector(
        className,
        pseudo,
        renderer.specificityPrefix
      )

      // console.log('_renderStyleToCache selector', selector, className, pseudo)

      const change = {
        type: RULE_TYPE,
        className,
        selector,
        declaration: css,
        media,
        pseudo,
        support,
      }

      // console.log('_renderStyleToCache change', change)

      const declarationReference = selector + media + support
      renderer.cache[declarationReference] = change
      renderer._emitChange(change)
    }
  }

  renderer._renderStyleToClassNames = (style, pseudo = '', media = '', support = '') => {
    let classNames = ''

    const applyPlugin = (processed, plugin) => plugin(processed, renderer)

    let className: string | undefined;

    for (const property in style) {
      const value = style[property]

      if (isPlainObject(value)) {
        if (isNestedSelector(property)) {
          if (!className) {
            className = renderer.selectorPrefix + renderer.generateClassName()
          }

          if (!renderer.cache.hasOwnProperty(className)) {
            classNames += ` ${className}`
            renderer.cache[className] = {}
          }

          renderer._renderStyleNestedSelector(className, { [property]: value })
          // classNames += renderer._renderStyleToClassNames(
          //   value,
          //   pseudo + normalizeNestedProperty(property),
          //   media,
          //   support
          // )
        } else if (isMediaQuery(property)) {
          const combinedMediaQuery = generateCombinedMediaQuery(
            media,
            property.slice(6).trim()
          )
          classNames += renderer._renderStyleToClassNames(
            value,
            pseudo,
            combinedMediaQuery,
            support
          )
        } else if (isSupport(property)) {
          const combinedSupport = generateCombinedMediaQuery(
            support,
            property.slice(9).trim()
          )
          classNames += renderer._renderStyleToClassNames(
            value,
            pseudo,
            media,
            combinedSupport
          )
        } else {
          console.warn(`The object key "${property}" is not a valid nested key in Fela.`)
        }
      } else {
        let declarationReference = generateDeclarationReference(
          property,
          value,
          pseudo,
          media,
          support
        )

        // console.log('declarationReference', declarationReference)

        if (renderer.cacheMap) {
          if (!renderer.cacheMap.hasOwnProperty(declarationReference)) {
            const pluginInterface = {
              property,
              value,
              pseudo,
              media,
              support,
            }

            const processed = arrayReduce(
              renderer.optimizedPlugins,
              applyPlugin,
              pluginInterface
            )

            const cacheReference = generateDeclarationReference(
              processed.property,
              processed.value,
              processed.pseudo,
              processed.media,
              processed.support
            )

            if (!renderer.cache.hasOwnProperty(cacheReference)) {
              renderer._renderStyleToCache(
                cacheReference,
                processed.property,
                processed.value,
                processed.pseudo,
                processed.media,
                processed.support
              )
            }

            renderer.cacheMap[declarationReference] = cacheReference
          }

          declarationReference = renderer.cacheMap[declarationReference]
        }

        if (!renderer.cache.hasOwnProperty(declarationReference)) {
          renderer._renderStyleToCache(
            declarationReference,
            property,
            value,
            pseudo,
            media,
            support
          )
        }

        const cachedClassName = renderer.cache[declarationReference].className

        // only append if we got a class cached
        if (cachedClassName) {
          classNames += ' ' + cachedClassName
        }
      }
    }

    // console.log('classNames', classNames)

    return classNames
  }

  renderer._renderStyleToCache = (reference, property, value, pseudo, media, support) => {
    // we remove undefined values to enable
    // usage of optional props without side-effects
    if (isUndefinedValue(value)) {
      renderer.cache[reference] = {
        className: '',
      }

      return
    }

    const className = renderer.selectorPrefix + renderer.generateClassName(property, value, pseudo, media, support)

    const declaration = cssifyDeclaration(property, value)
    const selector = generateCSSSelector(
      className,
      pseudo,
      undefined,
      renderer.propertyPriority[property]
    )

    const change = {
      type: RULE_TYPE,
      className,
      selector,
      declaration,
      pseudo,
      media,
      support,
    }

    // console.log('_renderStyleToCache value', property, selector, className, value)

    // console.log('_renderStyleToCache declaration', declaration)

    renderer.cache[reference] = change
    renderer._emitChange(change)
  }


  return (
    <MicroUIProvider
      renderer={renderer}
      theme={theme}
      themeMode={THEME_MODE.LIGHT}
      globalStyle={globalStyle}
      prefix="sm"
    >
      <MDXProvider components={MDXComponents}>
        <Layout
          _style={{
            wrapper: {
              width: 1200,
              marginInline: 'auto',
            },
            main: {
              marginTop: 24,
            },
          }}
          header={<Header/>}
          isSidebar={isSidebar}
          sidebar={isSidebar && <Sidebar/>}
        >
          <Outlet
            context={{
              pageName,
              routeProps,
            }}
          />
        </Layout>
      </MDXProvider>
    </MicroUIProvider>
  )
}

export default App
