const fs = require('fs');
const { execSync } = require('child_process');

const packageJsonPath = './package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

const backupPackageJsonPath = './package-backup.json';
fs.writeFileSync(backupPackageJsonPath, JSON.stringify(packageJson, null, 2));

Object.keys(packageJson.dependencies).forEach((pkg) => {
  if (pkg.startsWith('@sigmaui-kit/') && packageJson.dependencies[pkg] === 'latest') {
    const latestVersion = execSync(`npm show ${pkg}@latest version`, { encoding: 'utf8' }).trim();
    
    console.log('latestVersion', pkg, latestVersion)
    
    packageJson.dependencies[pkg] = latestVersion;
  }
});

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));