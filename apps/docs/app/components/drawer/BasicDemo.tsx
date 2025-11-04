import React, { useState } from 'react';
import Button from '@sigma-ui-kit/button';
import Drawer from '@sigma-ui-kit/drawer';
import Tooltip from '@sigma-ui-kit/tooltip';
import Modal from '@sigma-ui-kit/modal/src/Modal';
import { Dialog } from '@sigma-ui-kit/modal';

const BasicDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer" // closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default BasicDemo;
