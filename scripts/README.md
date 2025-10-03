# Component Creation Script

This script automates the creation of new component packages in the SigmaUI library.

## Usage

```bash
node scripts/create-component.js <component-name> [parent-component]
```

## Examples

```bash
# Create a main component
node scripts/create-component.js drawer
node scripts/create-component.js card
node scripts/create-component.js date-picker

# Create a sub-component under an existing component
node scripts/create-component.js number input
node scripts/create-component.js password input
node scripts/create-component.js textarea input
```

## What it creates

For each component, the script creates:

### Main component structure

```
packages/react/src/components/<component-name>/
├── src/
│   ├── index.tsx      # Main component file
│   ├── styles.ts      # Styling definitions
│   └── types.ts       # TypeScript type definitions
├── package.json       # Package configuration
├── tsconfig.json      # TypeScript configuration
└── tsup.config.ts     # Build configuration

apps/react-app/docs/src/pages/components/<component-name>/
├── index.tsx          # Test page component
└── route.ts           # Route configuration
```

### Sub-component structure

```
packages/react/src/components/<parent-component>/<component-name>/
├── src/
│   ├── index.tsx      # Main component file
│   ├── styles.ts      # Styling definitions
│   └── types.ts       # TypeScript type definitions
├── package.json       # Package configuration (with parent as peer dependency)
├── tsconfig.json      # TypeScript configuration (correct extends path)
└── tsup.config.ts     # Build configuration
```

**Note:** Sub-components don't create test folders as they are typically tested within their parent component's test suite.

### Package.json features

**Main components:**

- Name: `@sigmaui-kit/<component-name>`
- Repository directory: `packages/react/components/<component-name>`
- Standard scripts for build, dev, clean, etc.
- Peer dependencies for React and SigmaUI packages

**Sub-components:**

- Name: `@sigmaui-kit/<component-name>`
- Repository directory: `packages/react/components/<parent-component>/<component-name>`
- Parent component as peer dependency
- Correct relative paths for scripts and configs (7 levels up for scripts, extends from parent tsconfig)

### TypeScript configuration

**Main components:**

- Extends the main tsconfig.json (`../../../tsconfig.json`)
- Includes src directory and index.ts

**Sub-components:**

- Extends from parent component's tsconfig.json (`../tsconfig.json`)
- Includes src directory and index.ts

### tsconfig.json path mapping

Automatically adds the new component to the paths section:

**Main components:**

```json
"@sigmaui-kit/<component-name>": [
  "packages/react/src/components/<component-name>/src"
]
```

**Sub-components:**

```json
"@sigmaui-kit/<component-name>": [
  "packages/react/src/components/<parent-component>/<component-name>/src"
]
```

### vite.config.ts alias

**Both main and sub-components** - automatically adds the new component alias to the resolve.alias section:

**Main components:**

```typescript
'@sigmaui-kit/<component-name>': path.resolve(__dirname, '../../../packages/react/src/components/<component-name>/src'),
```

**Sub-components:**

```typescript
'@sigmaui-kit/<component-name>': path.resolve(__dirname, '../../../packages/react/src/components/<parent-component>/<component-name>/src'),
```

### docs tsconfig.json path mapping

**Both main and sub-components** - automatically adds path mappings to the docs tsconfig.json:

**Main components:**

```json
"@sigmaui-kit/<component-name>": [
  "../../../packages/react/src/components/<component-name>/src"
]
```

**Sub-components:**

```json
"@sigmaui-kit/<component-name>": [
  "../../../packages/react/src/components/<parent-component>/<component-name>/src"
]
```

## Component naming rules

- Use kebab-case for component names (e.g., `date-picker`, `my-component`)
- Component names will be converted to PascalCase for React components (e.g., `date-picker` → `DatePicker`)
- Names must start with a letter and can contain letters, numbers, and hyphens
- Parent component must exist before creating sub-components

## Sub-component features

- **Automatic parent dependency**: Sub-components automatically include their parent as a peer dependency
- **Correct relative paths**: All script paths and config references are calculated correctly based on component depth
- **No test folders**: Sub-components don't create separate test folders as they're tested within their parent
- **Full alias support**: Sub-components get vite aliases and tsconfig path mappings just like main components
- **Complete config updates**: Updates both main tsconfig.json and docs tsconfig.json with correct paths

## Generated component template

The script generates a basic component template with:

- React functional component with TypeScript
- SigmaUI styling system integration
- Proper prop types and exports
- Display name for debugging

You can then customize the component according to your specific needs.
