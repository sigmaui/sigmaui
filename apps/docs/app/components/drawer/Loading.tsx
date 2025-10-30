import React from 'react';
import Button from '@sigma-ui-kit/button';
import Drawer from '@sigma-ui-kit/drawer';

const Loading: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Button variant="primary" onClick={showLoading}>
        Open Drawer
      </Button>
      <Drawer
        destroyOnHidden
        title={<p>Loading Drawer</p>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        <Button variant="primary" styles={{ wrapper: { marginBottom: 16 } }} onClick={showLoading}>
          Reload
        </Button>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Loading;
