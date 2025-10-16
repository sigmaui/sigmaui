# TDM UI

A modern React component library built with TypeScript, featuring a monorepo architecture powered by pnpm and Turborepo.

## 📋 Table of Contents

- [System Requirements](#system-requirements)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Components](#components)
- [Development](#development)
- [Building](#building)
- [Publishing](#publishing)

## 🔧 System Requirements

Before getting started, ensure you have the following installed:

### Required Versions

- **Node.js**: `>= 18.0.0`
- **pnpm**: `>= 9.0.0`
- **npm**: `>= 8.0.0` (alternative to pnpm)

### Installation

```bash
# Install Node.js (recommended: use nvm)
nvm install 18
nvm use 18

# Install pnpm
npm install -g pnpm@9.0.0

# Verify installations
node --version  # Should be >= 18.0.0
pnpm --version  # Should be >= 9.0.0
```

## 🚀 Getting Started

### 1. Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd sigma-ui-kit

# Install dependencies
pnpm install
```

### 2. Development

```bash
# Start development servers for all packages
pnpm dev

# Start specific app
pnpm --filter @sigma-ui-kit/docs dev
```

### 3. Build

```bash
# Build all packages
pnpm build

# Build specific package
pnpm --filter @sigma-ui-kit/button build
```

## 📁 Project Structure

```
sigma-ui-kit/
├── apps/
│   └── docs/                 # Documentation app (Next.js)
├── packages/
│   ├── components/           # Basic UI components
│   │   ├── button/          # Button component
│   │   ├── input/           # Input component
│   │   ├── badge/           # Badge component
│   │   └── switch/          # Switch component
│   ├── blocks/              # Complex UI blocks
│   │   ├── input-number/    # Number input block
│   │   └── input-password/  # Password input block
│   ├── icons/               # Icon components
│   └── theme/               # Theme system
├── scripts/                 # Utility scripts
│   ├── generate-component.js
│   ├── generate-icon.js
│   ├── delete-component.js
│   └── clean.js
└── package.json
```

## 🛠 Scripts

### Component Management

#### Create New Component

```bash
# Interactive component generator
pnpm generate:component
```

**Steps:**

1. Choose location: `components` or `blocks`
2. Enter package name (kebab-case): `my-component`
3. Enter description (optional)
4. Confirm creation

**Generated files:**

- `package.json` - Package configuration
- `src/index.ts` - Export file
- `src/types.ts` - TypeScript types
- `src/my-component.tsx` - Component implementation
- `tsconfig.json` - TypeScript config
- `tsup.config.ts` - Build configuration
- `.eslintrc.json` - ESLint config
- `.npmignore` - NPM ignore rules

#### Delete Component

```bash
# Interactive component deleter
pnpm delete:component
```

**Steps:**

1. Choose location: `components` or `blocks`
2. Select component from dropdown list
3. Confirm deletion
4. Auto-updates dependencies

#### Create New Icon

```bash
# Interactive icon generator
pnpm generate:icon
```

**Steps:**

1. Enter icon name (PascalCase): `HomeIcon`
2. Confirm creation
3. Edit SVG path in generated file

### Maintenance

#### Clean Dependencies

```bash
# Clean all build artifacts and dependencies
pnpm clean
```

**What it removes:**

- `node_modules/` directories
- `dist/` build outputs
- `.next/` Next.js cache
- `.turbo/` Turbo cache

**Steps:**

1. Scans for directories to delete
2. Shows total size and count
3. Confirms before deletion
4. Provides next steps

### Development

```bash
# Run development servers
pnpm dev

# Run linting
pnpm lint

# Check TypeScript types
pnpm check-types

# Format code
pnpm format
```

### Building

```bash
# Build all packages
pnpm build

# Build specific package
pnpm --filter @sigma-ui-kit/button build

# Watch mode for development
pnpm --filter @sigma-ui-kit/button dev
```

## 🧩 Components

### Component Types

#### Basic Components (`packages/components/`)

Simple, reusable UI components:

- **Button** - Interactive button with variants
- **Input** - Text input with validation
- **Badge** - Status indicators
- **Switch** - Toggle controls

#### Complex Blocks (`packages/blocks/`)

Advanced UI blocks with multiple components:

- **InputNumber** - Number input with controls
- **InputPassword** - Password input with visibility toggle

#### Icons (`packages/icons/`)

SVG icon components:

- **XMarkIcon** - Close/cancel icon
- Add more icons using `pnpm generate:icon`

### Using Components

```tsx
// Import individual components
import { Button } from '@sigma-ui-kit/button';
import { Input } from '@sigma-ui-kit/input';
import { XMarkIcon } from '@sigma-ui-kit/icons/XMarkIcon';

// Use in your app
function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text..." />
      <XMarkIcon size={24} />
    </div>
  );
}
```

### Component Development

1. **Create component**: `pnpm generate:component`
2. **Edit component**: Modify files in `src/`
3. **Build**: `pnpm --filter @sigma-ui-kit/your-component build`
4. **Test**: Add to `apps/docs` for testing

## 🔨 Development

### Local Development

```bash
# Start all development servers
pnpm dev

# Start specific app
pnpm --filter @sigma-ui-kit/docs dev

# Watch specific component
pnpm --filter @sigma-ui-kit/button dev
```

### Testing Components

1. Add component to `apps/docs/app/page.tsx`
2. Import and use the component
3. Run `pnpm --filter @sigma-ui-kit/docs dev`
4. View at `http://localhost:3001`

### Code Quality

```bash
# Lint all packages
pnpm lint

# Check TypeScript errors
pnpm check-types

# Format code with Prettier
pnpm format
```

## 📦 Building

### Build All Packages

```bash
pnpm build
```

### Build Individual Packages

```bash
# Build specific component
pnpm --filter @sigma-ui-kit/button build

# Build docs app
pnpm --filter @sigma-ui-kit/docs build
```

### Build Outputs

Each package builds to:

- `dist/index.js` - CommonJS format
- `dist/index.mjs` - ES Module format
- `dist/index.d.ts` - TypeScript declarations

## 📤 Publishing

This repository uses Changesets to manage versions and publish packages.

### ✅ One-time checklist

- Root `package.json`: `"private": true`
- App `apps/docs/package.json`: `"private": true` (apps are not published)
- Each publishable package `package.json` contains:
  ```json
  {
    "publishConfig": { "access": "public" },
    "prepublishOnly": "pnpm build"
  }
  ```
- Logged in to npm: `npm whoami`

### 🚀 Release flow (Changesets)

1. Create a changeset

   ```bash
   pnpm changeset
   ```

   - Select packages, choose bump types (major/minor/patch), write a short summary.

2. Apply version updates

   ```bash
   pnpm changeset version
   git add .
   git commit -m "chore: release"
   ```

   - Updates versions and changelogs across affected packages.

3. Publish changed packages

   ```bash
   pnpm changeset publish
   ```

   - Builds and publishes only changed packages, honoring `publishConfig.access`.

### 🔎 Useful commands

- Filter a single package:
  ```bash
  pnpm --filter @sigma-ui-kit/theme changeset publish
  ```
- Dry run publish:
  ```bash
  pnpm changeset publish --no-git-tag --snapshot
  ```

### 🧰 Troubleshooting publishing

- E402 Payment Required (scoped private): ensure `publishConfig.access` is `"public"` and your scope allows public packages.
- E403 Cannot publish over previously published version: bump the version (use a new patch/minor/major via Changesets).
- Builds missing: add `"prepublishOnly": "pnpm build"` in each publishable package.

## 🐛 Troubleshooting

### Common Issues

1. **Node version mismatch**

   ```bash
   # Check Node version
   node --version
   # Should be >= 18.0.0
   ```

2. **pnpm version issues**

   ```bash
   # Update pnpm
   npm install -g pnpm@latest
   ```

3. **Build failures**

   ```bash
   # Clean and reinstall
   pnpm clean
   pnpm install
   pnpm build
   ```

4. **TypeScript errors**
   ```bash
   # Check types
   pnpm check-types
   ```

### Getting Help

1. Check console output for specific error messages
2. Ensure all system requirements are met
3. Try cleaning and reinstalling dependencies
4. Check component imports and exports

## 📚 Additional Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [pnpm Documentation](https://pnpm.io/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

---

**Happy coding! 🎉**
