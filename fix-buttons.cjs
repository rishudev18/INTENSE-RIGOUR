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

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

walk(srcDir, function(filePath) {
  if (!filePath.endsWith('.jsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Remove 'uppercase' from classNames specifically for buttons and links
  // A simple way is to remove 'uppercase' globally from any className, since the user said 
  // "Avoid uppercase for every button." and also mentioned "The visual identity should feel premium, minimal... rather than loud"
  // Let's specifically target buttons and a/Link tags.
  // Actually, let's just strip 'uppercase' from classNames on <button, <a, <Link
  content = content.replace(/<(button|a|Link)([^>]*?)className="([^"]*?)uppercase([^"]*?)"/g, (match, tag, before, classBefore, classAfter) => {
      let newClass = `${classBefore}${classAfter}`.replace(/\s+/g, ' ').trim();
      // add font-semibold and text-base as user requested earlier if needed, but for now just remove uppercase
      return `<${tag}${before}className="${newClass}"`;
  });
  
  // Title case text inside buttons/links if it's currently ALL CAPS.
  // E.g. >JOIN NOW< or > JOIN NOW <
  content = content.replace(/>\s*([A-Z][A-Z\s]+[A-Z])\s*</g, (match, text) => {
      // If it's all uppercase (and spaces), convert to Title Case
      if (text === text.toUpperCase()) {
         return `>${toTitleCase(text)}<`;
      }
      return match;
  });

  // Also replace tracking-widest with tracking-normal on buttons
  content = content.replace(/<(button|a|Link)([^>]*?)className="([^"]*?)tracking-wid(?:est|er|e)([^"]*?)"/g, (match, tag, before, classBefore, classAfter) => {
      let newClass = `${classBefore}tracking-normal${classAfter}`.replace(/\s+/g, ' ').trim();
      return `<${tag}${before}className="${newClass}"`;
  });
  
  // Change text sizes on buttons to text-base (or just leave them as they are and let the global font rule handle it).
  // I will just leave text sizes for buttons alone to prevent breaking alignment, but user said "Buttons: General Sans 600 16px".
  // text-base is 16px.
  // Let's replace text-xs or text-sm or text-[10px] with text-base font-semibold on buttons.
  content = content.replace(/<(button|a|Link)([^>]*?)className="([^"]*?)text-(xs|sm|\[[0-9]+px\])([^"]*?)"/g, (match, tag, before, classBefore, size, classAfter) => {
      let newClass = `${classBefore}text-base font-semibold${classAfter}`.replace(/\s+/g, ' ').trim();
      return `<${tag}${before}className="${newClass}"`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
});
