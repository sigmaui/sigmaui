import React, { Fragment } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { useStoreContext } from '@microui-kit/use-store';
import { withStyles } from '@sigmaui-kit/with-styles';
import { getRestProps } from '@microui-kit/helpers';

import FormItemError from '../FormItemError';

import { styles, type FormItemControlProps } from './styles';
import { StoreProviderProps } from '../Form/types';

const FormItemControl: FC<FormItemControlProps> = ({
  prefixCls,
  className,
  classes,
  fieldId,
  children,
  meta,
  note,
  formItemPrefixCls,
  ...formItemLabelProps
}) => {
  const restProps = getRestProps(formItemLabelProps);
  const { useStoreSelector } = useStoreContext<StoreProviderProps>();

  const validateIcons = useStoreSelector((state) => state.validateIcons) || {};

  const errors = meta?.errors || [];

  const hasError = errors.length > 0;
  const hasMeta = hasError || Boolean(note);

  return (
    <div
      className={classNames(prefixCls, className, classes?.wrapper)}
      {...restProps}
    >
      <div className={classNames(`${prefixCls}-content`, classes?.content)}>
        {children}
      </div>
      {
        hasMeta
        &&
        <Fragment>
          <div className={classNames(`${formItemPrefixCls}-meta`, classes?.meta)}>
            {
              note
              &&
              <div
                id={`${fieldId}_note`}
                className={classNames(`${formItemPrefixCls}-note`, classes?.note)}
              >
                {note}
              </div>
            }
            {
              hasError
              &&
              <FormItemError
                id={`${fieldId}_error`}
                errors={errors}
                icon={validateIcons['error']}
              />
            }
          </div>
        </Fragment>
      }
    </div>
  )
}

FormItemControl.displayName = 'FormItemControl'

export default withStyles<FormItemControlProps>(styles)(FormItemControl)
