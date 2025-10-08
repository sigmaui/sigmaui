#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Script to automate the creation of new component packages
 * Usage: node scripts/create-component.js <component-name> [parent-component]
 * Examples:
 *   node scripts/create-component.js drawer
 *   node scripts/create-component.js number input
 *   node scripts/create-component.js password input
 */

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createComponentPackage(componentName, parentComponent = null) {
  // Determine if this is a sub-component
  const isSubComponent = parentComponent !== null;

  // Calculate paths based on whether it's a sub-component
  let basePath, tsconfigPath, viteConfigPath;

  if (isSubComponent) {
    // Sub-component path: packages/react/src/components/parent/child/
    basePath = path.join(
      __dirname,
      '..',
      'packages',
      'react',
      'src',
      'components',
      parentComponent,
      componentName,
    );
  } else {
    // Main component path: packages/react/src/components/child/
    basePath = path.join(
      __dirname,
      '..',
      'packages',
      'react',
      'src',
      'components',
      componentName,
    );
  }

  const srcPath = path.join(basePath, 'src');
  tsconfigPath = path.join(__dirname, '..', 'tsconfig.json');
  viteConfigPath = path.join(
    __dirname,
    '..',
    'apps',
    'react-app',
    'docs',
    'vite.config.ts',
  );

  // Create directories
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
  }

  if (!fs.existsSync(srcPath)) {
    fs.mkdirSync(srcPath, { recursive: true });
  }

  // Calculate script paths based on component depth
  let prepublishPath, postpublishPath, cleanPackagePath, repositoryDirectory;

  if (isSubComponent) {
    // Sub-component: needs more ../ to reach scripts
    // From: packages/react/src/components/parent/child/
    // To: scripts/ (need 7 levels up: child -> parent -> components -> src -> react -> packages -> root)
    prepublishPath = 'node ../../../../../../scripts/prepublish.js';
    postpublishPath = 'node ../../../../../../scripts/postpublish.js';
    cleanPackagePath = '../../../../../../clean-package.config.json';
    repositoryDirectory = `packages/react/components/${parentComponent}/${componentName}`;
  } else {
    // Main component
    prepublishPath = 'node ../../../../../scripts/prepublish.js';
    postpublishPath = 'node ../../../../../scripts/postpublish.js';
    cleanPackagePath = '../../../../../clean-package.config.json';
    repositoryDirectory = `packages/react/components/${componentName}`;
  }

  // Template files content
  const packageJsonContent = {
    name: `@sigmaui-kit/${componentName}`,
    version: '0.0.1',
    description: '',
    keywords: [],
    author: '',
    homepage: 'https://sigmaui.org',
    license: 'MIT',
    main: 'src/index.ts',
    sideEffects: false,
    files: ['dist'],
    publishConfig: {
      access: 'public',
    },
    repository: {
      type: 'git',
      url: 'git+https://github.com/sigmaui/sigmaui.git',
      directory: repositoryDirectory,
    },
    scripts: {
      setup: 'yarn install',
      build: 'tsup src --dts',
      dev: 'pnpm build:fast --watch',
      clean: 'rimraf dist .turbo',
      typecheck: 'tsc --noEmit',
      'build:fast': 'tsup src',
      prepack: 'clean-package',
      postpack: 'clean-package restore',
      prepublishOnly: prepublishPath,
      postpublish: postpublishPath,
    },
    dependencies: {},
    peerDependencies: {
      react: '>=18',
      classnames: 'latest',
      '@sigmaui-kit/types': 'latest',
      '@sigmaui-kit/with-styles': 'latest',
    },
    devDependencies: {},
    'clean-package': cleanPackagePath,
  };

  // Add parent component as peer dependency if this is a sub-component
  if (isSubComponent) {
    packageJsonContent.peerDependencies[`@sigmaui-kit/${parentComponent}`] =
      'latest';
  }

  // Calculate tsconfig extends path based on component depth
  let tsconfigExtends;
  if (isSubComponent) {
    // Sub-component: should extend from parent component's tsconfig.json
    // From: packages/react/src/components/parent/child/
    // To: parent component's tsconfig.json (need 1 level up: child -> parent)
    tsconfigExtends = '../tsconfig.json';
  } else {
    // Main component: extends from root tsconfig.json
    tsconfigExtends = '../../../tsconfig.json';
  }

  const tsconfigContent = {
    extends: tsconfigExtends,
    include: ['src', 'index.ts'],
  };

  const tsupConfigContent = `import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  minify: true,
  target: 'es2019',
  format: ['cjs', 'esm'],
  esbuildOptions(options) {
    options.drop = ['console'];
  },
});
`;

  // Convert kebab-case to PascalCase for component name
  const componentNamePascal = componentName
    .split('-')
    .map((word) => capitalizeFirst(word))
    .join('');

  const indexTsxContent = `import React from 'react';
import type { FC } from 'react';
import { withStyles } from '@sigmaui-kit/with-styles';

import { type ${componentNamePascal}Props, styles } from './styles';

export type { ${componentNamePascal}Props };

const ${componentNamePascal}: FC<${componentNamePascal}Props> = ({
  prefixCls,
  className,
  children,
  classes,
  ...restProps
}) => {
  return (
    <div
      className={classes?.wrapper}
      {...restProps}
    >
      {children}
    </div>
  );
};

${componentNamePascal}.displayName = '${componentNamePascal}';

export default withStyles<${componentNamePascal}Props>(styles)(${componentNamePascal});
`;

  const stylesTsContent = `import { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper';

export const styles = ({ theme = {} }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  return {
    wrapper: {
      display: 'block',
    },
  };
};

export type ${componentNamePascal}Types = ReturnType<typeof styles>;
export type ${componentNamePascal}Keys = keyof ${componentNamePascal}Types;

export type ${componentNamePascal}Props = IProps<${componentNamePascal}Types>;
`;

  const typesTsContent = `import type { HTMLAttributes } from 'react';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';

export type { StylesProperties };

export interface IProps<Styles> extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>, FCWithStylesProps<Styles> {
  // Add component-specific props here
}
`;

  // Write files
  fs.writeFileSync(
    path.join(basePath, 'package.json'),
    JSON.stringify(packageJsonContent, null, 2),
  );

  fs.writeFileSync(
    path.join(basePath, 'tsconfig.json'),
    JSON.stringify(tsconfigContent, null, 2),
  );

  fs.writeFileSync(path.join(basePath, 'tsup.config.ts'), tsupConfigContent);

  fs.writeFileSync(path.join(srcPath, 'index.tsx'), indexTsxContent);

  fs.writeFileSync(path.join(srcPath, 'styles.ts'), stylesTsContent);

  fs.writeFileSync(path.join(srcPath, 'types.ts'), typesTsContent);

  // Create test folder structure (only for main components, not sub-components)
  if (!isSubComponent) {
    createTestFolder(componentName);
    createParentDocs(componentName);
    updateRouteMap(componentName);
  }

  // Update tsconfig.json paths
  updateTsconfigPaths(
    componentName,
    tsconfigPath,
    isSubComponent,
    parentComponent,
  );

  // Update docs tsconfig.json paths
  updateDocsTsconfigPaths(componentName, isSubComponent, parentComponent);

  // Update vite.config.ts alias for both main and sub-components
  updateViteAlias(
    componentName,
    viteConfigPath,
    isSubComponent,
    parentComponent,
  );

  // If sub-component, generate its docs and update parent's docs index and mdx
  if (isSubComponent && parentComponent) {
    createChildDocs(parentComponent, componentName);
    updateParentDocsIndexAndMdx(parentComponent, componentName);
  }

  if (isSubComponent) {
    console.log(
      `✅ Successfully created sub-component: ${componentName} under ${parentComponent}`,
    );
  } else {
    console.log(`✅ Successfully created component package: ${componentName}`);
  }
  console.log(`📁 Location: ${basePath}`);
  console.log(`📦 Package name: @sigmaui-kit/${componentName}`);
  console.log(`🔗 Updated tsconfig.json with new path mapping`);
  console.log(`📝 Updated docs tsconfig.json with new path mapping`);
  console.log(`⚡ Updated vite.config.ts with new alias`);
  if (!isSubComponent) {
    console.log(`🧪 Created test folder structure`);
  }
}

