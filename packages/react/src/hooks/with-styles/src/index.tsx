import React, { ComponentType } from 'react'
import classNames from 'classnames'
import { IRenderer } from 'fela'
import { connect as connectStyled } from 'react-fela'
import { useTranslation } from 'react-i18next'
import { isObject } from '@microui-kit/utils'
import { useMicroUI } from '@microui-kit/use-micro-ui'
import { PlatformInfo } from '@sigmaui-kit/use-platform-detect'

interface PureComponentProps extends React.FC {
  componentName?: string
  platform?: PlatformInfo
  renderer?: IRenderer
  _class?: any
  isMergeClass?: boolean
}

const getStyles = ({ styles, displayName, isWithDisplayName }: any) => {
  return ({ ...arg }) => {
    const pureStyles = styles({
      ...arg,
      displayName,
    })

    if (isWithDisplayName) {
      return Object.keys(pureStyles).reduce((map, key) => {
        const value = pureStyles[key]

        if (isObject(value)) {
          return {
            ...map,
            [key]: {
              ...value,
              displayName,
            },
          }
        } else {
          return {
            ...map,
            [key]: value,
          }
        }
      }, {})
    } else {
      return pureStyles
    }
  }
}

export const withStyles = <T extends unknown>(
  styles: any,
  params: {
    isWithDisplayName?: boolean
    isWithPureStyle?: boolean
  } = {},
) => {
  const { isWithDisplayName = true, isWithPureStyle } = params

  return (Component: ComponentType<T>): ComponentType<T> => {
    const displayName = Component.displayName || Component.name

    const microStyles = displayName ? getStyles({ styles, displayName, isWithDisplayName }) : styles

    const PureComponent: PureComponentProps = (props: any) => {
      const { styles: classes, theme, platform, renderer, rules, _class, className, isMergeClass, ...restProps } = props

      const { t } = useTranslation()
      const { css } = useMicroUI()

      if (_class && isMergeClass) {
        restProps.className = classNames(`${css(_class)}`, className)
      } else {
        restProps.className = className
      }

      const pureStyles = (isWithPureStyle && microStyles({ theme, platform, renderer })) || {}

      return (
        <Component
          pureStyles={pureStyles}
          classes={classes}
          platform={platform}
          renderer={renderer}
          theme={theme}
          rules={rules}
          css={css}
          t={t}
          {...restProps}
        />
      )
    }

    PureComponent.displayName = displayName
    PureComponent.componentName = displayName

    return connectStyled(microStyles)(PureComponent) as ComponentType<T>
  }
}

export default withStyles
