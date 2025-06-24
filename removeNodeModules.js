const fs = require('fs');
const path = require('path');

function deleteNodeModules(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (file === 'node_modules') {
      console.log(`Deleting: ${fullPath}`);
      fs.rmSync(fullPath, { recursive: true, force: true });
    } else if (fs.statSync(fullPath).isDirectory()) {
      deleteNodeModules(fullPath);
    }
  });
}

deleteNodeModules(process.cwd());