import React, { useState } from 'react';
import Button from '@sigma-ui-kit/button';
import Modal from '@sigma-ui-kit/modal';
import Tooltip from '@sigma-ui-kit/tooltip';
import Input from '@sigma-ui-kit/input';

const BasicContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    console.log(123);
    setIsModalOpen(false);
  };

  console.log(isModalOpen);

  return (
    <>
      <Tooltip title="Open Modal">
        <Button variant="primary" onClick={showModal}>
          Open Modal
        </Button>
      </Tooltip>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
const Basic: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button variant="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        mask
        onCancel={handleCancel}
        centered
      >
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 'calc(50% - 10px)' }}
          >
            <p>Some contents...</p>
            <Input placeholder="Enter text..." />
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 'calc(50% - 10px)' }}
          >
            <p>Some contents...</p>
            <Input placeholder="Enter text..." />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <p>Some contents...</p>
            <Input placeholder="Enter text..." />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <p>Some contents...</p>
            <Input placeholder="Enter text..." />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <p>Some contents...</p>
            <Input placeholder="Enter text..." />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <p>Some contents...</p>
            <Input placeholder="Enter text..." />
          </div>
        </div>

        <BasicContent />
      </Modal>
    </>
  );
};

export default Basic;
