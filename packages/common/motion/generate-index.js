const fs = require('fs');
const path = require('path');

const configPath = path.resolve(__dirname, 'clean-package.config.json');
const srcDir = path.resolve(__dirname, 'src');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const files = fs.readdirSync(srcDir)
  .filter(f => f.endsWith('.tsx') && f !== 'index.tsx')
  .map(f => f.replace(/\.tsx$/, ''));

// Generate import statements
const importStatements = files
  .map(fileName => `import ${fileName} from './${fileName}.tsx';`)
  .join('\n');

// Generate export statements
const exportStatements = files
  .map(fileName => `  ${fileName}`)
  .join(',\n');

// Create the complete index.tsx content
const indexContent = `${importStatements}

export {
${exportStatements}
}
`;

// Write the index.tsx file
const indexPath = path.resolve(srcDir, 'index.tsx');
fs.writeFileSync(indexPath, indexContent, 'utf8');

console.log(`Generated index.tsx with ${files.length} icon exports`);  