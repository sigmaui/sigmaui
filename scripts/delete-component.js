#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const readline = require('readline');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
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

function getAvailableComponents(scope) {
  const root = process.cwd();
  const componentsDir = path.join(root, 'packages', scope);

  if (!fs.existsSync(componentsDir)) {
    return [];
  }

  return fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .sort();
}

function removeDirectory(dirPath) {
  try {
    if (fs.existsSync(dirPath)) {
      console.log(`🗑️  Deleting: ${dirPath}`);
      fs.rmSync(dirPath, { recursive: true, force: true });
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error deleting ${dirPath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log(
    '🗑️  TDM UI Component Delete (This will permanently delete the component and all its files)\n'
  );

  // B1: Choose location (components/blocks)
  const scope = await selectOption('📁 Choose location (Use "↑↓" to select, "Enter" to confirm):', [
    'packages/components - Basic UI Components',
    'packages/blocks - Complex UI Blocks',
  ]);

  const selectedScope = scope.includes('components') ? 'components' : 'blocks';
  const root = process.cwd();

  // B2: Get the list of available components
  const availableComponents = getAvailableComponents(selectedScope);

  if (availableComponents.length === 0) {
    console.log(`\n❌ No components found in packages/${selectedScope}/`);
    process.exit(0);
  }

  // B3: Choose component to delete with "↑↓" and "Enter"
  const componentName = await selectOption(
    `\n📦 Choose component to delete (Use "↑↓" to select, "Enter" to confirm):`,
    availableComponents.map(comp => {
      // Add description if package.json exists
      const packageJsonPath = path.join(root, 'packages', selectedScope, comp, 'package.json');
      let description = '';
      if (fs.existsSync(packageJsonPath)) {
        try {
          const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
          description = packageJson.description ? ` - ${packageJson.description}` : '';
        } catch (error) {
          // Ignore JSON parse errors
        }
      }
      return `${comp}${description}`;
    })
  );

  // Extract component name from selection (remove description)
  const selectedComponentName = componentName.split(' - ')[0];
  const componentDir = path.join(root, 'packages', selectedScope, selectedComponentName);

  // Display component information
  console.log(`\n📋 Component information:`);
  console.log(`   📁 Location: packages/${selectedScope}/${selectedComponentName}`);
  console.log(`   📦 Name: @tdm-ui/${selectedComponentName}`);

  // Check package.json to get more information
  const packageJsonPath = path.join(componentDir, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      if (packageJson.description) {
        console.log(`   📝 Description: ${packageJson.description}`);
      }
    } catch (error) {
      // Ignore JSON parse errors
    }
  }

  // Display the files/directories that will be deleted
  console.log(`\n📁 Files/directories that will be deleted:`);
  try {
    const items = fs.readdirSync(componentDir);
    items.forEach(item => {
      const itemPath = path.join(componentDir, item);
      const stat = fs.statSync(itemPath);
      const type = stat.isDirectory() ? '📁' : '📄';
      console.log(`   ${type} ${item}`);
    });
  } catch (error) {
    console.log(`   ❌ Cannot read directory: ${error.message}`);
  }

  // Warning
  console.log(`\n⚠️  Warning: This will permanently delete component "${selectedComponentName}"!`);
  console.log('   - All source code will be lost');
  console.log('   - Build outputs will be deleted');
  console.log('   - Cannot be undone');

  const confirm = await prompt(
    '\n❓ Are you sure you want to delete? ("y" or "Y" to confirm, "N" or "Enter" to cancel): '
  );
  if (!['y', 'yes', 'Y', 'YES'].includes(confirm)) {
    console.log('❌ Cancelled deletion');
    process.exit(0);
  }

  console.log('\n🔄 Starting deletion...\n');

  const success = removeDirectory(componentDir);

  if (success) {
    console.log(`\n✅ Successfully deleted component: @tdm-ui/${selectedComponentName}`);
    console.log(`📁 Deleted path: ${componentDir}`);

    // Auto run pnpm install to update lockfile
    console.log(`\n🔄 Updating dependencies...`);
    const { execSync } = require('child_process');
    try {
      execSync('pnpm install', { stdio: 'inherit', cwd: root });
      console.log(`✅ Dependencies updated successfully!`);
    } catch (error) {
      console.log(`⚠️  Error updating dependencies, please run: pnpm install`);
    }

    console.log(`\n🚀 Next steps:`);
    console.log(`   1. Check and update imports in other files`);
    console.log(`   2. Update dependencies if needed`);
    console.log(`   3. Rebuild packages if needed: pnpm build`);
  } else {
    console.log(`\n❌ Cannot delete component: @tdm-ui/${selectedComponentName}`);
    process.exit(1);
  }
}

main();
