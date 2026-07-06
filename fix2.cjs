const fs = require('fs');

const logFile = "C:\\Users\\rishu\\.gemini\\antigravity-ide\\brain\\bfb45110-34a9-4f5b-ab3d-14022e5159f2\\.system_generated\\logs\\transcript_full.jsonl";
const targetFile = "C:\\Users\\rishu\\OneDrive\\Documents\\codex-gym website 27 june\\src\\components\\Navbar.jsx";

const lines = fs.readFileSync(logFile, 'utf8').split('\n');
let rawOutput = null;

// Search backwards for the specific view_file response
for (let i = lines.length - 1; i >= 0; i--) {
    if (!lines[i]) continue;
    const data = JSON.parse(lines[i]);
    if (data.type === 'TOOL_RESPONSE' && data.tool_responses) {
        for (const resp of data.tool_responses) {
            if (resp.name === 'default_api:view_file') {
                const out = resp.response.output || "";
                if (out.includes('Total Lines: 327') && out.includes('Navbar.jsx')) {
                    rawOutput = out;
                    break;
                }
            }
        }
        if (rawOutput) break;
    }
}

if (rawOutput) {
    // Now rawOutput is a normal Javascript string with actual newlines, not literal \n.
    // We just need to strip the "1: ", "2: " prefixes.
    const outLines = rawOutput.split('\n');
    const cleaned = [];
    let started = false;
    for (const line of outLines) {
        if (line.startsWith('1: import')) started = true;
        if (started) {
            const match = line.match(/^\d+:\s(.*)/);
            if (match) {
                cleaned.push(match[1]);
            } else if (line.match(/^\d+:$/)) {
                cleaned.push("");
            } else if (line.startsWith("The above content shows")) {
                break;
            }
        }
    }
    fs.writeFileSync(targetFile, cleaned.join('\n'), 'utf8');
    console.log("Fully fixed Navbar.jsx!");
} else {
    console.log("Could not find it in the transcript.");
}
