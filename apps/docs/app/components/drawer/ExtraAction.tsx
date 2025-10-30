import React, { useState } from 'react';
import Button from '@sigma-ui-kit/button';
import Drawer, { type DrawerProps } from '@sigma-ui-kit/drawer';

const ExtraAction: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const showDrawer = () => {
    setOpen(true);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlacement(e.target.value as DrawerProps['placement']);
  };

  const onClose: DrawerProps['onClose'] = () => {
    setOpen(false);
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
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <div>
            <Button onClick={onClose}>Cancel</Button>
            <Button variant="primary" onClick={onClose}>
              OK
            </Button>
          </div>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default ExtraAction;
