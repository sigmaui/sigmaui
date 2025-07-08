const fs = require('fs');
const path = require('path');

const configPath = path.resolve(__dirname, 'clean-package.config.json');
const srcDir = path.resolve(__dirname, 'src');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const files = fs.readdirSync(srcDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts')
  .map(f => f.replace(/\.ts$/, ''));

const exportsField = {
  ".": {
    "import": "./dist/index.js",
    "require": "./dist/index.js",
    "types": "./dist/index.d.ts"
  }
};

for (const file of files) {
  exportsField[`./${file}`] = {
    "import": `./dist/${file}.js`,
    "require": `./dist/${file}.js`,
    "types": `./dist/${file}.d.ts`
  };
}

config.exports = exportsField;

fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
console.log('Updated exports in clean-package.config.json');