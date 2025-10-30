import type { FC } from 'react';
import React, { useContext } from 'react';

// import ActionButton from '../../_util/ActionButton';
import type { ConfirmDialogProps } from '../ConfirmDialog';
import { ModalContext } from '../context';
import Button from '@sigma-ui-kit/button';

export interface ConfirmOkBtnProps
  extends Pick<
    ConfirmDialogProps,
    'close' | 'isSilent' | 'okVariant' | 'okButtonProps' | 'rootPrefixCls' | 'onConfirm' | 'onOk'
  > {
  autoFocusButton?: false | 'ok' | 'cancel' | null;
  okTextLocale?: React.ReactNode;
}

const ConfirmOkBtn: FC = () => {
  const {
    autoFocusButton,
    close,
    isSilent,
    okButtonProps,
    rootPrefixCls,
    okTextLocale,
    okVariant,
    onConfirm,
    onOk,
  } = useContext(ModalContext);
  return (
    // <ActionButton
    //   isSilent={isSilent}
    //   type={okVariant || 'primary'}
    //   actionFn={onOk}
    //   close={(...args: any[]) => {
    //     close?.(...args);
    //     onConfirm?.(true);
    //   }}
    //   autoFocus={autoFocusButton === 'ok'}
    //   buttonProps={okButtonProps}
    //   prefixCls={`${rootPrefixCls}-btn`}
    // >
    //   {okTextLocale}
    // </ActionButton>
    <Button variant="primary" onClick={onOk}>
      {okTextLocale}
    </Button>
  );
};

export default ConfirmOkBtn;
