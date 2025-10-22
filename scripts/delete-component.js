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
      rl.question('choose number (1-2): ', answer => {
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

function findPackages() {
  const root = process.cwd();
  const packages = [];

  // Scan components directory
  const componentsDir = path.join(root, 'packages', 'components');
  if (fs.existsSync(componentsDir)) {
    const items = fs.readdirSync(componentsDir);
    items.forEach(item => {
      const itemPath = path.join(componentsDir, item);
      if (fs.statSync(itemPath).isDirectory()) {
        packages.push({
          name: item,
          path: itemPath,
          scope: 'components',
        });
      }
    });
  }

  // Scan blocks directory
  const blocksDir = path.join(root, 'packages', 'blocks');
  if (fs.existsSync(blocksDir)) {
    const items = fs.readdirSync(blocksDir);
    items.forEach(item => {
      const itemPath = path.join(blocksDir, item);
      if (fs.statSync(itemPath).isDirectory()) {
        packages.push({
          name: item,
          path: itemPath,
          scope: 'blocks',
        });
      }
    });
  }

  return packages;
}

async function main() {
  console.log('🗑️  TDM UI Component Remover\n');

  // Find all available packages
  const packages = findPackages();

  if (packages.length === 0) {
    console.log('❌ No packages found in packages/components or packages/blocks');
    process.exit(0);
  }

  // B1: Choose package to delete
  const packageOptions = packages.map(pkg => `${pkg.scope}/${pkg.name}`);
  const selectedPackage = await selectOption(
    '📦 Choose package to delete (Use "↑↓" to select, "Enter" to confirm):',
    packageOptions
  );

  const selectedPkg = packages.find(pkg => `${pkg.scope}/${pkg.name}` === selectedPackage);
  if (!selectedPkg) {
    console.log('❌ Package not found');
    process.exit(1);
  }

  const kebabName = selectedPkg.name;
  const scope = selectedPkg.scope;
  const pkgDir = selectedPkg.path;

  console.log(`\n📋 Package to delete:`);
  console.log(`   📁 Location: packages/${scope}/${kebabName}`);
  console.log(`   📦 Name: @sigma-ui-kit/${kebabName}`);
  console.log(`   📁 Path: ${pkgDir}\n`);

  const confirm = await prompt(
    `⚠️  Are you sure you want to delete @sigma-ui-kit/${kebabName}? This action cannot be undone! ("y" or "Y" to confirm, "N" or "Enter" to cancel): `
  );
  if (!['y', 'yes', 'Y', 'YES'].includes(confirm)) {
    console.log('❌ Cancelled package deletion');
    process.exit(0);
  }

  console.log('🔄 Removing package from apps...');
  const { execSync } = require('child_process');
  const root = process.cwd();

  try {
    // Remove from docs app
    console.log(`📦 Removing from @sigma-ui-kit/docs...`);
    try {
      execSync(`pnpm remove @sigma-ui-kit/${kebabName} --filter @sigma-ui-kit/docs`, {
        stdio: 'inherit',
        cwd: root,
      });
    } catch (error) {
      console.log(`⚠️  Package not found in docs app`);
    }

    // Remove from csr-demo app
    console.log(`📦 Removing from @sigma-ui-kit/csr-demo...`);
    try {
      execSync(`pnpm remove @sigma-ui-kit/${kebabName} --filter @sigma-ui-kit/csr-demo`, {
        stdio: 'inherit',
        cwd: root,
      });
    } catch (error) {
      console.log(`⚠️  Package not found in csr-demo app`);
    }

    console.log('🔄 Deleting package directory...');

    // Delete the package directory
    if (fs.existsSync(pkgDir)) {
      fs.rmSync(pkgDir, { recursive: true, force: true });
      console.log(`✅ Package directory deleted: ${pkgDir}`);
    } else {
      console.log(`⚠️  Package directory not found: ${pkgDir}`);
    }

    // Run pnpm install to clean up
    console.log('🔄 Running pnpm install to clean up...');
    execSync('pnpm install', { stdio: 'inherit', cwd: root });

    console.log(`\n✅ Successfully deleted package: @sigma-ui-kit/${kebabName}`);
    console.log(`📁 Deleted: ${pkgDir}`);
    console.log(`📦 Removed from docs and csr-demo apps`);
  } catch (error) {
    console.log(`⚠️  Error during deletion: ${error.message}`);
    console.log(`Please manually delete: ${pkgDir}`);
  }

  console.log(`\n🚀 Next steps:`);
  console.log(`   1. Check if any imports of @sigma-ui-kit/${kebabName} need to be removed`);
  console.log(`   2. Update any documentation that references this component`);
  console.log(`   3. Commit the changes\n`);
}

main();
