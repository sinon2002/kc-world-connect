import { useState } from "react";
import { useContentSection } from "@/lib/content";
import { AdminCard, Field, TextInput, TextArea, AddButton, SaveBar } from "../AdminUi";
import { Trash2 } from "lucide-react";

export function ContactEditor() {
  const [contact, save] = useContentSection("contact");
  const [local, setLocal] = useState(contact);

  return (
    <AdminCard title="Блок «Записаться на консультацию»">
      <Field label="Заголовок">
        <TextInput value={local.heading} onChange={(e) => setLocal((l) => ({ ...l, heading: e.target.value }))} />
      </Field>
      <div className="mt-3">
        <Field label="Текст-описание">
          <TextArea rows={3} value={local.paragraph} onChange={(e) => setLocal((l) => ({ ...l, paragraph: e.target.value }))} />
        </Field>
      </div>

      <div className="mt-5">
        <p className="mb-1.5 text-xs font-semibold text-ink">Список стран в выпадающем меню</p>
        <div className="space-y-2">
          {local.countries.map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <TextInput
                value={c}
                onChange={(e) =>
                  setLocal((l) => ({
                    ...l,
                    countries: l.countries.map((x, xi) => (xi === i ? e.target.value : x)),
                  }))
                }
              />
              <button
                type="button"
                onClick={() => setLocal((l) => ({ ...l, countries: l.countries.filter((_, xi) => xi !== i) }))}
                className="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-lg text-red-500 hover:bg-red-50"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-2">
          <AddButton
            onClick={() => setLocal((l) => ({ ...l, countries: [...l.countries, "Новая страна"] }))}
            label="Добавить страну"
          />
        </div>
      </div>

      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}

export function FooterEditor() {
  const [footer, save] = useContentSection("footer");
  const [local, setLocal] = useState(footer);

  return (
    <AdminCard title="Подвал сайта">
      <Field label="Текст копирайта (можно использовать {year} — подставится текущий год)">
        <TextInput value={local.text} onChange={(e) => setLocal({ text: e.target.value })} />
      </Field>
      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}
