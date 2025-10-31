'use client';

import * as React from 'react';
// Import demo icons from @sigma-ui-kit/icons package via path exports
import AddressBookOutlinedIcon from '@sigma-ui-kit/icons/AddressBookOutlinedIcon';
import BellOutlineIcon from '@sigma-ui-kit/icons/BellOutlineIcon';
import ChevronDownSingleIcon from '@sigma-ui-kit/icons/ChevronDownSingleIcon';
import CloseFilledIcon from '@sigma-ui-kit/icons/CloseFilledIcon';
import CopyOutlinedIcon from '@sigma-ui-kit/icons/CopyOutlinedIcon';
import EmailOutlinedIcon from '@sigma-ui-kit/icons/EmailOutlinedIcon';
import ExternalLinkIcon from '@sigma-ui-kit/icons/ExternalLinkIcon';
import FileTextOutlinedIcon from '@sigma-ui-kit/icons/FileTextOutlinedIcon';
import LockFilledIcon from '@sigma-ui-kit/icons/LockFilledIcon';
import SearchOutlinedIcon from '@sigma-ui-kit/icons/SearchOutlinedIcon';
import ShieldOutlinedIcon from '@sigma-ui-kit/icons/ShieldOutlinedIcon';
import UserOutlinedIcon from '@sigma-ui-kit/icons/UserOutlinedIcon';

const ICONS = [
  { name: 'AddressBookOutlinedIcon', Comp: AddressBookOutlinedIcon },
  { name: 'BellOutlineIcon', Comp: BellOutlineIcon },
  { name: 'ChevronDownSingleIcon', Comp: ChevronDownSingleIcon },
  { name: 'CloseFilledIcon', Comp: CloseFilledIcon },
  { name: 'CopyOutlinedIcon', Comp: CopyOutlinedIcon },
  { name: 'EmailOutlinedIcon', Comp: EmailOutlinedIcon },
  { name: 'ExternalLinkIcon', Comp: ExternalLinkIcon },
  { name: 'FileTextOutlinedIcon', Comp: FileTextOutlinedIcon },
  { name: 'LockFilledIcon', Comp: LockFilledIcon },
  { name: 'SearchOutlinedIcon', Comp: SearchOutlinedIcon },
  { name: 'ShieldOutlinedIcon', Comp: ShieldOutlinedIcon },
  { name: 'UserOutlinedIcon', Comp: UserOutlinedIcon },
];

export default function IconDemoPage() {
  const [size, setSize] = React.useState<number>(24);
  const [color, setColor] = React.useState<string>('#1f2937');
  const [spin, setSpin] = React.useState<boolean>(false);

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Icons</h1>
      <p style={{ color: '#6b7280', marginBottom: 16 }}>
        Icons are exported by path from <code>@sigma-ui-kit/icons</code>, for example:
        <code style={{ marginLeft: 8 }}>
          import SearchOutlinedIcon from &apos;@sigma-ui-kit/icons/SearchOutlinedIcon&apos;
        </code>
      </p>

      <div
        style={{
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: 24,
        }}
      >
        <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>Size:</span>
          <input
            type="range"
            min={12}
            max={64}
            value={size}
            onChange={e => setSize(parseInt(e.target.value, 10))}
          />
          <span>{size}px</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>Color:</span>
          <input type="color" value={color} onChange={e => setColor(e.target.value)} />
          <span>{color}</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" checked={spin} onChange={e => setSpin(e.target.checked)} />
          <span>Spin</span>
        </label>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 16,
        }}
      >
        {ICONS.map(({ name, Comp }) => (
          <div
            key={name}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 8,
              padding: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Comp style={{ fontSize: size, color }} spin={spin} aria-label={name} />
            <code style={{ fontSize: 12, color: '#6b7280', textAlign: 'center' }}>{name}</code>
          </div>
        ))}
      </div>
    </div>
  );
}
