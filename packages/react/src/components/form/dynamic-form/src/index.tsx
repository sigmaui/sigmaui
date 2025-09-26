import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { getRestProps } from '@microui-kit/helpers';
import { withStyles } from '@sigmaui-kit/with-styles';

import { type DynamicFormProps, styles } from './styles';

const DynamicForm: FC<DynamicFormProps> = ({ prefixCls, className, classes, children, ...dynamicFormProps }) => {
  const restProps = getRestProps(dynamicFormProps);

  return (
    <div
      className={classNames(prefixCls, className, classes?.wrapper)}
      {...restProps}
    ></div>
  );
};

DynamicForm.displayName = 'DynamicForm';

export default withStyles<DynamicFormProps>(styles)(DynamicForm);
