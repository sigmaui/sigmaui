import type React from 'react';
import type { DialogProps } from '@rc-component/dialog';
import type { ButtonProps } from '@sigma-ui-kit/button';
import type { Breakpoint } from '@sigma-ui-kit/util/responsiveObserver';
import type { ComponentBaseProps } from '@sigma-ui-kit/theme';

// import type { DirectionType } from '../config-provider';

export type SemanticName =
  | 'header'
  | 'body'
  | 'footer'
  | 'container'
  | 'title'
  | 'wrapper'
  | 'mask';

interface ModalCommonProps
  extends Omit<
    DialogProps,
    | 'footer'
    | 'width'
    | 'onClose'
    | 'animation'
    | 'maskAnimation'
    | 'transitionName'
    | 'maskTransitionName'
    | 'visible'
    | 'bodyStyle'
    | 'maskStyle'
    | 'rootStyle'
    | 'wrapStyle'
    | 'wrapClassName'
  > {
  footer?:
    | React.ReactNode
    | ((
        originNode: React.ReactNode,
        extra: { OkBtn: React.FC; CancelBtn: React.FC }
      ) => React.ReactNode);
}

export interface ModalProps extends ModalCommonProps, ComponentBaseProps<SemanticName> {
  /** Whether the modal dialog is visible or not */
  open?: boolean;
  /** Whether to apply loading visual effect for OK button or not */
  confirmLoading?: boolean;
  /** The modal dialog's title */
  title?: React.ReactNode;
  /** Specify a function that will be called when a user clicks the OK button */
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Specify a function that will be called when a user clicks mask, close button on top right or Cancel button */
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  afterClose?: () => void;
  /** Callback when the animation ends when Modal is turned on and off */
  afterOpenChange?: (open: boolean) => void;
  /** Centered Modal */
  centered?: boolean;
  /** Width of the modal dialog */
  width?: string | number | Partial<Record<Breakpoint, string | number>>;
  /** Text of the OK button */
  okText?: React.ReactNode;
  /** Button `type` of the OK button */
  okVariant?: ButtonProps['variant'];
  /** Text of the Cancel button */
  cancelText?: React.ReactNode;
  /** Whether to close the modal dialog when the mask (area outside the modal) is clicked */
  maskClosable?: boolean;
  /** Force render Modal */
  forceRender?: boolean;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  destroyOnHidden?: boolean;
  style?: React.CSSProperties;
  maskTransitionName?: string;
  transitionName?: string;
  className?: string;
  rootClassName?: string;
  getContainer?: string | HTMLElement | getContainerFunc | false;
  zIndex?: number;
  mask?: boolean;
  keyboard?: boolean;
  wrapProps?: any;
  closeIcon?: React.ReactNode;
  modalRender?: (node: React.ReactNode) => React.ReactNode;
  focusTriggerAfterClose?: boolean;
  children?: React.ReactNode;
  mousePosition?: MousePosition;
  loading?: boolean;
}

type getContainerFunc = () => HTMLElement;

export interface ModalFuncProps extends ModalCommonProps {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  open?: boolean;
  title?: React.ReactNode;
  content?: React.ReactNode;
  // TODO: find out exact types
  onOk?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  afterClose?: () => void;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  centered?: boolean;
  width?: string | number;
  okText?: React.ReactNode;
  okVariant?: ButtonProps['variant'];
  cancelText?: React.ReactNode;
  icon?: React.ReactNode;
  mask?: boolean;
  maskClosable?: boolean;
  zIndex?: number;
  okCancel?: boolean;
  style?: React.CSSProperties;
  wrapClassName?: string;
  type?: 'info' | 'success' | 'error' | 'warn' | 'warning' | 'confirm';
  keyboard?: boolean;
  getContainer?: string | HTMLElement | getContainerFunc | false;
  autoFocusButton?: null | 'ok' | 'cancel';
  transitionName?: string;
  maskTransitionName?: string;
  // direction?: DirectionType;
  closeIcon?: React.ReactNode;
  footer?: ModalProps['footer'];
  modalRender?: (node: React.ReactNode) => React.ReactNode;
  focusTriggerAfterClose?: boolean;
}

export interface ModalLocale {
  okText: string;
  cancelText: string;
  justOkText: string;
}

export type MousePosition = { x: number; y: number } | null;
