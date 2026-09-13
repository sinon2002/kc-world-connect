import { useState } from "react";
import { useContentSection, newId, type TeamMember } from "@/lib/content";
import { AdminCard, Field, TextInput, TextArea, AddButton, ListItemShell, SaveBar } from "../AdminUi";
import { MediaUpload } from "../MediaUpload";

export function TeamEditor() {
  const [team, save] = useContentSection("team");
  const [local, setLocal] = useState(team);

  const updateItem = (id: string, patch: Partial<TeamMember>) =>
    setLocal((l) => ({ ...l, items: l.items.map((it) => (it.id === id ? { ...it, ...patch } : it)) }));

  const removeItem = (id: string) =>
    setLocal((l) => ({ ...l, items: l.items.filter((it) => it.id !== id) }));

  const addItem = () =>
    setLocal((l) => ({
      ...l,
      items: [...l.items, { id: newId("t"), name: "Имя Фамилия", role: "Должность", bio: "", photo: undefined }],
    }));

  return (
    <AdminCard title="Команда">
      <Field label="Заголовок раздела">
        <TextInput value={local.heading} onChange={(e) => setLocal((l) => ({ ...l, heading: e.target.value }))} />
      </Field>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {local.items.map((item) => (
          <ListItemShell key={item.id} onRemove={() => removeItem(item.id)}>
            <MediaUpload kind="image" value={item.photo} onChange={(url) => updateItem(item.id, { photo: url })} label="Фото" />
            <div className="mt-3 space-y-2.5">
              <Field label="Имя">
                <TextInput value={item.name} onChange={(e) => updateItem(item.id, { name: e.target.value })} />
              </Field>
              <Field label="Должность">
                <TextInput value={item.role} onChange={(e) => updateItem(item.id, { role: e.target.value })} />
              </Field>
              <Field label="Краткое описание">
                <TextArea rows={3} value={item.bio} onChange={(e) => updateItem(item.id, { bio: e.target.value })} />
              </Field>
            </div>
          </ListItemShell>
        ))}
      </div>

      <div className="mt-4">
        <AddButton onClick={addItem} label="Добавить сотрудника" />
      </div>

      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}
