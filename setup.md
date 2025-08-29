Отлично — обновляю S1.1 под npx sv create и добавляю лучшие практики, чтобы проект развернулся «из коробки» чисто и предсказуемо.

⸻

🎟️ Ticket: S1.1 Инициализация репозитория (через npx sv create)

Goal: Развернуть базовый SvelteKit-проект командой npx sv create, настроить TS/ESLint/Prettier/svelte-check, Husky+lint-staged и стартовые алиасы, чтобы pnpm dev/build/lint/typecheck работали без ошибок.

Scope
• In: инициализация через npx sv create, настройка линтинга/форматтера/хуков, базовые скрипты, стартовая документация.
• Out: CI, деплой, БД, UI-библиотеки (в следующих тикетах).

AC (Gherkin)
• Given новый разработчик клонирует репозиторий
When он выполняет pnpm install && pnpm dev
Then локально открывается базовый SvelteKit (страница Hello).
• Given разработчик запускает pnpm lint
Then ESLint проходит без ошибок.
• Given разработчик запускает pnpm typecheck
Then svelte-check проходит без ошибок.
• Given разработчик выполняет git commit
Then Husky + lint-staged запускают линт/типизацию на изменённых файлах и не дают закоммитить при ошибках.
• Given разработчик запускает pnpm build
Then проект собирается без ошибок.

DoD
• Проект создан: npx sv create app --template sveltekit --typescript (или эквивалентный пресет).
• Пакетный менеджер — pnpm; в корне .npmrc с engine-strict=false, .nvmrc (LTS), .editorconfig, .gitattributes.
• ESLint настроен: eslint-config + eslint-plugin-svelte + поддержка TS и Svelte файлов.
• Prettier настроен: prettier + prettier-plugin-svelte.
• Типизация: строгие флаги в tsconfig.json + svelte-check в скрипте typecheck.
• Husky + lint-staged подключены (pre-commit: линт + типчек изменённых файлов).
• Vite alias @/_ → src/_ настроен (и в tsconfig.json, и в vite.config.ts).
• Базовые npm-скрипты работают: dev, build, preview, lint, format, typecheck, prepare.
• Документация: docs/SETUP.md — требования, команды запуска, быстрые проверки.

⸻

Рекомендованный план выполнения (команды) 1. Создание проекта

# из пустой папки репозитория

npx sv create app --template sveltekit --typescript
cd app
pnpm install

    2.	Базовые файлы качества

# редакторы/гит

printf "node\npnpm-\n.env*\n.vercel\n" > .gitignore
printf "lts/*\n" > .nvmrc
cat > .editorconfig <<'EOF'
root = true
[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
EOF
git init

    3.	ESLint + Prettier

pnpm add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin \
 eslint-plugin-svelte eslint-config-prettier \
 prettier prettier-plugin-svelte

# .eslintrc.cjs (минимал, дружит с Svelte+TS)

cat > .eslintrc.cjs <<'EOF'
/_ eslint-env node _/
module.exports = {
root: true,
parser: "@typescript-eslint/parser",
plugins: ["@typescript-eslint", "svelte"],
extends: [
"eslint:recommended",
"plugin:@typescript-eslint/recommended",
"plugin:svelte/recommended",
"prettier"
],
overrides: [
{
files: ["**/*.svelte"],
parser: "svelte-eslint-parser",
parserOptions: {
parser: "@typescript-eslint/parser"
}
}
],
ignorePatterns: ["build/", ".svelte-kit/", "node_modules/"]
};
EOF

# .prettierrc

cat > .prettierrc <<'EOF'
{
"printWidth": 100,
"singleQuote": true,
"semi": true,
"trailingComma": "es5",
"plugins": ["prettier-plugin-svelte"]
}
EOF

    4.	svelte-check (типизация Svelte)

pnpm add -D svelte-check typescript

    5.	Husky + lint-staged

pnpm dlx husky-init && pnpm install
pnpm add -D lint-staged

# package.json: scripts + lint-staged

# (см. следующий блок)

    6.	Алиасы и строгая типизация

# vite.config.ts — alias '@' -> '/src'

# tsconfig.json — paths '@/_' -> './src/_'

⸻

Рекомендованные настройки файлов

package.json (фрагмент)

{
"type": "module",
"scripts": {
"dev": "vite dev",
"build": "vite build",
"preview": "vite preview",
"lint": "eslint . --ext .ts,.svelte",
"format": "prettier --write .",
"typecheck": "svelte-check --tsconfig ./tsconfig.json",
"prepare": "husky"
},
"lint-staged": {
"_.{ts,svelte}": [
"eslint --fix"
],
"_.{ts,svelte,js,json,md,css}": [
"prettier --write"
],
"\*.{ts,svelte}": [
"svelte-check --threshold error --fail-on-warnings"
]
}
}

.husky/pre-commit

#!/usr/bin/env sh
. "$(dirname -- "$0")/\_/husky.sh"

pnpm lint-staged

vite.config.ts (фрагмент)

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
plugins: [sveltekit()],
resolve: {
alias: {
'@': path.resolve(\_\_dirname, 'src')
}
}
});

tsconfig.json (ключевые поля)

{
"compilerOptions": {
"strict": true,
"noUncheckedIndexedAccess": true,
"noImplicitOverride": true,
"resolveJsonModule": true,
"baseUrl": ".",
"paths": {
"@/_": ["src/_"]
}
}
}

⸻

docs/SETUP.md (содержание) 1. Требования: Node LTS, pnpm. 2. Команды:
• pnpm install
• pnpm dev → http://localhost:5173
• pnpm lint / pnpm typecheck / pnpm build / pnpm preview 3. Pre-commit хуки (Husky + lint-staged), как починить ошибки линта/типов. 4. Структура src и использование алиаса @/.
