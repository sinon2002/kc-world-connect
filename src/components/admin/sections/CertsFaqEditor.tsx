import { useState } from "react";
import { useContentSection, newId } from "@/lib/content";
import { AdminCard, Field, TextInput, TextArea, AddButton, ListItemShell, SaveBar } from "../AdminUi";

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
            setLocal((l) => ({ ...l, items: [...l.items, { id: newId("c"), title: "Новый сертификат", text: "" }] }))
          }
          label="Добавить сертификат"
        />
      </div>
      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}

export function FaqEditor() {
  const [faq, save] = useContentSection("faq");
  const [local, setLocal] = useState(faq);

  return (
    <AdminCard title="Вопросы и ответы (FAQ)">
      <div className="grid gap-4">
        {local.items.map((item) => (
          <ListItemShell
            key={item.id}
            onRemove={() => setLocal((l) => ({ ...l, items: l.items.filter((it) => it.id !== item.id) }))}
          >
            <Field label="Вопрос">
              <TextInput
                value={item.q}
                onChange={(e) =>
                  setLocal((l) => ({
                    ...l,
                    items: l.items.map((it) => (it.id === item.id ? { ...it, q: e.target.value } : it)),
                  }))
                }
              />
            </Field>
            <div className="mt-2.5">
              <Field label="Ответ">
                <TextArea
                  rows={3}
                  value={item.a}
                  onChange={(e) =>
                    setLocal((l) => ({
                      ...l,
                      items: l.items.map((it) => (it.id === item.id ? { ...it, a: e.target.value } : it)),
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
            setLocal((l) => ({ ...l, items: [...l.items, { id: newId("f"), q: "Новый вопрос", a: "" }] }))
          }
          label="Добавить вопрос"
        />
      </div>
      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}
