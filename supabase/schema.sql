-- Выполнить целиком в Supabase → SQL Editor → New query → Run

-- 1) Таблица с контентом сайта (один JSON-блок на раздел)
create table if not exists site_content (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

alter table site_content enable row level security;

-- Сайт (и админка) читают контент открыто
create policy "site_content_public_read"
  on site_content for select
  using (true);

-- Запись разрешена всем, у кого есть anon-ключ (ключ не публикуется нигде,
-- кроме собранного JS-бандла; реальная защита — пароль в самой админке).
create policy "site_content_public_write"
  on site_content for insert
  with check (true);

create policy "site_content_public_update"
  on site_content for update
  using (true);

-- 2) Хранилище для фото/видео
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

create policy "media_public_read"
  on storage.objects for select
  using (bucket_id = 'media');

create policy "media_public_upload"
  on storage.objects for insert
  with check (bucket_id = 'media');
