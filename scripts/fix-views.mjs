import fs from 'fs';
import path from 'path';

const viewsDir = path.resolve(process.cwd(), 'src/views');
const views = ['Home.tsx', 'Harnesses.tsx', 'Collars.tsx', 'Toys.tsx', 'Beds.tsx', 'PetBowls.tsx', 'Others.tsx'];

for (const view of views) {
  const viewPath = path.join(viewsDir, view);
  let code = fs.readFileSync(viewPath, 'utf8');

  // Regex to match the component function signature accurately
  // It handles both Home (which has many props) and the others
  const regex = /(export default function [A-Za-z]+\(\{.*?\}\s*:\s*[A-Za-z]+Props\)\s*\{)/;
  
  if (code.match(regex) && !code.includes('const { cartCount, totalPrice, addToCart } = useCart();')) {
    code = code.replace(regex, `$1\n  const { cartCount, totalPrice, addToCart } = useCart();`);
    fs.writeFileSync(viewPath, code);
    console.log(`Fixed ${view}`);
  }
}
