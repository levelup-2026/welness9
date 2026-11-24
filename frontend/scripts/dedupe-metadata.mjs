import { readdir, readFile, writeFile } from 'node:fs/promises';

const buildDirectory = new URL('../build/', import.meta.url);
const files = await readdir(buildDirectory, { recursive: true });

for (const file of files.filter((name) => name.endsWith('.html'))) {
  const path = new URL(file.replaceAll('\\', '/'), buildDirectory);
  const html = await readFile(path, 'utf8');
  const updated = html.replace(/<head\b[^>]*>[\s\S]*?<\/head>/i, (head) => {
    const titles = /<title\b[^>]*>[^<]*<\/title>/gi;
    const descriptions = /<meta\b(?=[^>]*\bname=(?:"description"|'description'|description(?=[\s/>])))[^>]*>/gi;

    for (const tags of [titles, descriptions]) {
      const defaults = /\sdata-default-metadata\b/i;
      if (Array.from(head.matchAll(tags)).some(([tag]) => !defaults.test(tag))) {
        head = head.replace(tags, (tag) => defaults.test(tag) ? '' : tag);
      }
    }

    return head;
  });

  if (updated !== html) {
    await writeFile(path, updated);
  }
}
