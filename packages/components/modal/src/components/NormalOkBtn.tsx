import type { FC } from 'react';
import React, { useContext } from 'react';
import Button from '@sigma-ui-kit/button';

import { ModalContext } from '../context';
import type { ModalProps } from '../types';

export interface NormalOkBtnProps
  extends Pick<ModalProps, 'confirmLoading' | 'okVariant' | 'okButtonProps' | 'onOk'> {
  okTextLocale?: React.ReactNode;
}

const NormalOkBtn: FC = () => {
  const { confirmLoading, okButtonProps, okVariant, okTextLocale, onOk } = useContext(ModalContext);

  console.log(confirmLoading, okButtonProps, okVariant, okTextLocale, onOk);
  return (
    <Button
      variant="primary"
      tone="brand"
      loading={confirmLoading}
      onClick={onOk}
      // {...okButtonProps}
    >
      Create
    </Button>
  );
};

export default NormalOkBtn;
