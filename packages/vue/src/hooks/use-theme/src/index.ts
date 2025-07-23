import { inject, provide } from 'vue'
import type { Theme } from '@stylexjs/stylex'

type CreateContextReturn<T> = [(opts: T) => void, (fallback?: T) => T, symbol]

const createContext = <T>(id: string) => {
  const contextId = Symbol(id)
  const provider = (value: T) => provide(contextId, value)
  const consumer = (fallback?: T) => inject(contextId, fallback)

  return [provider, consumer, contextId] as CreateContextReturn<T>
}

interface ComponentDefaultProps {
  [key: string]: unknown
}

type DefaultPropsFunction = (theme: Theme<any, any>) => ComponentDefaultProps

export interface Components<Props> {
  [componentName: string]: {
    defaultProps?: Props | ComponentDefaultProps | DefaultPropsFunction
  }
}

export interface ThemeConfig {
  globalProps?: Record<string, unknown>
  components?: Components<any>

  [key: string]: any
}

export interface ThemeContextProps {
  theme?: Theme<any, any>
  themeConfig?: ThemeConfig
  themeTokens?: { [key: string]: any }
}

const ThemeContext = createContext<ThemeContextProps>('ThemeContext')

export const [ThemeProvider, useTheme] = ThemeContext
