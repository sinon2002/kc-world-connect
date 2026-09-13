import { useState } from "react";
import { useContentSection } from "@/lib/content";
import { AdminCard, Field, TextInput, TextArea, AddButton, SaveBar } from "../AdminUi";
import { MediaUpload } from "../MediaUpload";
import { Trash2 } from "lucide-react";

export function EventsEditor() {
  const [events, save] = useContentSection("events");
  const [local, setLocal] = useState(events);

  return (
    <AdminCard title="Мероприятия">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Метка (бейдж)">
          <TextInput value={local.badge} onChange={(e) => setLocal((l) => ({ ...l, badge: e.target.value }))} />
        </Field>
        <Field label="Акцентная строка">
          <TextInput
            value={local.highlight}
            onChange={(e) => setLocal((l) => ({ ...l, highlight: e.target.value }))}
          />
        </Field>
        <Field label="Текст кнопки">
          <TextInput
            value={local.buttonText}
            onChange={(e) => setLocal((l) => ({ ...l, buttonText: e.target.value }))}
          />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Заголовок">
          <TextArea
            rows={3}
            value={local.heading}
            onChange={(e) => setLocal((l) => ({ ...l, heading: e.target.value }))}
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Фото">
          <MediaUpload
            kind="image"
            value={local.photo}
            onChange={(url) => setLocal((l) => ({ ...l, photo: url }))}
          />
        </Field>
      </div>

      <div className="mt-4">
        <p className="mb-1.5 text-xs font-semibold text-ink">Пункты со ✓</p>
        <div className="space-y-2">
          {local.points.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <TextInput
                value={p}
                onChange={(e) =>
                  setLocal((l) => ({
                    ...l,
                    points: l.points.map((x, xi) => (xi === i ? e.target.value : x)),
                  }))
                }
              />
              <button
                type="button"
                onClick={() => setLocal((l) => ({ ...l, points: l.points.filter((_, xi) => xi !== i) }))}
                className="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-lg text-red-500 hover:bg-red-50"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-2">
          <AddButton
            onClick={() => setLocal((l) => ({ ...l, points: [...l.points, "Новый пункт"] }))}
            label="Добавить пункт"
          />
        </div>
      </div>

      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}
