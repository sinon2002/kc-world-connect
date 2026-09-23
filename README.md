# KC Education Abroad — Landing

Одностраничный лендинг образовательного консалтингового агентства **KC Education Abroad** (часть бренда Kyrgyz Concept), которое помогает поступать в зарубежные университеты, школы и на языковые курсы.

## Стек

- **React 19** + **TanStack Start** (SSR-фреймворк на базе TanStack Router)
- **Tailwind CSS 4**
- **Supabase** — база данных и хранилище файлов для контента, управляемого через админ-панель
- **Motion** (Framer Motion) — анимации при прокрутке

## Структура

- `src/routes` — страницы (главная, админ-панель)
- `src/components/landing` — блоки лендинга (Hero, Услуги, Команда, Отзывы, FAQ, Контакты и т.д.)
- `src/components/admin` — редактор контента сайта, доступен на `/admin`
- `src/lib/content.tsx` — работа с контентом сайта (загрузка из Supabase, значения по умолчанию)
- `supabase/schema.sql` — схема базы данных и настройки хранилища файлов

## Админ-панель

Доступна по адресу `/admin`. Вход защищён паролем, который задаётся переменной окружения `VITE_ADMIN_PASSWORD` (настраивается в Vercel → Settings → Environment Variables).

## Разработка

Нужен Node.js и npm — [установить через nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <адрес-этого-репозитория>
cd kc-world-connect
npm i
npm run dev
```

## Переменные окружения

Для работы сайта нужны переменные Supabase (URL проекта и публичный anon-ключ) и пароль админ-панели — заданы в настройках проекта на Vercel.
