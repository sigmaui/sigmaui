import { useThemeMode } from './ThemeModeProvider';

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
        {themes.map(themeMode => (
          <button key={themeMode.value} onClick={() => changeThemeMode(themeMode.value as any)}>
            <span>{themeMode.icon}</span>
            <span>{themeMode.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
