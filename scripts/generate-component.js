#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const readline = require('readline');

function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .replace(/_/g, '-')
    .toLowerCase();
}

function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function write(filePath, contents) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, contents, 'utf8');
}

async function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function selectOption(question, options) {
  // Fallback to simple prompt if raw mode is not available
  if (!process.stdin.setRawMode) {
    console.log(question);
    options.forEach((option, index) => {
      console.log(`  ${index + 1}. ${option}`);
    });

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise(resolve => {
      rl.question('Chọn số (1-2): ', answer => {
        rl.close();
        const index = parseInt(answer) - 1;
        if (index >= 0 && index < options.length) {
          resolve(options[index]);
        } else {
          resolve(options[0]); // Default to first option
        }
      });
    });
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let selectedIndex = 0;

  function displayOptions() {
    process.stdout.write('\x1B[2J\x1B[0f'); // Clear screen
    console.log(question);
    options.forEach((option, index) => {
      const prefix = index === selectedIndex ? '●' : '○';
      let text = option;

      if (index === selectedIndex) {
        // selected → xanh dương + đậm
        text = '\x1b[34m\x1b[1m' + option + '\x1b[0m';
      }

      console.log(`${prefix} ${text}`);
    });
  }

  displayOptions();

  return new Promise(resolve => {
    const handleKeypress = (str, key) => {
      if (key.name === 'up') {
        selectedIndex = Math.max(0, selectedIndex - 1);
        displayOptions();
      } else if (key.name === 'down') {
        selectedIndex = Math.min(options.length - 1, selectedIndex + 1);
        displayOptions();
      } else if (key.name === 'return') {
        process.stdin.removeListener('keypress', handleKeypress);
        rl.close();
        resolve(options[selectedIndex]);
      }
    };

    process.stdin.on('keypress', handleKeypress);
    process.stdin.setRawMode(true);
    process.stdin.resume();
  });
}

async function main() {
  console.log('🚀 TDM UI Component Generator\n');

  // B1: Choose location with dropdown
  const scope = await selectOption('📁 Choose location (Use "↑↓" to select, "Enter" to confirm):', [
    'packages/components - Basic UI Components',
    'packages/blocks - Complex UI Blocks',
  ]);

  const selectedScope = scope.includes('components') ? 'components' : 'blocks';

  // B2: Enter package name kebab-case
  const kebabName = await prompt('📦 Enter package name (kebab-case, e.g.: input-number): ');
  if (!kebabName || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(kebabName)) {
    console.error(
      '❌ Package name must be kebab-case (lowercase letters, numbers and hyphens only)'
    );
    process.exit(1);
  }

  const pascalName = toPascalCase(kebabName);

  // B3: Enter description (optional)
  const description = await prompt('📝 Enter description (Enter to skip): ');
  const finalDescription =
    description || `TDM UI ${pascalName} ${selectedScope === 'blocks' ? 'block' : 'component'}`;

  const root = process.cwd();
  const pkgDir = path.join(root, 'packages', selectedScope, kebabName);
  if (fs.existsSync(pkgDir)) {
    console.error(`❌ Package already exists: ${pkgDir}`);
    process.exit(1);
  }

  console.log(`\n📋 Package information:`);
  console.log(`   📁 Location: packages/${selectedScope}/${kebabName}`);
  console.log(`   📦 Name: @sigma-ui-kit/${kebabName}`);
  console.log(`   📝 Description: ${finalDescription}`);
  console.log(`   🏷️  Component: ${pascalName}\n`);

  const confirm = await prompt(
    '✅ Do you want to create this package? ("y" or "Y" to confirm, "N" or "Enter" to cancel): '
  );
  if (!['y', 'yes', 'Y', 'YES'].includes(confirm)) {
    console.log('❌ Cancelled package creation');
    process.exit(0);
  }

  const pkgJson = {
    name: `@sigma-ui-kit/${kebabName}`,
    description: finalDescription,
    version: '0.0.0',
    private: false,
    source: './src/index.ts',
    main: './src/index.ts',
    module: './src/index.ts',
    publishConfig: {
      main: './dist/index.js',
      module: './dist/index.mjs',
      types: './dist/index.d.ts',
      exports: {
        '.': {
          import: { types: './dist/index.d.mts', default: './dist/index.mjs' },
          require: { types: './dist/index.d.ts', default: './dist/index.js' },
        },
      },
    },
    files: ['dist', 'README.md'],
    scripts: {
      build: 'tsup',
      clean: 'rm -rf dist',
      dev: 'tsup --watch',
      lint: 'eslint . --max-warnings 0 src',
      'check-types': 'tsc --noEmit',
    },
    dependencies: {
      '@sigma-ui-kit/theme': 'workspace:*',
    },
    peerDependencies: {
      '@types/react': '*',
      '@types/react-dom': '*',
      react: '^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc',
      'react-dom': '^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc',
    },
    peerDependenciesMeta: {
      '@types/react': { optional: true },
      '@types/react-dom': { optional: true },
    },
    license: 'MIT',
    repository: {
      type: 'git',
      url: 'https://github.com/your-org/sigma-ui-kit.git',
      directory: `packages/${selectedScope}/${kebabName}`,
    },
    keywords: ['react', 'ui', kebabName, 'sigma-ui-kit'],
  };

  const eslintrc = `{
  "extends": ["../../../.eslintrc.js"],
  "rules": {
  }
}
`;

  const npmignore = `# Source files
src/
tsconfig.json
tsup.config.ts

# Development files
node_modules/
*.log
.env*

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db
`;

  const tsconfig = `{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "outDir": "dist",
    "noEmit": false,
    "declaration": true,
    "declarationMap": true,
    "emitDeclarationOnly": true,
    "incremental": false
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
`;

  const tsup = `import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  banner: {
    js: '"use client";',
  },
});
`;

  // ${pascalName}.tsx
  const compTsx = `import React from 'react';

import type { ComponentForwardProps, withStyles } from '@sigma-ui-kit/theme';

import type { ClassKeys, ${pascalName}BaseProps } from './types';
import styles from './styles';

const ${pascalName}: React.FC<${pascalName}BaseProps & ComponentForwardProps<ClassKeys>> = props => {
  return <div {...props}>${pascalName}</div>;
};

${pascalName}.displayName = '${pascalName}';

export default withStyles(styles)(${pascalName});
`;

  // types.ts
  const types = `import type { WithStyleProps } from '@sigma-ui-kit/theme';

export type ClassKeys = 'root';

export interface ${pascalName}BaseProps {}

export type ${pascalName}Props = WithStyleProps<ClassKeys> & ${pascalName}BaseProps;
`;

  // styles.ts
  const styles = `import type { StyleFn } from '@sigma-ui-kit/theme';

import type { ${pascalName}Props, ClassKeys } from './types';

const styles: StyleFn<${pascalName}Props, ClassKeys> = props => {
  const { tokens } = props;
  return {
    root: {},
  };
};

export default styles;
`;

  // index.ts
  const index = `export { default } from './${kebabName}';
export type { ${pascalName}Props } from './types';
`;

  console.log('🔄 Đang tạo files...');

  write(path.join(pkgDir, 'package.json'), JSON.stringify(pkgJson, null, 2) + '\n');
  write(path.join(pkgDir, '.eslintrc.json'), eslintrc);
  write(path.join(pkgDir, '.npmignore'), npmignore);
  write(path.join(pkgDir, 'tsconfig.json'), tsconfig);
  write(path.join(pkgDir, 'tsup.config.ts'), tsup);
  write(path.join(pkgDir, 'src', 'types.ts'), types);
  write(path.join(pkgDir, 'src', 'styles.ts'), styles);
  write(path.join(pkgDir, 'src', `${kebabName}.tsx`), compTsx);
  write(path.join(pkgDir, 'src', 'index.ts'), index);

  console.log(`\n✅ Successfully created ${selectedScope} package: @sigma-ui-kit/${kebabName}`);
  console.log(`📁 Path: ${pkgDir}`);

  // Auto run pnpm install
  console.log(`\n🔄 Installing dependencies...`);
  const { execSync } = require('child_process');
  try {
    execSync('pnpm install', { stdio: 'inherit', cwd: root });

    // Add to docs app
    console.log(`📦 Adding to @sigma-ui-kit/docs...`);
    execSync(`pnpm add @sigma-ui-kit/${kebabName} --filter @sigma-ui-kit/docs --workspace`, {
      stdio: 'inherit',
      cwd: root,
    });

    // Add to csr-demo app
    console.log(`📦 Adding to @sigma-ui-kit/csr-demo...`);
    execSync(`pnpm add @sigma-ui-kit/${kebabName} --filter @sigma-ui-kit/csr-demo --workspace`, {
      stdio: 'inherit',
      cwd: root,
    });

    console.log(`✅ Dependencies installed successfully!`);
  } catch (error) {
    console.log(`⚠️  Error installing dependencies, please run: pnpm install`);
  }

  console.log(`\n🚀 Next steps:`);
  console.log(`   1. pnpm --filter @sigma-ui-kit/${kebabName} build`);
  console.log(`   2. Edit component in src/${kebabName}.tsx`);
  console.log(`   3. Component is already added to docs and csr-demo apps`);
  console.log(`   4. Test in apps/docs or apps/csr-demo\n`);
}

main();
