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
    "types": "./dist/index.d.ts",
    "import": "./dist/index.mjs",
    "require": "./dist/index.js"
  },
  "./package.json": "./package.json"
};

for (const file of files) {
  exportsField[`./${file}`] = {
    "types": `./dist/${file}.d.ts`,
    "import": `./dist/${file}.mjs`,
    "require": `./dist/${file}.js`
  };
}

config.replace.exports = exportsField;

fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
console.log('Updated exports in clean-package.config.json');