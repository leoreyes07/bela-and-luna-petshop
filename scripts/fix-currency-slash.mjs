import fs from 'fs';
import path from 'path';

const dirs = ['src/components', 'src/views'];

function fixCurrencySlash(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixCurrencySlash(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace C\$ with C$
      content = content.replace(/C\\\$/g, 'C$');
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed slash in ${fullPath}`);
    }
  }
}

for (const dir of dirs) {
  fixCurrencySlash(path.resolve(process.cwd(), dir));
}
console.log('Done fixing slash.');
