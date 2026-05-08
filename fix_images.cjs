const fs = require('fs');
let code = fs.readFileSync('src/constants.ts', 'utf8');
code = code.replace(/image:\s*'\/src\/(assets\/[^']+)'/g, "image: new URL('./$1', import.meta.url).href");
fs.writeFileSync('src/constants.ts', code);
console.log('Done!');
