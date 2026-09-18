import { useState, DragEvent } from "react";
import { ImageIcon, Loader2, Trash2, Video, Upload } from "lucide-react";
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
        <div className="relative overflow-hidden rounded-xl border border-border/70 bg-secondary">
          {kind === "image" ? (
            <img src={value} alt="" className="h-32 w-full object-cover" />
          ) : (
            <video src={value} className="h-32 w-full object-cover" controls />
          )}
          <button
            type="button"
            onClick={() => onChange(undefined)}
            className="absolute top-1.5 right-1.5 inline-flex size-7 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
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
            {busy ? "Загрузка..." : isDragging ? "Отпустите для загрузки" : kind === "image" ? "Загрузить или перетащить фото" : "Загрузить или перетащить видео"}
          </span>
          <input
            type="file"
            accept={kind === "image" ? "image/*" : "video/*"}
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
