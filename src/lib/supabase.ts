import { createClient } from "@supabase/supabase-js";

const url = import.meta.env['VITE_SUPABASE_URL'] as string | undefined;
const anonKey = import.meta.env['VITE_SUPABASE_ANON_KEY'] as string | undefined;

// Если ключи не заданы — сайт продолжит работать на дефолтных (зашитых) текстах,
// просто админка и загрузка изменений будут недоступны.
export const supabaseEnabled = Boolean(url && anonKey);

export const supabase = supabaseEnabled
  ? createClient(url as string, anonKey as string)
  : null;

export const MEDIA_BUCKET = "media";

/** Загружает файл (фото/видео) в Supabase Storage и возвращает публичную ссылку */
export async function uploadMedia(file: File): Promise<string> {
  if (!supabase) throw new Error("Supabase не подключён");
  const ext = file.name.split(".").pop();
  const path = `${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from(MEDIA_BUCKET).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw error;
  const { data } = supabase.storage.from(MEDIA_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}
