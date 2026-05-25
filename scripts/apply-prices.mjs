import fs from 'fs';
import path from 'path';

const constantsPath = path.resolve(process.cwd(), 'src/constants.ts');
let code = fs.readFileSync(constantsPath, 'utf8');

// The pattern for th1
code = code.replace(/id: 'th1',\s*name: 'Arnés Táctico Negro',\s*description: 'Unidad de Seguridad • K-9 de Servicio',\s*price: 4209,/g,
`id: 'th1',
    name: 'Arnés Táctico Negro',
    description: 'Unidad de Seguridad • K-9 de Servicio',
    price: 750,
    pricesBySize: { M: 750, L: 850, XL: 950 },`);

code = code.replace(/id: 'th2',\s*name: 'Arnés Caqui del Desierto',\s*description: 'K-9 de Servicio • Equipo Táctico',\s*price: 4026,/g,
`id: 'th2',
    name: 'Arnés Caqui del Desierto',
    description: 'K-9 de Servicio • Equipo Táctico',
    price: 750,
    pricesBySize: { M: 750, L: 850, XL: 950 },`);

code = code.replace(/id: 'th3',\s*name: 'Arnés Camuflaje Digital Púrpura',\s*description: 'K-9 de Servicio • En Entrenamiento',\s*price: 4575,/g,
`id: 'th3',
    name: 'Arnés Camuflaje Digital Púrpura',
    description: 'K-9 de Servicio • En Entrenamiento',
    price: 790,
    pricesBySize: { S: 790, M: 820, L: 860, XL: 900 },`);

code = code.replace(/id: 'th4',\s*name: 'Arnés Camuflaje Digital Naval',\s*description: 'Perro de Servicio • Unidad K9',\s*price: 4392,/g,
`id: 'th4',
    name: 'Arnés Camuflaje Digital Naval',
    description: 'Perro de Servicio • Unidad K9',
    price: 790,
    pricesBySize: { S: 790, M: 820, L: 860, XL: 900 },`);

code = code.replace(/id: 'th5',\s*name: 'Arnés Táctico Gris',\s*description: 'K-9 Policial • Cintas Reflectantes',\s*price: 4575,/g,
`id: 'th5',
    name: 'Arnés Táctico Gris',
    description: 'K-9 Policial • Cintas Reflectantes',
    price: 790,
    pricesBySize: { S: 790, M: 820, L: 860, XL: 900 },`);

code = code.replace(/id: 'th6',\s*name: 'Arnés Táctico Rosa',\s*description: 'Perro de Servicio • Brillante y Audaz',\s*price: 4026,/g,
`id: 'th6',
    name: 'Arnés Táctico Rosa',
    description: 'Perro de Servicio • Brillante y Audaz',
    price: 790,
    pricesBySize: { S: 790, M: 820, L: 860, XL: 900 },`);

fs.writeFileSync(constantsPath, code);
console.log('Constants updated with dynamic prices.');
