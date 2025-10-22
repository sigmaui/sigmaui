# React Test App - Sigma Theme System

Ứng dụng React test để kiểm tra Sigma Theme System với client-side rendering.

## 🚀 Tính năng

- ✅ **Live Theme Switching**: Chuyển đổi theme real-time
- ✅ **Device Detection**: Tự động phát hiện và chuyển đổi device
- ✅ **CSS Variables**: Hiển thị CSS variables được tạo tự động
- ✅ **Component Preview**: Xem trước các component với theme hiện tại
- ✅ **Performance Test**: Kiểm tra hiệu suất chuyển đổi theme
- ✅ **Responsive Design**: Thiết kế responsive với device-specific themes

## 📦 Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

## 🎯 Cách sử dụng

1. **Theme Mode Switching**: Sử dụng các nút Light/Dark/Auto để chuyển đổi theme mode
2. **Device Detection**: Sử dụng các nút Mobile/Tablet/Desktop để test device-specific themes
3. **Performance Test**: Click "Toggle Theme Mode" để test hiệu suất chuyển đổi
4. **CSS Variables**: Xem CSS variables được tạo tự động trong phần "CSS Variables Demo"

## 🔧 Cấu hình

App sử dụng theme configuration từ `src/App.tsx`:

```tsx
const customTheme = {
  tokens: {
    /* theme tokens */
  },
  modeConfig: {
    /* light/dark modes */
  },
  deviceConfig: {
    /* mobile/tablet/desktop configs */
  },
};
```

## 📱 Responsive Testing

- **Mobile**: < 768px - Smaller spacing và typography
- **Tablet**: 768px - 1024px - Medium spacing
- **Desktop**: > 1024px - Full spacing và typography

## 🎨 Theme Features

- **Multi-mode support**: Light, Dark, Auto
- **Device-specific themes**: Mobile, Tablet, Desktop
- **CSS Variables**: Tự động tạo CSS variables
- **Live switching**: Chuyển đổi theme không cần reload
- **Performance optimized**: Cache và lazy loading

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## 📁 Cấu trúc

```
src/
├── components/
│   ├── Button.tsx          # Button component với theme
│   ├── Card.tsx            # Card component với theme
│   ├── ThemeSwitcher.tsx   # Theme mode switcher
│   ├── DeviceDetector.tsx  # Device detector
│   └── ThemePreview.tsx    # Theme preview component
├── App.tsx                 # Main app với theme provider
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## 🔗 Links

- [Sigma Theme System](../../packages/theme/)
- [Documentation](../../packages/theme/README.md)
