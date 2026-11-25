import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "My deploy failed at 9:03, my inbox hit 4,000 unread, and the stand-up that should've been an email asked me to circle back — I did. To bed.";

if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
