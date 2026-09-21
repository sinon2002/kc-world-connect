import { useState } from "react";
import { useContentSection } from "@/lib/content";
import { AdminCard, Field, TextInput, TextArea, SaveBar } from "../AdminUi";

export function HeroEditor() {
  const [hero, save] = useContentSection("hero");
  const [local, setLocal] = useState(hero);

  const set = <K extends keyof typeof local>(k: K, v: (typeof local)[K]) =>
    setLocal((l) => ({ ...l, [k]: v }));

  return (
    <AdminCard title="Шапка сайта (Hero)">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Верхняя строка (маленькая, над заголовком)">
          <TextInput value={local.eyebrow} onChange={(e) => set("eyebrow", e.target.value)} />
        </Field>
        <Field label="Метка на бейдже слева от парня (например «Кампус мечты»)">
          <TextInput value={local.dreamBadge} onChange={(e) => set("dreamBadge", e.target.value)} />
        </Field>
        <Field label="Заголовок, обычная часть">
          <TextInput value={local.titleLine} onChange={(e) => set("titleLine", e.target.value)} />
        </Field>
              <Field label="Заголовок, выделенная синим часть (Enter — перенос строки в нужном месте)">
          <TextArea rows={2} value={local.titleHighlight} onChange={(e) => set("titleHighlight", e.target.value)} />
        </Field>
        <Field label="Плашка строка 1">
          <TextInput value={local.badgeLine1} onChange={(e) => set("badgeLine1", e.target.value)} />
        </Field>
        <Field label="Плашка строка 2">
          <TextInput value={local.badgeLine2} onChange={(e) => set("badgeLine2", e.target.value)} />
        </Field>
        <Field label="Город отправления (бейдж у ног)">
          <TextInput value={local.cityFrom} onChange={(e) => set("cityFrom", e.target.value)} />
        </Field>
        <Field label="Город назначения (бейдж справа)">
          <TextInput value={local.cityTo} onChange={(e) => set("cityTo", e.target.value)} />
        </Field>
        <Field label="Текст основной кнопки">
          <TextInput value={local.ctaPrimary} onChange={(e) => set("ctaPrimary", e.target.value)} />
        </Field>
        <Field label="Текст второй кнопки">
          <TextInput value={local.ctaSecondary} onChange={(e) => set("ctaSecondary", e.target.value)} />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Абзац с описанием">
          <TextArea rows={4} value={local.paragraph} onChange={(e) => set("paragraph", e.target.value)} />
        </Field>
      </div>
      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}
