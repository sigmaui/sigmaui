import React, { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@sigmaui-kit/with-styles'
import { getRestProps } from '@microui-kit/helpers'

import { styles, type IconProps } from 'packages/common/components/icon/styles'

const SigmaIcon: FC<IconProps> = ({
  prefixCls,
  className,
  classes,
  icon,
  iconMap = {},
  svgProps = {},
  ...iconProps
}) => {
  let iconElement: React.ReactNode | undefined;
  let iconClasName: string | undefined;

  if (icon) {
    if (React.isValidElement(icon)) {
      iconElement = icon
    }

    if (typeof icon === 'string') {
      if (
        icon.startsWith?.('/') ||
        icon.startsWith?.('http') ||
        icon.startsWith?.('data:image')
      ) {
        iconElement = (
          <img className={classes?.image} src={icon} alt="icon"/>
        );
      } else {
        iconClasName = `icon-${icon}`;
        const iconString = iconMap[icon];

        if (iconString) {
          if (React.isValidElement(iconString)) {
            iconElement = iconString
          } else {
            if (typeof iconString === 'string') {
              if (
                iconString.startsWith('/') ||
                iconString.startsWith('http') ||
                iconString.startsWith('data:image')
              ) {
                iconElement = (
                  <img className={classes?.image} src={iconString} alt="icon"/>
                );
              } else {
                iconProps.dangerouslySetInnerHTML = { __html: iconString };
              }
            } else {
              const IconElement = iconString;

              iconElement = (
                <IconElement
                  {...svgProps}
                />
              );
            }
          }
        }
      }
    }
  }

  return (
    <div
      className={classNames(prefixCls, iconClasName, className, classes?.wrapper)}
      {...getRestProps(iconProps)}
    >
      {iconElement}
    </div>
  )
}

SigmaIcon.displayName = 'Icon'

export default withStyles<IconProps>(styles)(SigmaIcon)
