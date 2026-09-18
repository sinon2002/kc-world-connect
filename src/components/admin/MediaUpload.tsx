import { useState, DragEvent } from "react";
import { ImageIcon, Loader2, Trash2, Video, Upload, FileText, ExternalLink } from "lucide-react";
import { uploadMedia, supabaseEnabled } from "@/lib/supabase";

export function MediaUpload({
  value,
  onChange,
  kind = "image",
  label,
}: {
  value: string | undefined;
  onChange: (url: string | undefined) => void;
  kind?: "image" | "video";
  label?: string;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Проверяем, является ли загруженный файл PDF-документом
  const isPdf = value?.toLowerCase().split(/[?#]/)[0].endsWith(".pdf");

  async function handleFile(file: File | null) {
    if (!file) return;
    setError(null);
    setBusy(true);
    try {
      const url = await uploadMedia(file);
      onChange(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Не удалось загрузить файл");
    } finally {
      setBusy(false);
    }
  }

  function handleDragOver(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    if (!busy && supabaseEnabled) {
      setIsDragging(true);
    }
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setIsDragging(false);
    if (busy || !supabaseEnabled) return;

    const file = e.dataTransfer.files?.[0] ?? null;
    handleFile(file);
  }

  return (
    <div>
      {label && <label className="mb-1.5 block text-xs font-semibold text-ink">{label}</label>}

      {!supabaseEnabled && (
        <p className="mb-2 rounded-lg bg-amber-50 px-2.5 py-1.5 text-[11px] text-amber-700">
          База данных не подключена — загрузка файлов недоступна.
        </p>
      )}

      {value ? (
        <div className="relative overflow-hidden rounded-xl border border-border/70 bg-secondary p-4 min-h-32 flex items-center justify-center">
          {isPdf ? (
            /* Если это PDF — показываем иконку документа и кнопку «Открыть» */
            <div className="flex flex-col items-center gap-2 py-2">
              <FileText className="size-10 text-primary" />
              <a
                href={value}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Открыть PDF-документ
                <ExternalLink className="size-3" />
              </a>
            </div>
          ) : kind === "image" ? (
            /* Если это обычная картинка */
            <img src={value} alt="" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            /* Если это видео */
            <video src={value} className="absolute inset-0 h-full w-full object-cover" controls />
          )}
          
          <button
            type="button"
            onClick={() => onChange(undefined)}
            className="absolute top-1.5 right-1.5 inline-flex size-7 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 z-10"
            aria-label="Удалить файл"
          >
            <Trash2 className="size-3.5" />
          </button>
        </div>
      ) : (
        <label
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex h-32 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed text-muted-foreground transition-colors ${
            isDragging
              ? "border-primary bg-primary/10 text-primary"
              : "border-border bg-secondary/50 hover:bg-secondary"
          }`}
        >
          {busy ? (
            <Loader2 className="size-5 animate-spin" />
          ) : kind === "image" ? (
            <ImageIcon className="size-5" />
          ) : (
            <Video className="size-5" />
          )}
          <span className="flex items-center gap-1 text-xs font-medium">
            <Upload className="size-3.5" />
            {busy ? "Загрузка..." : isDragging ? "Отпустите для загрузки" : "Загрузить или перетащить файл"}
          </span>
          <input
            type="file"
            /* Разрешаем выбирать изображения и PDF */
            accept={kind === "image" ? "image/*,.pdf" : "video/*"}
            className="hidden"
            disabled={busy || !supabaseEnabled}
            onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
          />
        </label>
      )}
      {error && <p className="mt-1 text-[11px] text-red-600">{error}</p>}
    </div>
  );
}
