import { useState } from "react";
import { useContentSection, newId, type StoryItem } from "@/lib/content";
import { AdminCard, Field, TextInput, TextArea, AddButton, ListItemShell, SaveBar } from "../AdminUi";
import { MediaUpload } from "../MediaUpload";

export function StoriesEditor() {
  const [stories, save] = useContentSection("stories");
  const [local, setLocal] = useState(stories);

  const updateItem = (id: string, patch: Partial<StoryItem>) =>
    setLocal((l) => ({ ...l, items: l.items.map((it) => (it.id === id ? { ...it, ...patch } : it)) }));

  const removeItem = (id: string) =>
    setLocal((l) => ({ ...l, items: l.items.filter((it) => it.id !== id) }));

  const addItem = () =>
    setLocal((l) => ({
      ...l,
      items: [...l.items, { id: newId("s"), name: "Имя Ф.", place: "Страна · Вуз · Программа", quote: "", photo: undefined, video: undefined, videoCover: undefined }],
    }));

  return (
    <AdminCard title="Истории студентов">
      <Field label="Заголовок раздела">
        <TextInput value={local.heading} onChange={(e) => setLocal((l) => ({ ...l, heading: e.target.value }))} />
      </Field>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {local.items.map((item) => (
          <ListItemShell key={item.id} onRemove={() => removeItem(item.id)}>
            <div className="grid grid-cols-2 gap-2">
              <MediaUpload kind="image" value={item.photo} onChange={(url) => updateItem(item.id, { photo: url })} label="Фото" />
              <MediaUpload kind="video" value={item.video} onChange={(url) => updateItem(item.id, { video: url })} label="Видео (необязательно)" />
            </div>
            {item.video && (
              <div className="mt-2">
                <MediaUpload kind="image" value={item.videoCover} onChange={(url) => updateItem(item.id, { videoCover: url })} label="Обложка для видео (необязательно)" />
              </div>
            )}
            <div className="mt-3 space-y-2.5">
              <Field label="Имя">
                <TextInput value={item.name} onChange={(e) => updateItem(item.id, { name: e.target.value })} />
              </Field>
              <Field label="Страна · Вуз · Программа">
                <TextInput value={item.place} onChange={(e) => updateItem(item.id, { place: e.target.value })} />
              </Field>
              <Field label="Цитата">
                <TextArea rows={3} value={item.quote} onChange={(e) => updateItem(item.id, { quote: e.target.value })} />
              </Field>
            </div>
          </ListItemShell>
        ))}
      </div>

      <div className="mt-4">
        <AddButton onClick={addItem} label="Добавить историю студента" />
      </div>

      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}
