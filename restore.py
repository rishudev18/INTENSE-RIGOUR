import json
import re

log_file = r"C:\Users\rishu\.gemini\antigravity-ide\brain\bfb45110-34a9-4f5b-ab3d-14022e5159f2\.system_generated\logs\transcript_full.jsonl"
target = r"C:\Users\rishu\OneDrive\Documents\codex-gym website 27 june\src\components\Navbar.jsx"

found_content = []

with open(log_file, "r", encoding="utf-8") as f:
    for line in reversed(f.readlines()):
        data = json.loads(line)
        if data.get("type") == "PLANNER_RESPONSE" or data.get("type") == "TOOL_RESPONSE":
            pass # look at tool responses
            
        # The tool response is usually recorded in the next step. Let's just regex search the whole file as a raw string for simplicity, or iterate step by step.
        
with open(log_file, "r", encoding="utf-8") as f:
    raw_text = f.read()

# Find the specific block
# It starts with "1: import React, { useState, useEffect, useRef } from 'react';"
# and ends around "327: "

pattern = re.compile(r"1: import React.*?327: ", re.DOTALL)
match = pattern.search(raw_text)

if match:
    block = match.group(0)
    # clean up the line numbers
    cleaned_lines = []
    for line in block.split("\n"):
        # Match '123: ' or '1: '
        line_match = re.match(r"^\d+:\s(.*)", line)
        if line_match:
            cleaned_lines.append(line_match.group(1))
        elif re.match(r"^\d+:$", line): # empty line with just line number
            cleaned_lines.append("")
            
    with open(target, "w", encoding="utf-8") as f:
        f.write("\n".join(cleaned_lines))
    print("Restored from log successfully!")
else:
    print("Could not find the block in log.")
