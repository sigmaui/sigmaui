import { useContext } from 'react';
import type { FC, ReactNode } from 'react';
import Button from '@sigma-ui-kit/button';

import { ModalContext } from '../context';
import type { ModalProps } from '../types';

export interface NormalCancelBtnProps extends Pick<ModalProps, 'cancelButtonProps' | 'onCancel'> {
  cancelTextLocale?: ReactNode;
}

const NormalCancelBtn: FC = () => {
  const { cancelButtonProps, cancelTextLocale, onCancel } = useContext(ModalContext);
  return (
    <Button variant="secondary" tone="neutral" onClick={onCancel}>
      {cancelTextLocale}
    </Button>
  );
};

export default NormalCancelBtn;
