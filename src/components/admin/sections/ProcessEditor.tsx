import { useState } from "react";
import { useContentSection, newId } from "@/lib/content";
import { AdminCard, Field, TextInput, TextArea, AddButton, ListItemShell, SaveBar } from "../AdminUi";

export function ProcessEditor() {
  const [process, save] = useContentSection("process");
  const [local, setLocal] = useState(process);

  return (
    <AdminCard title="Блок «Маршрут поступления»">
      <div className="grid gap-4">
        <Field label="Метка-эйброу (например «Маршрут поступления»)">
          <TextInput value={local.eyebrow} onChange={(e) => setLocal((l) => ({ ...l, eyebrow: e.target.value }))} />
        </Field>
        <Field label="Заголовок">
          <TextArea rows={2} value={local.heading} onChange={(e) => setLocal((l) => ({ ...l, heading: e.target.value }))} />
        </Field>
        <Field label="Подзаголовок">
          <TextArea rows={2} value={local.subtitle} onChange={(e) => setLocal((l) => ({ ...l, subtitle: e.target.value }))} />
        </Field>
      </div>

      <p className="mt-6 mb-3 text-sm font-bold text-ink">Шаги (нумеруются автоматически по порядку)</p>
      <div className="grid gap-4">
        {local.steps.map((item) => (
          <ListItemShell
            key={item.id}
            onRemove={() => setLocal((l) => ({ ...l, steps: l.steps.filter((it) => it.id !== item.id) }))}
          >
            <Field label="Название шага">
              <TextInput
                value={item.title}
                onChange={(e) =>
                  setLocal((l) => ({ ...l, steps: l.steps.map((it) => (it.id === item.id ? { ...it, title: e.target.value } : it)) }))
                }
              />
            </Field>
            <div className="mt-2.5">
              <Field label="Описание шага">
                <TextArea
                  rows={2}
                  value={item.text}
                  onChange={(e) =>
                    setLocal((l) => ({ ...l, steps: l.steps.map((it) => (it.id === item.id ? { ...it, text: e.target.value } : it)) }))
                  }
                />
              </Field>
            </div>
          </ListItemShell>
        ))}
      </div>
      <div className="mt-4">
        <AddButton
          onClick={() =>
            setLocal((l) => ({ ...l, steps: [...l.steps, { id: newId("pr"), title: "Новый шаг", text: "" }] }))
          }
          label="Добавить шаг"
        />
      </div>

      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}
