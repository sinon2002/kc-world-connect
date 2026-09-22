import { useState } from "react";
import { useContentSection } from "@/lib/content";
import { AdminCard, Field, TextInput, TextArea, SaveBar } from "../AdminUi";

export function TrustStatsEditor() {
  const [trustStats, save] = useContentSection("trustStats");
  const [local, setLocal] = useState(trustStats);

  return (
    <AdminCard title="Блок «Учёба за границей» (статистика)">
      <div className="grid gap-4">
        <Field label="Заголовок">
          <TextArea rows={2} value={local.heading} onChange={(e) => setLocal((l) => ({ ...l, heading: e.target.value }))} />
        </Field>
        <Field label="Подзаголовок">
          <TextInput value={local.subheading} onChange={(e) => setLocal((l) => ({ ...l, subheading: e.target.value }))} />
        </Field>
      </div>

      <p className="mt-6 mb-3 text-sm font-bold text-ink">Карточки с цифрами</p>
      <div className="grid gap-4">
        {local.items.map((item) => (
          <div key={item.id} className="rounded-xl border border-border/70 bg-secondary/40 p-4">
            <Field label="Число (например «10 000+»)">
              <TextInput value={item.number} onChange={(e) => setLocal((l) => ({ ...l, items: l.items.map((it) => (it.id === item.id ? { ...it, number: e.target.value } : it)) }))} />
            </Field>
            <div className="mt-2.5">
              <Field label="Подпись под числом">
                <TextInput value={item.label} onChange={(e) => setLocal((l) => ({ ...l, items: l.items.map((it) => (it.id === item.id ? { ...it, label: e.target.value } : it)) }))} />
              </Field>
            </div>
            <div className="mt-2.5">
              <Field label="Пояснение">
                <TextArea rows={2} value={item.text} onChange={(e) => setLocal((l) => ({ ...l, items: l.items.map((it) => (it.id === item.id ? { ...it, text: e.target.value } : it)) }))} />
              </Field>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 mb-3 text-sm font-bold text-ink">Зелёная карточка справа</p>
      <div className="grid gap-4">
        <Field label="Заголовок зелёной карточки">
          <TextInput value={local.highlightTitle} onChange={(e) => setLocal((l) => ({ ...l, highlightTitle: e.target.value }))} />
        </Field>
        <Field label="Подзаголовок зелёной карточки">
          <TextInput value={local.highlightSubtitle} onChange={(e) => setLocal((l) => ({ ...l, highlightSubtitle: e.target.value }))} />
        </Field>
        <Field label="Текст зелёной карточки">
          <TextArea rows={2} value={local.highlightText} onChange={(e) => setLocal((l) => ({ ...l, highlightText: e.target.value }))} />
        </Field>
      </div>

      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}
