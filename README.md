# SveltePot

Современное SvelteKit приложение с TypeScript, ESLint, Prettier, Husky, и CI/CD.

## Быстрый старт

```bash
# Установка зависимостей
pnpm install

# Запуск в режиме разработки
pnpm dev

# Сборка для продакшена
pnpm build
```

## Технологии

- **SvelteKit** - фреймворк для веб-приложений
- **TypeScript** - типизированный JavaScript
- **ESLint + Prettier** - линтинг и форматирование кода
- **Husky + lint-staged** - pre-commit хуки
- **GitHub Actions** - CI/CD pipeline
- **Drizzle ORM** - работа с базой данных
- **Tailwind CSS** - стилизация
- **Storybook** - разработка компонентов

## CI/CD

Проект использует GitHub Actions для автоматической проверки кода:

- **Lint** - проверка кода с помощью ESLint
- **Typecheck** - проверка типов TypeScript
- **Build** - сборка проекта

Все проверки должны пройти успешно перед слиянием PR в main ветку.

## Документация

эт о- [Настройка проекта](docs/SETUP.md) - подробная документация по настройке и использованию

- [Руководство по контрибьюции](docs/CONTRIBUTING.md) - конвенции коммитов и правила разработки

## Разработка

```bash
# Проверка кода
pnpm lint

# Проверка типов
pnpm typecheck

# Форматирование
pnpm format

# Тестирование
pnpm test

# Storybook
pnpm storybook
```

## Конвенции коммитов

Проект использует [Conventional Commits](https://www.conventionalcommits.org/). Подробности в [CONTRIBUTING.md](docs/CONTRIBUTING.md).

## Лицензия

MIT
