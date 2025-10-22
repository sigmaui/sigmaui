'use client';

import React from 'react';
import { useThemeMode } from '@sigma-ui-kit/theme';

export default function ThemeSwitcher() {
  const { changeThemeMode } = useThemeMode();

  const themes = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
    { value: 'system', label: 'System', icon: '🔄' },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-gray-700 [data-theme=dark]:text-gray-300">
        Theme:
      </span>
      <div className="flex bg-gray-100 [data-theme=dark]:bg-gray-800 rounded-lg p-1">
        {themes.map(theme => (
          <button key={theme.value} onClick={() => changeThemeMode(theme.value as any)}>
            <span>{theme.icon}</span>
            <span>{theme.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
