#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function findDirectories(rootDir, dirName) {
  const results = [];

  function searchDir(dir) {
    try {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          if (item === dirName) {
            results.push(fullPath);
          } else if (item !== 'node_modules' && item !== '.git' && item !== 'dist') {
            // Recursively search subdirectories, but skip node_modules, .git, and dist
            searchDir(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }

  searchDir(rootDir);
  return results;
}

function removeDirectory(dirPath) {
  try {
    if (fs.existsSync(dirPath)) {
      console.log(`🗑️  Xóa: ${dirPath}`);
      fs.rmSync(dirPath, { recursive: true, force: true });
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Lỗi khi xóa ${dirPath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🧹 TDM UI Clean Script\n');

  const rootDir = process.cwd();
  console.log(`📁 Scanning directory: ${rootDir}\n`);

  // Find all node_modules
  console.log('🔍 Searching for node_modules...');
  const nodeModulesDirs = findDirectories(rootDir, 'node_modules');

  // Find all dist
  console.log('🔍 Searching for dist...');
  const distDirs = findDirectories(rootDir, 'dist');

  // Find all .next (Next.js build cache)
  console.log('🔍 Searching for .next...');
  const nextDirs = findDirectories(rootDir, '.next');

  // Find all .turbo (Turbo cache)
  console.log('🔍 Searching for .turbo...');
  const turboDirs = findDirectories(rootDir, '.turbo');

  const allDirs = [...nodeModulesDirs, ...distDirs, ...nextDirs, ...turboDirs];

  if (allDirs.length === 0) {
    console.log('✅ No directories found to delete!');
    return;
  }

  console.log(`\n📋 Found ${allDirs.length} directories:`);
  allDirs.forEach(dir => {
    const relativePath = path.relative(rootDir, dir);
    const size = getDirectorySize(dir);
    console.log(`   📁 ${relativePath} (${size})`);
  });

  console.log('\n⚠️  Warning: This will permanently delete all directories above!');
  console.log('   - node_modules: Installed dependencies');
  console.log('   - dist: Build outputs');
  console.log('   - .next: Next.js cache');
  console.log('   - .turbo: Turbo cache');

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('\n❓ Are you sure you want to delete? (y/N): ', answer => {
    rl.close();

    if (!['y', 'yes', 'Y', 'YES'].includes(answer.trim())) {
      console.log('❌ Cancelled deletion');
      return;
    }

    console.log('\n🔄 Starting deletion...\n');

    let successCount = 0;
    let failCount = 0;

    allDirs.forEach(dir => {
      if (removeDirectory(dir)) {
        successCount++;
      } else {
        failCount++;
      }
    });

    console.log(`\n📊 Results:`);
    console.log(`   ✅ Success: ${successCount} directories`);
    console.log(`   ❌ Failed: ${failCount} directories`);

    if (successCount > 0) {
      console.log(`\n🚀 Next steps:`);
      console.log(`   1. pnpm install - Reinstall dependencies`);
      console.log(`   2. pnpm build - Rebuild packages`);
    }
  });
}

function getDirectorySize(dirPath) {
  try {
    const stats = execSync(`du -sh "${dirPath}" 2>/dev/null || echo "0B"`, { encoding: 'utf8' });
    return stats.trim().split('\t')[0] || '0B';
  } catch {
    return '0B';
  }
}

main();
