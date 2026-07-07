const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk(srcDir, function(filePath) {
  if (!filePath.endsWith('.jsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace font-serif, font-display -> font-heading
  content = content.replace(/font-serif/g, 'font-heading');
  content = content.replace(/font-display/g, 'font-heading');
  
  // Replace font-sans -> font-body
  content = content.replace(/font-sans/g, 'font-body');

  // Strip all text sizes and color classes and replace them with standard tokens based on context
  // This is a bit tricky, so we'll just replace specific known large text combinations with text-hero, text-h1, text-h2
  
  // Custom sizes
  content = content.replace(/(?:sm:|md:|lg:|xl:)?text-\[[^\]]+\]/g, '');
  content = content.replace(/(?:sm:|md:|lg:|xl:)?text-[2-9]xl/g, '');
  content = content.replace(/(?:sm:|md:|lg:|xl:)?text-xl/g, '');
  content = content.replace(/(?:sm:|md:|lg:|xl:)?text-lg/g, '');

  // Since we stripped the sizes, we should inject the right sizes based on heading tags.
  // We'll replace '<h1 className="' with '<h1 className="text-hero '
  content = content.replace(/<h1 className="([^"]*)"/g, '<h1 className="text-hero $1"');
  content = content.replace(/<h2 className="([^"]*)"/g, '<h2 className="text-h1 $1"');
  content = content.replace(/<h3 className="([^"]*)"/g, '<h3 className="text-h2 $1"');
  content = content.replace(/<h4 className="([^"]*)"/g, '<h4 className="text-card $1"');

  // Colors
  content = content.replace(/text-white\/[0-9]+/g, 'text-muted');
  content = content.replace(/text-white/g, 'text-heading');
  content = content.replace(/text-gray-[345]00/g, 'text-body-primary');
  content = content.replace(/text-gray-[56]00/g, 'text-body-secondary');
  content = content.replace(/text-bone/g, 'text-heading');
  content = content.replace(/text-\[#[0-9a-fA-F]+\]/g, '');
  
  // Body text sizes
  content = content.replace(/text-sm/g, 'text-small');
  content = content.replace(/text-base/g, 'text-body');
  
  // Specific buttons fixing (uppercase tracking-wide text-xs) -> font-body font-semibold text-base tracking-normal
  content = content.replace(/uppercase tracking-wid(?:e|er) text-xs/g, 'font-body font-semibold text-base');
  content = content.replace(/uppercase text-xs/g, 'font-body font-semibold text-base');
  content = content.replace(/tracking-wid(?:e|er)/g, 'tracking-normal');
  
  // Try to remove uppercase class from buttons
  content = content.replace(/className="([^"]*)uppercase([^"]*)"/g, (match, p1, p2) => {
      return `className="${p1}${p2}"`.replace(/  +/g, ' ');
  });

  // Clean up multiple spaces created by stripping
  content = content.replace(/className=" +/g, 'className="');
  content = content.replace(/ +"/g, '"');
  content = content.replace(/  +/g, ' ');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
});
