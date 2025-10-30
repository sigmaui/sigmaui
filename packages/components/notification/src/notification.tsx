import React from 'react';

import type { ComponentForwardProps, withStyles } from '@sigma-ui-kit/theme';

import type { ClassKeys, NotificationBaseProps } from './types';
import styles from './styles';

const Notification: React.FC<NotificationBaseProps & ComponentForwardProps<ClassKeys>> = props => {
  return <div {...props}>Notification</div>;
};

Notification.displayName = 'Notification';

export default withStyles(styles)(Notification);
