/**
 * Копіює файли уроків з кореня репозиторію в content collection Starlight.
 *
 * Уроки живуть у корені проєкту (01_zminni_ta_print.md … 50_lesson_50.md)
 * і є єдиним джерелом правди. Перед збіркою/розробкою ми копіюємо
 * файли в src/content/docs/lessons/, додаючи до копій необхідний YAML frontmatter
 * (title), якого немає в оригінальних файлах Markdown (вони починаються з H1).
 *
 * Запуск: node scripts/sync-content.mjs
 */
import { mkdir, readFile, writeFile, access, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..', '..');
const targetDocs = path.resolve(__dirname, '..', 'src', 'content', 'docs');
const targetLessons = path.join(targetDocs, 'lessons');

// Отримуємо точні назви файлів з кореня (лише файли, не підкаталоги)
const rootEntries = await readdir(root, { withFileTypes: true });
const actualLessonFiles = [];
for (const entry of rootEntries) {
  if (entry.isFile() && entry.name.match(/^\d{2}_.+\.md$/)) {
    actualLessonFiles.push(entry.name);
  }
}

// Сортуємо за номером
actualLessonFiles.sort((a, b) => parseInt(a.slice(0, 2)) - parseInt(b.slice(0, 2)));

await mkdir(targetLessons, { recursive: true });

// Видаляємо застарілі копії, яких більше немає
const existing = await readdir(targetLessons).catch(() => []);
for (const f of existing) {
  if (!actualLessonFiles.includes(f)) {
    await import('node:fs/promises').then((m) =>
      m.rm(path.join(targetLessons, f), { force: true })
    );
  }
}

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

async function renderWithFrontmatter(srcPath, fallbackTitle) {
  const content = await readFile(srcPath, 'utf-8');
  const title = extractTitle(content) ?? fallbackTitle;
  return `---
title: ${JSON.stringify(title)}
---

${content}`;
}

let copied = 0;

for (const file of actualLessonFiles) {
  const src = path.join(root, file);
  try {
    await access(src);
  } catch {
    console.warn(`⚠️  Пропущено (не знайдено): ${file}`);
    continue;
  }
  const lessonNum = parseInt(file.slice(0, 2), 10);
  const out = await renderWithFrontmatter(src, `Урок ${lessonNum}`);
  await writeFile(path.join(targetLessons, file), out);
  copied++;
}

console.log(`✔ Скопійовано та опрацьовано ${copied} файлів у src/content/docs/lessons/`);