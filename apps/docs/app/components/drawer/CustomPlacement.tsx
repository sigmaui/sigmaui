import React, { useState } from 'react';
import Button from '@sigma-ui-kit/button';
import Drawer, { type DrawerProps } from '@sigma-ui-kit/drawer';

const CustomPlacement: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlacement(e.target.value as DrawerProps['placement']);
  };

  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            name="placement"
            value="top"
            checked={placement === 'top'}
            onChange={onChange}
          />
          top
        </label>

        <label>
          <input
            type="radio"
            name="placement"
            value="right"
            checked={placement === 'right'}
            onChange={onChange}
          />
          right
        </label>

        <label>
          <input
            type="radio"
            name="placement"
            value="bottom"
            checked={placement === 'bottom'}
            onChange={onChange}
          />
          bottom
        </label>

        <label>
          <input
            type="radio"
            name="placement"
            value="left"
            checked={placement === 'left'}
            onChange={onChange}
          />
          left
        </label>

        <Button variant="primary" onClick={showDrawer}>
          Open
        </Button>
      </div>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closeIcon={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default CustomPlacement;
