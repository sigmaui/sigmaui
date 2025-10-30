import type { ReactNode } from 'react';
import React from 'react';
import type { DialogProps } from '@rc-component/dialog';
import pickAttrs from '@rc-component/util/lib/pickAttrs';
import XMarkIcon from '@sigma-ui-kit/icons/XMarkIcon';

import type { HTMLAriaDataAttributes } from '../aria-data-attrs';
import extendsObject from '../extendsObject';

export type ClosableType = DialogProps['closable'];

export type BaseContextClosable = { closable?: ClosableType; closeIcon?: ReactNode };
export type ContextClosable<T extends BaseContextClosable = any> = Partial<
  Pick<T, 'closable' | 'closeIcon'>
>;

export function pickClosable<T extends BaseContextClosable>(
  context?: ContextClosable<T>
): ContextClosable<T> | undefined {
  if (!context) {
    return undefined;
  }
  const { closable, closeIcon } = context;
  return { closable, closeIcon };
}

/** Convert `closable` and `closeIcon` to config object */
function useClosableConfig(closableCollection?: ClosableCollection | null) {
  const { closable, closeIcon } = closableCollection || {};

  return React.useMemo(() => {
    if (
      // If `closable`, whatever rest be should be true
      !closable &&
      (closable === false || closeIcon === false || closeIcon === null)
    ) {
      return false;
    }

    if (closable === undefined && closeIcon === undefined) {
      return null;
    }

    let closableConfig: ClosableType = {
      closeIcon: typeof closeIcon !== 'boolean' && closeIcon !== null ? closeIcon : undefined,
    };
    if (closable && typeof closable === 'object') {
      closableConfig = {
        ...closableConfig,
        ...closable,
      };
    }
    return closableConfig;
  }, [closable, closeIcon]);
}

/** Collection contains the all the props related with closable. e.g. `closable`, `closeIcon` */
interface ClosableCollection {
  closable?: ClosableType;
  closeIcon?: ReactNode;
}

interface FallbackCloseCollection extends ClosableCollection {
  /**
   * Some components need to wrap CloseIcon twice,
   * this method will be executed once after the final CloseIcon is calculated
   */
  closeIconRender?: (closeIcon: ReactNode) => ReactNode;
}

/** Use same object to support `useMemo` optimization */
const EmptyFallbackCloseCollection: FallbackCloseCollection = {};

export default function useClosable(
  propCloseCollection?: ClosableCollection,
  contextCloseCollection?: ClosableCollection | null,
  fallbackCloseCollection: FallbackCloseCollection = EmptyFallbackCloseCollection
): [
  closable: boolean,
  closeIcon: React.ReactNode,
  closeBtnIsDisabled: boolean,
  ariaOrDataProps?: HTMLAriaDataAttributes,
] {
  // Align the `props`, `context` `fallback` to config object first
  const propCloseConfig = useClosableConfig(propCloseCollection);
  const contextCloseConfig = useClosableConfig(contextCloseCollection);

  const closeBtnIsDisabled =
    typeof propCloseConfig !== 'boolean' ? !!propCloseConfig?.disabled : false;

  const mergedFallbackCloseCollection = React.useMemo(
    () => ({
      closeIcon: <XMarkIcon />,
      ...fallbackCloseCollection,
    }),
    [fallbackCloseCollection]
  );

  // Use fallback logic to fill the config
  const mergedClosableConfig = React.useMemo(() => {
    // ================ Props First ================
    if (propCloseConfig === false) {
      return false;
    }

    if (propCloseConfig) {
      return extendsObject(mergedFallbackCloseCollection, contextCloseConfig, propCloseConfig);
    }

    // =============== Context Second ==============
    if (contextCloseConfig === false) {
      return false;
    }

    if (contextCloseConfig) {
      return extendsObject(mergedFallbackCloseCollection, contextCloseConfig);
    }

    // ============= Fallback Default ==============
    return !mergedFallbackCloseCollection.closable ? false : mergedFallbackCloseCollection;
  }, [propCloseConfig, contextCloseConfig, mergedFallbackCloseCollection]);

  // Calculate the final closeIcon
  return React.useMemo(() => {
    if (mergedClosableConfig === false) {
      return [false, null, closeBtnIsDisabled, {}];
    }

    const { closeIconRender } = mergedFallbackCloseCollection;
    const { closeIcon } = mergedClosableConfig;

    let mergedCloseIcon: ReactNode = closeIcon;

    // Wrap the closeIcon with aria props
    const ariaOrDataProps = pickAttrs(mergedClosableConfig, true);

    if (mergedCloseIcon !== null && mergedCloseIcon !== undefined) {
      if (closeIconRender) {
        mergedCloseIcon = closeIconRender(closeIcon);
      }

      mergedCloseIcon = React.isValidElement<HTMLAriaDataAttributes>(mergedCloseIcon) ? (
        React.cloneElement(mergedCloseIcon, {
          ...mergedCloseIcon.props,
          'aria-label': mergedCloseIcon.props?.['aria-label'] ?? 'close',
          ...ariaOrDataProps,
        })
      ) : (
        <span aria-label="close" {...ariaOrDataProps}>
          {mergedCloseIcon}
        </span>
      );
    }

    return [true, mergedCloseIcon, closeBtnIsDisabled, ariaOrDataProps];
  }, [closeBtnIsDisabled, mergedClosableConfig, mergedFallbackCloseCollection]);
}
