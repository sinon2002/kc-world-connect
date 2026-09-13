import { Plus, Trash2, Check, Loader2 } from "lucide-react";
import { type ReactNode, useState } from "react";

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-ink">{label}</label>
      {children}
    </div>
  );
}

export const inputClass =
  "w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={inputClass + " " + (props.className ?? "")} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={inputClass + " " + (props.className ?? "")} />;
}

export function AdminCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-bold tracking-wide text-ink uppercase">{title}</h3>
      {children}
    </div>
  );
}

export function ListItemShell({
  children,
  onRemove,
}: {
  children: ReactNode;
  onRemove: () => void;
}) {
  return (
    <div className="relative rounded-xl border border-border/70 bg-secondary/40 p-4">
      <button
        type="button"
        onClick={onRemove}
        className="absolute top-3 right-3 inline-flex size-7 items-center justify-center rounded-full bg-white text-red-500 shadow-sm transition-colors hover:bg-red-50"
        aria-label="Удалить"
      >
        <Trash2 className="size-3.5" />
      </button>
      {children}
    </div>
  );
}

export function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-primary/50 px-3 py-2 text-xs font-bold text-primary transition-colors hover:bg-secondary"
    >
      <Plus className="size-4" />
      {label}
    </button>
  );
}

/** Кнопка "Сохранить" с индикатором состояния */
export function SaveBar({ onSave }: { onSave: () => Promise<void> }) {
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  return (
    <div className="sticky bottom-0 -mx-5 mt-6 flex items-center justify-end gap-3 border-t border-border/70 bg-white/95 px-5 py-3 backdrop-blur">
      {state === "saved" && (
        <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
          <Check className="size-3.5" /> Сохранено
        </span>
      )}
      {state === "error" && (
        <span className="text-xs font-semibold text-red-600">Ошибка сохранения</span>
      )}
      <button
        type="button"
        disabled={state === "saving"}
        onClick={async () => {
          setState("saving");
          try {
            await onSave();
            setState("saved");
            setTimeout(() => setState("idle"), 2000);
          } catch {
            setState("error");
          }
        }}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {state === "saving" && <Loader2 className="size-4 animate-spin" />}
        Сохранить изменения
      </button>
    </div>
  );
}
