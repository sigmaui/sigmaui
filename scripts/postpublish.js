const fs = require('fs');

const backupPackageJsonPath = './package-backup.json';
const packageJsonPath = './package.json';

const backupPackageJson = JSON.parse(fs.readFileSync(backupPackageJsonPath, 'utf-8'));
fs.writeFileSync(packageJsonPath, JSON.stringify(backupPackageJson, null, 2));

fs.unlinkSync(backupPackageJsonPath);