function createTestFolder(componentName) {
  try {
    const testBasePath = path.join(
      __dirname,
      '..',
      'apps',
      'react-app',
      'docs',
      'src',
      'pages',
      'components',
      componentName,
    );

    // Create test directory
    if (!fs.existsSync(testBasePath)) {
      fs.mkdirSync(testBasePath, { recursive: true });
    }

    // Convert kebab-case to PascalCase for component name
    const componentNamePascal = componentName
      .split('-')
      .map((word) => capitalizeFirst(word))
      .join('');

    // Create index.tsx for test page
    const testIndexContent = `import DocPage from '@docs/components/layout/DocPage';
import ${componentNamePascal}Mdx from '@docs/content/docs/components/${componentName}.mdx';

console.log('${componentNamePascal}Mdx', ${componentNamePascal}Mdx);

const ${componentNamePascal}Page = ({}) => {
  return (
    <DocPage>
      <${componentNamePascal}Mdx />
    </DocPage>
  );
};

export default ${componentNamePascal}Page;
`;

    // Create route.ts for test page
    const testRouteContent = `import { routeMap } from '@docs/router/routeMap';

export default {
  name: 'page-${componentName}',
  path: routeMap.component['${componentName}'],
  lazy: () => import('./index'),
};
`;

    // Write test files
    fs.writeFileSync(path.join(testBasePath, 'index.tsx'), testIndexContent);

    fs.writeFileSync(path.join(testBasePath, 'route.ts'), testRouteContent);

    console.log(`📁 Created test folder: ${testBasePath}`);
  } catch (error) {
    console.error('❌ Error creating test folder:', error.message);
  }
}

