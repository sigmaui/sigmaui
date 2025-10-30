import React, { useState } from 'react';
import Button from '@sigma-ui-kit/button';
import Drawer from '@sigma-ui-kit/drawer';

const MultiLevel: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <>
      <Button variant="primary" onClick={showDrawer}>
        Open drawer
      </Button>
      <Drawer
        title="Multi-level drawer"
        width={520}
        closeIcon={false}
        onClose={onClose}
        open={open}
      >
        <Button variant="primary" onClick={showChildrenDrawer}>
          Two-level drawer
        </Button>
        <Drawer
          title="Two-level Drawer"
          width={320}
          closeIcon={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          This is two-level drawer
        </Drawer>
      </Drawer>
    </>
  );
};

export default MultiLevel;
