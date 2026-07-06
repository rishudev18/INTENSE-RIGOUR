const fs = require('fs');
const path = require('path');

const statsPath = path.join(__dirname, 'stats.json');
const stats = JSON.parse(fs.readFileSync(statsPath, 'utf8'));

const result = {};
Object.entries(stats.nodeMetas).forEach(([metaUid, meta]) => {
  const id = meta.id;
  let size = 0;
  let gzip = 0;
  Object.values(meta.moduleParts).forEach(partUid => {
    const part = stats.nodeParts[partUid];
    if (part) {
      size += part.renderedLength || 0;
      gzip += part.gzipLength || 0;
    }
  });
  result[id] = { size, gzip };
});

const kb = (bytes) => (bytes / 1024).toFixed(2) + ' KB';

console.log("=== LIBRARIES ===");
const libraries = ['gsap', 'framer-motion', 'split-type', 'react', 'lucide-react'];
libraries.forEach(lib => {
  let size = 0;
  let gzip = 0;
  Object.keys(result).forEach(id => {
    if (id.includes(lib) && id.includes('node_modules')) {
      size += result[id].size;
      gzip += result[id].gzip;
    }
  });
  console.log(`${lib}: ${kb(size)} (gzip: ${kb(gzip)})`);
});

console.log("\n=== LARGEST COMPONENTS (src/components) ===");
const components = Object.keys(result)
  .filter(id => id.includes('src/components'))
  .map(id => ({ id, ...result[id] }))
  .sort((a, b) => b.size - a.size)
  .slice(0, 5);
components.forEach(c => {
  console.log(`${c.id.split('/').pop()}: ${kb(c.size)} (gzip: ${kb(c.gzip)})`);
});

console.log("\n=== LARGEST PAGES (src/pages) ===");
const pages = Object.keys(result)
  .filter(id => id.includes('src/pages'))
  .map(id => ({ id, ...result[id] }))
  .sort((a, b) => b.size - a.size)
  .slice(0, 5);
pages.forEach(p => {
  console.log(`${p.id.split('/').pop()}: ${kb(p.size)} (gzip: ${kb(p.gzip)})`);
});