function updateTsconfigPaths(
  componentName,
  tsconfigPath,
  isSubComponent = false,
  parentComponent = null,
) {
  try {
    const tsconfigContent = fs.readFileSync(tsconfigPath, 'utf8');
    const tsconfig = JSON.parse(tsconfigContent);

    // Calculate the correct path based on whether it's a sub-component
    let componentPath;
    if (isSubComponent && parentComponent) {
      componentPath = `packages/react/src/components/${parentComponent}/${componentName}/src`;
    } else {
      componentPath = `packages/react/src/components/${componentName}/src`;
    }

    // Add new path mapping
    const newPathMapping = {
      [`@sigmaui-kit/${componentName}`]: [componentPath],
    };

    // Insert the new mapping in alphabetical order
    const paths = tsconfig.compilerOptions.paths;
    const sortedKeys = Object.keys(newPathMapping).sort();

    for (const key of sortedKeys) {
      paths[key] = newPathMapping[key];
    }

    // Sort all paths alphabetically
    const sortedPaths = {};
    Object.keys(paths)
      .sort()
      .forEach((key) => {
        sortedPaths[key] = paths[key];
      });

    tsconfig.compilerOptions.paths = sortedPaths;

    fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
    console.log(
      `📝 Updated tsconfig.json with path mapping for @sigmaui-kit/${componentName}`,
    );
  } catch (error) {
    console.error('❌ Error updating tsconfig.json:', error.message);
  }
}

function updateDocsTsconfigPaths(
  componentName,
  isSubComponent,
  parentComponent,
) {
  try {
    const docsTsconfigPath = path.join(
      __dirname,
      '..',
      'apps',
      'react-app',
      'docs',
      'tsconfig.json',
    );

    const docsTsconfigContent = fs.readFileSync(docsTsconfigPath, 'utf8');
    const docsTsconfig = JSON.parse(docsTsconfigContent);

    // Calculate the correct path based on whether it's a sub-component
    let componentPath;
    if (isSubComponent && parentComponent) {
      componentPath = `../../../packages/react/src/components/${parentComponent}/${componentName}/src`;
    } else {
      componentPath = `../../../packages/react/src/components/${componentName}/src`;
    }

    // Add new path mapping
    const newPathMapping = {
      [`@sigmaui-kit/${componentName}`]: [componentPath],
    };

    // Insert the new mapping in alphabetical order
    const paths = docsTsconfig.compilerOptions.paths;
    const sortedKeys = Object.keys(newPathMapping).sort();

    for (const key of sortedKeys) {
      paths[key] = newPathMapping[key];
    }

    // Sort all paths alphabetically
    const sortedPaths = {};
    Object.keys(paths)
      .sort()
      .forEach((key) => {
        sortedPaths[key] = paths[key];
      });

    docsTsconfig.compilerOptions.paths = sortedPaths;

    fs.writeFileSync(docsTsconfigPath, JSON.stringify(docsTsconfig, null, 2));
    console.log(
      `📝 Updated docs tsconfig.json with path mapping for @sigmaui-kit/${componentName}`,
    );
  } catch (error) {
    console.error('❌ Error updating docs tsconfig.json:', error.message);
  }
}

