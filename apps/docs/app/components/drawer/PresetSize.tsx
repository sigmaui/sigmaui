import React, { useState } from 'react';
import Button from '@sigma-ui-kit/button';
import Drawer, { type DrawerProps } from '@sigma-ui-kit/drawer';
import Box from '@sigma-ui-kit/box';

const PresetSize: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps['size']>();

  const showDefaultDrawer = () => {
    setSize('default');
    setOpen(true);
  };

  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Button variant="primary" onClick={showDefaultDrawer}>
          Open Default Size (378px)
        </Button>
        <Button variant="primary" onClick={showLargeDrawer}>
          Open Large Size (736px)
        </Button>
      </Box>
      <Drawer
        title={`${size} Drawer`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Box>
            <Button onClick={onClose}>Cancel</Button>
            <Button variant="primary" onClick={onClose}>
              OK
            </Button>
          </Box>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default PresetSize;
