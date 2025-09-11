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

import { useFela } from 'react-fela';
import { usePlatform } from '@microui-kit/platform';
import { assignStyle, getStylesByTailwind } from '@microui-kit/system';

export type {
  PlatformInfo
}

export const withMicroComponent = (MicroComponent: any) => {
  const componentName = MicroComponent.componentName;

  return (props: any) => {
    const { theme = {}, renderer }: any = useFela();
    const { platform } = usePlatform();

    const { _style, extendStyle, ...restProps } = props;

    let felaRules = {};
    let microProps = restProps;

    if (componentName) {
      const _componentStyle = theme.components?.[componentName]?._style;

      if (_componentStyle) {
        felaRules = typeof _componentStyle === 'function' ? _componentStyle(theme, restProps) : _componentStyle
      }

      const defaultProps = theme.components?.[componentName]?.defaultProps;

      if (defaultProps) {
        if (typeof defaultProps === 'function') {
          microProps = { ...(defaultProps(theme) || {}), ...restProps }
        } else {
          microProps = { ...defaultProps, ...restProps }
        }
      }
    }

    const styles = (typeof _style === 'function' ? _style(theme, restProps) : _style) || {};
    const extendStyles = (typeof extendStyle === 'function' ? extendStyle(theme, restProps) : extendStyle) || {};

    let newStyles = styles;

    const { _class, isMergeClass } = props;

    if (_class && !isMergeClass) {
      newStyles = assignStyle(getStylesByTailwind(_class, { isWithFela: true }), styles)
    }

    return (
      <MicroComponent
        {...microProps}
        platform={platform}
        renderer={renderer}
        _felaRules={felaRules}
        extend={assignStyle(newStyles, extendStyles)}
      />
    )
  }
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

    const componentCls = displayName;

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

      console.log('restProps', restProps)
      if (!restProps.prefixCls && displayName) {
        restProps.prefixCls = 'abc'
      }

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

    return withMicroComponent(connectStyled(microStyles)(PureComponent)) as ComponentType<T>
  }
}

export default withStyles