function updateViteAlias(
  componentName,
  viteConfigPath,
  isSubComponent = false,
  parentComponent = null,
) {
  try {
    const viteConfigContent = fs.readFileSync(viteConfigPath, 'utf8');

    // Calculate the correct path based on whether it's a sub-component
    let componentPath;
    if (isSubComponent && parentComponent) {
      componentPath = `../../../packages/react/src/components/${parentComponent}/${componentName}/src`;
    } else {
      componentPath = `../../../packages/react/src/components/${componentName}/src`;
    }

    // Create the new alias line
    const newAlias = `        '@sigmaui-kit/${componentName}': path.resolve(__dirname, '${componentPath}'),`;

    // Find the resolve.alias section and insert the new alias
    const lines = viteConfigContent.split('\n');
    const aliasSectionStart = lines.findIndex((line) =>
      line.includes('alias: {'),
    );
    const aliasSectionEnd = lines.findIndex(
      (line, index) => index > aliasSectionStart && line.trim() === '},',
    );

    if (aliasSectionStart !== -1 && aliasSectionEnd !== -1) {
      // Insert the new alias before the closing brace
      lines.splice(aliasSectionEnd, 0, newAlias);

      const updatedContent = lines.join('\n');
      fs.writeFileSync(viteConfigPath, updatedContent);

      console.log(
        `⚡ Updated vite.config.ts with alias for @sigmaui-kit/${componentName}`,
      );
    } else {
      console.error('❌ Could not find alias section in vite.config.ts');
    }
  } catch (error) {
    console.error('❌ Error updating vite.config.ts:', error.message);
  }
}

function createParentDocs(componentName) {
  try {
    const docsBase = path.join(
      __dirname,
      '..',
      'apps',
      'react-app',
      'docs',
      'src',
      'content',
      'components',
      componentName,
    );

    const usageDir = path.join(docsBase, 'usage');

    if (!fs.existsSync(usageDir)) fs.mkdirSync(usageDir, { recursive: true });

    const componentNamePascal = componentName
      .split('-')
      .map((w) => capitalizeFirst(w))
      .join('');

    // index.ts that exports Usage (children exported later when added)
    const indexTs = `export { default as Usage } from './usage/preview';\n`;

    // usage preview/code/raw (borrowing Input format)
    const usagePreview = `import ComponentPreview from '@docs/components/ComponentPreview';\nimport Comp from '@sigmaui-kit/${componentName}';\nimport code from './code';\nexport default function Usage${componentNamePascal}() {\n  return (\n    <>\n      <ComponentPreview\n        data={code}\n        scope={{ import: { '@sigmaui-kit/${componentName}': Comp } }}\n      />\n    </>\n  );\n}\n`;

    const usageCode = `import typescript from './typescript.raw.tsx?raw';\n\nexport default {\n  code: {\n    typescript,\n  },\n};\n`;

    const usageRaw = `import Comp from '@sigmaui-kit/${componentName}'\n\nexport default function Demo() {\n  return (\n    <Comp />\n  )\n}\n`;

    // mdx file
    const mdxPath = path.join(
      __dirname,
      '..',
      'apps',
      'react-app',
      'docs',
      'src',
      'content',
      'docs',
      'components',
      `${componentName}.mdx`,
    );
    const mdxContent = `---\nname: ${componentName}\ntitle: ${componentNamePascal}\ndescription: ${componentNamePascal} component\n---\n\nimport { Usage } from '../../components/${componentName}';\n\n# ${componentNamePascal}\n\n## Usage\n<Usage/>\n`;

    // write files
    fs.writeFileSync(path.join(docsBase, 'index.ts'), indexTs);
    fs.writeFileSync(path.join(usageDir, 'preview.tsx'), usagePreview);
    fs.writeFileSync(path.join(usageDir, 'code.ts'), usageCode);
    fs.writeFileSync(path.join(usageDir, 'typescript.raw.tsx'), usageRaw);
    if (!fs.existsSync(path.dirname(mdxPath))) {
      fs.mkdirSync(path.dirname(mdxPath), { recursive: true });
    }
    if (!fs.existsSync(mdxPath)) fs.writeFileSync(mdxPath, mdxContent);
  } catch (e) {
    console.error('❌ Error creating parent docs:', e.message);
  }
}

