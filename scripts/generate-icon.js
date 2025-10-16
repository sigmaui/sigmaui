#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const readline = require('readline');

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

async function main() {
  console.log('🎨 TDM UI Icon Generator\n');

  // Enter icon name PascalCase
  const iconName = await prompt('🎨 Enter icon name (PascalCase, e.g.: HomeIcon): ');
  if (!iconName || !/^[A-Z][a-zA-Z0-9]*$/.test(iconName)) {
    console.error(
      '❌ Icon name must be PascalCase (start with uppercase, letters and numbers only)'
    );
    process.exit(1);
  }

  const root = process.cwd();
  const iconsDir = path.join(root, 'packages', 'icons', 'src');

  if (!fs.existsSync(iconsDir)) {
    console.error('❌ Icons directory does not exist: packages/icons/src');
    process.exit(1);
  }

  const iconFile = path.join(iconsDir, `${iconName}.tsx`);
  if (fs.existsSync(iconFile)) {
    console.error(`❌ Icon already exists: ${iconFile}`);
    process.exit(1);
  }

  console.log(`\n📋 Icon information:`);
  console.log(`   📁 Location: packages/icons/src/${iconName}.tsx`);
  console.log(`   🎨 Name: ${iconName}\n`);

  const confirm = await prompt('✅ Create icon? (y/N): ');
  if (!['y', 'yes', 'Y', 'YES'].includes(confirm)) {
    console.log('❌ Cancelled icon creation');
    process.exit(0);
  }

  // Template icon component
  const iconTemplate = `import React from 'react';
import { IconProps } from './types';

const ${iconName} = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, width, height, ...props }, ref) => {
    const finalWidth = width ?? size;
    const finalHeight = height ?? size;
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalWidth}
        height={finalHeight}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Thay đổi path này theo icon mong muốn */}
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
  }
);

${iconName}.displayName = '${iconName}';

export default ${iconName};
`;

  console.log('🔄 Creating icon...');
  write(iconFile, iconTemplate);

  // Cập nhật index.tsx để export icon mới
  const indexPath = path.join(iconsDir, 'index.tsx');
  let indexContent = '';

  if (fs.existsSync(indexPath)) {
    indexContent = fs.readFileSync(indexPath, 'utf8');
  }

  // Thêm export mới nếu chưa có
  const newExport = `export { default as ${iconName} } from './${iconName}';`;
  if (!indexContent.includes(newExport)) {
    indexContent += `\n${newExport}`;
    write(indexPath, indexContent);
  }

  console.log(`\n✅ Successfully created icon: ${iconName}`);
  console.log(`📁 Path: ${iconFile}`);
  console.log(`\n🚀 Next steps:`);
  console.log(`   1. Edit SVG path in ${iconName}.tsx`);
  console.log(`   2. pnpm --filter @tdm-ui/icons build`);
  console.log(`   3. Import and use: import { ${iconName} } from '@tdm-ui/icons/${iconName}'\n`);
}

main();
