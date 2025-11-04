import React, { useContext } from 'react';
import type { FC, PropsWithChildren } from 'react';
import {
  NotificationProvider,
  useNotification as useRcNotification,
} from '@rc-component/notification';
import type {
  NotificationAPI,
  NotificationConfig as RcNotificationConfig,
} from '@rc-component/notification';
import { classnames } from '@sigma-ui-kit/theme';

import { ConfigContext } from '../config-provider';
import type { NotificationConfig as CPNotificationConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import { useToken } from '../theme/internal';
import type {
  ArgsProps,
  NotificationConfig,
  NotificationInstance,
  NotificationPlacement,
} from './types';
import { getCloseIcon, PureContent } from './PurePanel';
import useStyle from './style';
import { getMotion, getPlacementStyle, getCloseIconConfig } from './util';

const DEFAULT_OFFSET = 24;
const DEFAULT_DURATION = 4.5;
const DEFAULT_PLACEMENT: NotificationPlacement = 'topRight';

// ==============================================================================
// ==                                  Holder                                  ==
// ==============================================================================
type HolderProps = NotificationConfig & {
  onAllRemoved?: VoidFunction;
};

interface HolderRef extends NotificationAPI {
  prefixCls: string;
  notification?: CPNotificationConfig;
}

const Wrapper: FC<PropsWithChildren<{ prefixCls: string }>> = ({ children, prefixCls }) => {
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);
  return wrapCSSVar(
    <NotificationProvider classNames={{ list: classnames(hashId, cssVarCls, rootCls) }}>
      {children}
    </NotificationProvider>
  );
};

const renderNotifications: RcNotificationConfig['renderNotifications'] = (
  node,
  { prefixCls, key }
) => (
  <Wrapper prefixCls={prefixCls} key={key}>
    {node}
  </Wrapper>
);

const Holder = React.forwardRef<HolderRef, HolderProps>((props, ref) => {
  const {
    top,
    bottom,
    prefixCls: staticPrefixCls,
    getContainer: staticGetContainer,
    maxCount,
    rtl,
    onAllRemoved,
    stack,
    duration,
    pauseOnHover = true,
    showProgress,
  } = props;
  const { getPrefixCls, getPopupContainer, notification, direction } = useContext(ConfigContext);
  const [, token] = useToken();

  const prefixCls = staticPrefixCls || getPrefixCls('notification');

  // =============================== Style ===============================
  const getStyle = (placement: NotificationPlacement): React.CSSProperties =>
    getPlacementStyle(placement, top ?? DEFAULT_OFFSET, bottom ?? DEFAULT_OFFSET);

  const getClassName = () => classnames({ [`${prefixCls}-rtl`]: rtl ?? direction === 'rtl' });

  // ============================== Motion ===============================
  const getNotificationMotion = () => getMotion(prefixCls);

  // ============================== Origin ===============================
  const [api, holder] = useRcNotification({
    prefixCls,
    style: getStyle,
    className: getClassName,
    motion: getNotificationMotion,
    closable: {
      closeIcon: getCloseIcon(prefixCls),
    },
    duration: duration ?? DEFAULT_DURATION,
    getContainer: () => staticGetContainer?.() || getPopupContainer?.() || document.body,
    maxCount,
    pauseOnHover,
    showProgress,
    onAllRemoved,
    renderNotifications,
    stack:
      stack === false
        ? false
        : {
            threshold: typeof stack === 'object' ? stack?.threshold : undefined,
            offset: 8,
            gap: token.margin,
          },
  });

  // ================================ Ref ================================
  React.useImperativeHandle(ref, () => ({ ...api, prefixCls, notification }));

  return holder;
});

if (process.env.NODE_ENV !== 'production') {
  Holder.displayName = 'Holder';
}

// ==============================================================================
// ==                                   Hook                                   ==
// ==============================================================================
export function useInternalNotification(
  notificationConfig?: HolderProps
): readonly [NotificationInstance, React.ReactElement] {
  const holderRef = React.useRef<HolderRef>(null);

  // ================================ API ================================
  const wrapAPI = React.useMemo<NotificationInstance>(() => {
    // Wrap with notification content

    // >>> Open
    const open = (config: ArgsProps) => {
      if (!holderRef.current) {
        return;
      }

      const { open: originOpen, prefixCls, notification } = holderRef.current;

      const noticePrefixCls = `${prefixCls}-notice`;

      const {
        message,
        description,
        icon,
        type,
        btn,
        actions,
        className,
        style,
        role = 'alert',
        closeIcon,
        closable,
        ...restConfig
      } = config;

      const mergedActions = actions ?? btn;

      const realCloseIcon = getCloseIcon(
        noticePrefixCls,
        getCloseIconConfig(closeIcon, notificationConfig, notification)
      );

      return originOpen({
        // use placement from props instead of hard-coding "topRight"
        placement: notificationConfig?.placement ?? DEFAULT_PLACEMENT,
        ...restConfig,
        content: (
          <PureContent
            prefixCls={noticePrefixCls}
            icon={icon}
            type={type}
            message={message}
            description={description}
            actions={mergedActions}
            role={role}
          />
        ),
        className: classnames(
          type && `${noticePrefixCls}-${type}`,
          className,
          notification?.className
        ),
        style: { ...notification?.style, ...style },
        closable: closable ?? !!realCloseIcon,
      });
    };

    // >>> destroy
    const destroy = (key?: React.Key) => {
      if (key !== undefined) {
        holderRef.current?.close(key);
      } else {
        holderRef.current?.destroy();
      }
    };

    const clone = {
      open,
      destroy,
    } as NotificationInstance;

    const keys = ['success', 'info', 'warning', 'error'] as const;
    keys.forEach(type => {
      clone[type] = config =>
        open({
          ...config,
          type,
        });
    });

    return clone;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ============================== Return ===============================
  return [
    wrapAPI,
    <Holder key="notification-holder" {...notificationConfig} ref={holderRef} />,
  ] as const;
}

export default function useNotification(notificationConfig?: NotificationConfig) {
  return useInternalNotification(notificationConfig);
}