function createChildDocs(parentComponent, childName) {
  try {
    const childDir = path.join(
      __dirname,
      '..',
      'apps',
      'react-app',
      'docs',
      'src',
      'content',
      'components',
      parentComponent,
      childName,
    );
    if (!fs.existsSync(childDir)) fs.mkdirSync(childDir, { recursive: true });

    const childPascal = childName.split('-').map(capitalizeFirst).join('');

    const parentPascal = parentComponent
      .split('-')
      .map(capitalizeFirst)
      .join('');
    const preview = `import ComponentPreview from '@docs/components/ComponentPreview';\nimport Comp from '@sigmaui-kit/${childName}';\nimport code from './code';\nexport default function ${parentPascal}${childPascal}Preview() {\n  return (\n    <>\n      <ComponentPreview\n        data={code}\n        scope={{ import: { '@sigmaui-kit/${childName}': Comp } }}\n      />\n    </>\n  );\n}\n`;

    const code = `import typescript from './typescript.raw.tsx?raw';\n\nexport default {\n  code: {\n    typescript,\n  },\n};\n`;

    const raw = `import Comp from '@sigmaui-kit/${childName}'\n\nexport default function Demo() {\n  return (\n    <Comp />\n  )\n}\n`;

    fs.writeFileSync(path.join(childDir, 'preview.tsx'), preview);
    fs.writeFileSync(path.join(childDir, 'code.ts'), code);
    fs.writeFileSync(path.join(childDir, 'typescript.raw.tsx'), raw);
  } catch (e) {
    console.error('❌ Error creating child docs:', e.message);
  }
}

function updateParentDocsIndexAndMdx(parentComponent, childName) {
  try {
    const contentDir = path.join(
      __dirname,
      '..',
      'apps',
      'react-app',
      'docs',
      'src',
      'content',
      'components',
      parentComponent,
    );
    const indexPath = path.join(contentDir, 'index.ts');
    const mdxPath = path.join(
      __dirname,
      '..',
      'apps',
      'react-app',
      'docs',
      'src',
      'content',
      'docs',
      'components',
      `${parentComponent}.mdx`,
    );

    const childPascal = childName.split('-').map(capitalizeFirst).join('');

    // update index.ts exports
    let indexContent = '';
    if (fs.existsSync(indexPath))
      indexContent = fs.readFileSync(indexPath, 'utf8');
    const exportLine = `export { default as ${childPascal} } from './${childName}/preview';`;
    if (!indexContent.includes(exportLine)) {
      // ensure Usage export exists
      if (!indexContent.includes('export { default as Usage }')) {
        indexContent =
          `export { default as Usage } from './usage/preview';\n` +
          indexContent;
      }
      indexContent += `\n${exportLine}\n`;
      fs.writeFileSync(indexPath, indexContent);
    }

    // update mdx imports and sections
    let mdxContent = fs.existsSync(mdxPath)
      ? fs.readFileSync(mdxPath, 'utf8')
      : '';
    const importToken = `import {`;
    if (mdxContent) {
      // extend import list
      if (!mdxContent.includes(childPascal)) {
        mdxContent = mdxContent.replace(
          /import \{([^}]*)\} from '..\/..\/components\/[^']+';/,
          (m, g1) => {
            const names = g1
              .split(',')
              .map((s) => s.trim())
              .filter(Boolean);
            if (!names.includes('Usage')) names.unshift('Usage');
            names.push(childPascal);
            const unique = Array.from(new Set(names));
            return `import { ${unique.join(', ')} } from '../../components/${parentComponent}';`;
          },
        );
        mdxContent += `\n\n## ${childPascal}\n<${childPascal}/>\n`;
        fs.writeFileSync(mdxPath, mdxContent);
      }
    }
  } catch (e) {
    console.error('❌ Error updating parent docs index/mdx:', e.message);
  }
}

