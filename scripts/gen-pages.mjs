import { mkdir, writeFile } from "fs/promises";
const N = Number(process.env.PAGES || 4000);
await mkdir("src/pages/bench", { recursive: true });
const page = i => `---
title: Bench Page ${i}
---

# Bench Page ${i}

${"Lorem ipsum ".repeat(200)}
`;
await Promise.all(Array.from({ length: N }, (_, i) =>
  writeFile(`src/pages/bench/page-${i}.md`, page(i))
));
console.log(`Generated ${N} pages.`);
