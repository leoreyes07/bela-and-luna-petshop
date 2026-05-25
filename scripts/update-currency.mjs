import fs from 'fs';
import path from 'path';

const constantsPath = path.resolve(process.cwd(), 'src/constants.ts');
let code = fs.readFileSync(constantsPath, 'utf8');

// Convert prices
code = code.replace(/price:\s*(\d+),/g, (match, p1) => {
  const newPrice = Math.round(parseInt(p1, 10) * 36.6);
  return `price: ${newPrice},`;
});

fs.writeFileSync(constantsPath, code);
console.log('Updated prices in constants.ts');

const dirs = ['src/components', 'src/views'];

function replaceCurrency(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceCurrency(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace $ followed by { or a variable name
      content = content.replace(/\$\{product\.price/g, 'C\\${product.price');
      content = content.replace(/\$\{totalPrice/g, 'C\\${totalPrice');
      content = content.replace(/\$\{tax/g, 'C\\${tax');
      content = content.replace(/\$\{finalTotal/g, 'C\\${finalTotal');
      
      fs.writeFileSync(fullPath, content);
      console.log(`Updated currency in ${fullPath}`);
    }
  }
}

for (const dir of dirs) {
  replaceCurrency(path.resolve(process.cwd(), dir));
}
console.log('Currency update complete.');
