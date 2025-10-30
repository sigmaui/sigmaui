'use client';

import React, { useState } from 'react';
import Input, { InputPassword } from '@sigma-ui-kit/input';
import EmailOutlinedIcon from '@sigma-ui-kit/icons/EmailOutlinedIcon';
import ShuffleIcon from '@sigma-ui-kit/icons/ShuffleIcon';
import UserOutlinedIcon from '@sigma-ui-kit/icons/UserOutlinedIcon';

export default function InputPage() {
  const [value, setValue] = useState('Default value');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 10 }}>
      <div style={{ display: 'flex', gap: 10 }}>
        <Input placeholder="Enter text..." />
        <Input placeholder="Enter text..." prefix={<UserOutlinedIcon />} />
        <Input placeholder="Enter text..." prefix={<span style={{ fontSize: 16 }}>$</span>} />
        <Input placeholder="Enter text..." suffix={<ShuffleIcon />} />
      </div>

      <InputPassword />
      <Input placeholder="Enter text..." />
      <Input suffix={<EmailOutlinedIcon />} placeholder="Enter text..." disabled />
      <Input
        prefix={<EmailOutlinedIcon />}
        value={value}
        suffix={<EmailOutlinedIcon />}
        placeholder="Enter text..."
        count={{ max: 20 }}
        onChange={handleChange}
      />
      <Input
        prefix={<EmailOutlinedIcon />}
        value={value}
        suffix={<EmailOutlinedIcon />}
        placeholder="Enter text..."
        status="error"
        onChange={handleChange}
      />
    </div>
  );
}
