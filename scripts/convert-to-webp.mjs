import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.resolve(process.cwd(), 'src/assets');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (stat.isFile()) {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const parsedPath = path.parse(fullPath);
        const newPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(newPath);

          console.log(`Converted: ${fullPath} -> ${newPath}`);
          fs.unlinkSync(fullPath);
          console.log(`Deleted original: ${fullPath}`);
        } catch (error) {
          console.error(`Error processing ${fullPath}:`, error);
        }
      }
    }
  }
}

console.log('Starting conversion...');
processDirectory(assetsDir)
  .then(() => console.log('All done!'))
  .catch(err => console.error(err));
