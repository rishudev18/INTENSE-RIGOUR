const fs = require('fs');

const targetFile = "C:\\Users\\rishu\\OneDrive\\Documents\\codex-gym website 27 june\\src\\components\\Navbar.jsx";
let content = fs.readFileSync(targetFile, 'utf8');

// The file currently has literal "\n2: import " inside it.
// Split by the literal "\n" string
let parts = content.split('\\n');

let cleaned = [];
for (let i = 0; i < parts.length; i++) {
    let line = parts[i];
    // Remove the leading "number: "
    let match = line.match(/^\d+:\s(.*)/);
    if (match) {
        cleaned.push(match[1]);
    } else if (line.match(/^\d+:$/)) {
        cleaned.push("");
    } else {
        cleaned.push(line);
    }
}

fs.writeFileSync(targetFile, cleaned.join('\n'), 'utf8');
console.log("Fixed Navbar.jsx!");
