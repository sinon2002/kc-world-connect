import { useState } from "react";
import { useContentSection, newId, type PartnerItem } from "@/lib/content";
import { AdminCard, Field, TextInput, AddButton, ListItemShell, SaveBar } from "../AdminUi";
import { MediaUpload } from "../MediaUpload";

export function PartnersEditor() {
  const [partners, save] = useContentSection("partners");
  const [local, setLocal] = useState(partners);

  const updateItem = (id: string, patch: Partial<PartnerItem>) =>
    setLocal((l) => ({ ...l, items: l.items.map((it) => (it.id === id ? { ...it, ...patch } : it)) }));

  const removeItem = (id: string) =>
    setLocal((l) => ({ ...l, items: l.items.filter((it) => it.id !== id) }));

  const addItem = () =>
    setLocal((l) => ({ ...l, items: [...l.items, { id: newId("p"), name: "Новый университет", image: undefined }] }));

  return (
    <AdminCard title="Университеты-партнёры (слайдер)">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Заголовок раздела">
          <TextInput value={local.heading} onChange={(e) => setLocal((l) => ({ ...l, heading: e.target.value }))} />
        </Field>
        <Field label="Подзаголовок">
          <TextInput
            value={local.subheading}
            onChange={(e) => setLocal((l) => ({ ...l, subheading: e.target.value }))}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {local.items.map((item) => (
          <ListItemShell key={item.id} onRemove={() => removeItem(item.id)}>
            <MediaUpload
              kind="image"
              value={item.image}
              onChange={(url) => updateItem(item.id, { image: url })}
            />
            <div className="mt-3">
              <Field label="Название вуза">
                <TextInput value={item.name} onChange={(e) => updateItem(item.id, { name: e.target.value })} />
              </Field>
            </div>
          </ListItemShell>
        ))}
      </div>

      <div className="mt-4">
        <AddButton onClick={addItem} label="Добавить университет" />
      </div>

      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}
