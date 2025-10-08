import { useState } from 'react';
import Drawer from '@sigmaui-kit/drawer';
import Button from '@sigmaui-kit/button';

export default function Demo() {
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
      <Button onClick={showDrawer}>Open drawer</Button>
      <Drawer
        title="Multi-level drawer"
        width={520}
        onClose={onClose}
        open={open}
      >
        <Button onClick={showChildrenDrawer}>Two-level drawer</Button>
        <Drawer
          title="Two-level Drawer"
          width={320}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          This is two-level drawer
        </Drawer>
      </Drawer>
    </>
  );
}
