import fs from 'fs';
import path from 'path';

const viewsDir = path.resolve(process.cwd(), 'src/views');
const categoryViews = ['Harnesses.tsx', 'Collars.tsx', 'Toys.tsx', 'Beds.tsx', 'PetBowls.tsx', 'Others.tsx', 'Home.tsx'];
for (const view of categoryViews) {
  const viewPath = path.join(viewsDir, view);
  let code = fs.readFileSync(viewPath, 'utf8');
  code = code.replace(/addToCart=\{/g, 'onAddToCart={');
  fs.writeFileSync(viewPath, code);
  console.log(`${view} updated`);
}
