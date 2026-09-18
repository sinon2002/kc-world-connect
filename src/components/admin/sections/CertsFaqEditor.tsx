import { useState } from "react";
import { useContentSection, newId } from "@/lib/content";
import { AdminCard, Field, TextInput, TextArea, AddButton, ListItemShell, SaveBar } from "../AdminUi";
import { MediaUpload } from "../MediaUpload";

export function CertsEditor() {
  const [certs, save] = useContentSection("certs");
  const [local, setLocal] = useState(certs);

  return (
    <AdminCard title="Сертификаты">
      <div className="grid gap-4">
        {local.items.map((item) => (
          <ListItemShell
            key={item.id}
            onRemove={() => setLocal((l) => ({ ...l, items: l.items.filter((it) => it.id !== item.id) }))}
          >
            <Field label="Изображение сертификата">
              <MediaUpload
                kind="image"
                value={item.image}
                onChange={(url) =>
                  setLocal((l) => ({
                    ...l,
                    items: l.items.map((it) => (it.id === item.id ? { ...it, image: url } : it)),
                  }))
                }
              />
            </Field>
            <div className="mt-2.5">
              <Field label="Название сертификата">
                <TextInput
                  value={item.title}
                  onChange={(e) =>
                    setLocal((l) => ({
                      ...l,
                      items: l.items.map((it) => (it.id === item.id ? { ...it, title: e.target.value } : it)),
                    }))
                  }
                />
              </Field>
            </div>
            <div className="mt-2.5">
              <Field label="Описание">
                <TextArea
                  rows={3}
                  value={item.text}
                  onChange={(e) =>
                    setLocal((l) => ({
                      ...l,
                      items: l.items.map((it) => (it.id === item.id ? { ...it, text: e.target.value } : it)),
                    }))
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
            setLocal((l) => ({
              ...l,
              items: [...l.items, { id: newId("c"), title: "Новый сертификат", text: "", image: undefined }],
            }))
          }
          label="Добавить сертификат"
        />
      </div>
      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}
