import { inject, provide } from 'vue'
import { type PlatformInfo } from '@sigmaui-kit/use-platform-detect'

type CreateContextReturn<T> = [(opts: T) => void, (fallback?: T) => T, symbol]

const createContext = <T>(id: string) => {
  const contextId = Symbol(id)
  const provider = (value: T) => provide(contextId, value)
  const consumer = (fallback?: T) => inject(contextId, fallback)

  return [provider, consumer, contextId] as CreateContextReturn<T>
}

export interface PlatformContextProps {
  platform?: PlatformInfo
}

const PlatformContext = createContext<PlatformContextProps>('PlatformContext')

export const [PlatformProvider, usePlatform] = PlatformContext
