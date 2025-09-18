import React, { ReactNode } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@sigmaui-kit/with-styles';
import Tooltip, { type TooltipProps } from '@sigmaui-kit/tooltip';
import CircleQuestionOutlinedIcon from '@sigmaui-kit/icons/CircleQuestionOutlinedIcon';
import { getRestProps } from '@microui-kit/helpers';

import { styles, type FormItemLabelProps } from './styles';

function getTooltipProps<P extends TooltipProps>(tooltip: P | ReactNode): P | null {
  if (tooltip === undefined || tooltip === null) {
    return null;
  }

  if (typeof tooltip === 'object' && !React.isValidElement(tooltip)) {
    return tooltip as P;
  }

  return {
    overlay: tooltip
  } as P;
}

const FormItemLabel: FC<FormItemLabelProps> = ({
  prefixCls,
  className,
  classes,
  id,
  children,
  required,
  htmlFor,
  requiredMark = '*',
  isSuffixMark,
  tooltip,
  ...formItemLabelProps
}) => {
  const restProps = getRestProps(formItemLabelProps)

  const classArgs: any = {};

  if (required && classes?.required) {
    (classArgs as any)[classes?.required] = true
  }

  if (requiredMark) {
    restProps['data-required-mark'] = requiredMark;
  }

  let tooltipNode: ReactNode;

  if (tooltip) {
    const tooltipProps = getTooltipProps(tooltip);

    if (tooltipProps) {
      const { icon = <CircleQuestionOutlinedIcon/>, ...restTooltipProps } = tooltipProps;

      tooltipNode = (
        <Tooltip
          placement="top"
          {...restTooltipProps}
          _style={{
            inner: {
              lineHeight: 0,
              marginLeft: 2,
              color: 'form.help',

              '& svg': {
                width: 16,
                height: 16
              }
            }
          }}
        >
          {icon}
        </Tooltip>
      )
    }
  }

  return (
    <label
      htmlFor={htmlFor}
      id={id}
      className={classNames(prefixCls, className, classes?.wrapper, classArgs)}
      {...restProps}
    >
      {children}
      {tooltipNode}
    </label>
  )
}

FormItemLabel.displayName = 'FormItemLabel';

export default withStyles<FormItemLabelProps>(styles)(FormItemLabel)
