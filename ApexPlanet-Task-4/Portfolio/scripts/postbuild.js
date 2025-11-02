import { cp, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const copyTargets = [
    { src: 'components', dest: path.join('dist', 'components') },
    { src: path.join('assets', 'images'), dest: path.join('dist', 'assets', 'images') }
];

async function copyDirectory(srcRelative, destRelative) {
    const srcPath = path.join(rootDir, srcRelative);
    const destPath = path.join(rootDir, destRelative);

    try {
        await mkdir(path.dirname(destPath), { recursive: true });
        await cp(srcPath, destPath, { recursive: true, force: true });
        console.log(`✔ Copied ${srcRelative} -> ${destRelative}`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.warn(`⚠️  Skipping copy: source path not found (${srcRelative})`);
        } else {
            throw error;
        }
    }
}

(async () => {
    for (const { src, dest } of copyTargets) {
        await copyDirectory(src, dest);
    }
})();