function updateRouteMap(componentName) {
  try {
    const routeMapPath = path.join(
      __dirname,
      '..',
      'apps',
      'react-app',
      'docs',
      'src',
      'router',
      'routeMap.ts',
    );
    if (!fs.existsSync(routeMapPath)) return;
    let content = fs.readFileSync(routeMapPath, 'utf8');
    // add routeMap.component['<name>']: `${componentPath}/<name>` if missing
    content = content.replace(
      /(component:\s*\{)([\s\S]*?)(\n\s*\},)/m,
      (match, open, inner, close) => {
        const existsQuoted = new RegExp(`'${componentName}'\\s*:`).test(inner);
        const existsUnquoted = new RegExp(
          `(^|\n)\s*${componentName}\\s*:`,
        ).test(inner);
        if (existsQuoted || existsUnquoted) return match;
        const insertLine =
          "    '" +
          componentName +
          "': `${componentPath}/" +
          componentName +
          '`,\n';
        const innerSafe = inner.endsWith('\n') ? inner : inner + '\n';
        return `${open}${innerSafe}${insertLine}  },`;
      },
    );
    fs.writeFileSync(routeMapPath, content);
  } catch (e) {
    console.error('❌ Error updating route map:', e.message);
  }
}

// Main execution
function main() {
  const componentName = process.argv[2];
  const parentComponent = process.argv[3] || null;

  if (!componentName) {
    console.error('❌ Please provide a component name');
    console.log(
      'Usage: node scripts/create-component.js <component-name> [parent-component]',
    );
    console.log('Examples:');
    console.log('  node scripts/create-component.js drawer');
    console.log('  node scripts/create-component.js number input');
    console.log('  node scripts/create-component.js password input');
    process.exit(1);
  }

  // Validate component name (should be kebab-case)
  if (!/^[a-z][a-z0-9-]*$/.test(componentName)) {
    console.error(
      '❌ Component name should be in kebab-case (lowercase letters, numbers, and hyphens only)',
    );
    console.log('Examples: drawer, my-component, button-group');
    process.exit(1);
  }

  // Validate parent component name if provided
  if (parentComponent && !/^[a-z][a-z0-9-]*$/.test(parentComponent)) {
    console.error(
      '❌ Parent component name should be in kebab-case (lowercase letters, numbers, and hyphens only)',
    );
    console.log('Examples: input, form, button');
    process.exit(1);
  }

  // Check if parent component exists (if provided)
  if (parentComponent) {
    const parentPath = path.join(
      __dirname,
      '..',
      'packages',
      'react',
      'src',
      'components',
      parentComponent,
    );

    if (!fs.existsSync(parentPath)) {
      console.error(
        `❌ Parent component "${parentComponent}" does not exist at ${parentPath}`,
      );
      console.log(
        'Please create the parent component first or check the name.',
      );
      process.exit(1);
    }
  }

  // Calculate the target path
  let basePath;
  if (parentComponent) {
    basePath = path.join(
      __dirname,
      '..',
      'packages',
      'react',
      'src',
      'components',
      parentComponent,
      componentName,
    );
  } else {
    basePath = path.join(
      __dirname,
      '..',
      'packages',
      'react',
      'src',
      'components',
      componentName,
    );
  }

  if (fs.existsSync(basePath)) {
    console.error(
      `❌ Component "${componentName}" already exists at ${basePath}`,
    );
    process.exit(1);
  }

  try {
    createComponentPackage(componentName, parentComponent);
  } catch (error) {
    console.error('❌ Error creating component package:', error.message);
    process.exit(1);
  }
}

// Check if this script is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { createComponentPackage };
