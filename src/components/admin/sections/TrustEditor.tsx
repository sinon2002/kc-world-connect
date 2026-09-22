import { useState } from "react";
import { useContentSection, newId } from "@/lib/content";
import { AdminCard, Field, TextInput, TextArea, AddButton, ListItemShell, SaveBar } from "../AdminUi";

export function TrustEditor() {
  const [trust, save] = useContentSection("trust");
  const [local, setLocal] = useState(trust);

  return (
    <AdminCard title="Блок «О нас» (Kyrgyz Concept Образование за рубежом)">
      <div className="grid gap-4">
        <Field label="Метка-бейдж (например «О нас»)">
          <TextInput value={local.badge} onChange={(e) => setLocal((l) => ({ ...l, badge: e.target.value }))} />
        </Field>
        <Field label="Заголовок">
          <TextArea rows={2} value={local.heading} onChange={(e) => setLocal((l) => ({ ...l, heading: e.target.value }))} />
        </Field>
        <Field label="Подзаголовок / абзац">
          <TextArea rows={2} value={local.paragraph} onChange={(e) => setLocal((l) => ({ ...l, paragraph: e.target.value }))} />
        </Field>
      </div>

      <p className="mt-6 mb-3 text-sm font-bold text-ink">Карточки (пронумерованы автоматически)</p>
      <div className="grid gap-4">
        {local.cards.map((item) => (
          <ListItemShell
            key={item.id}
            onRemove={() => setLocal((l) => ({ ...l, cards: l.cards.filter((it) => it.id !== item.id) }))}
          >
            <Field label="Заголовок карточки">
              <TextInput
                value={item.title}
                onChange={(e) =>
                  setLocal((l) => ({ ...l, cards: l.cards.map((it) => (it.id === item.id ? { ...it, title: e.target.value } : it)) }))
                }
              />
            </Field>
            <div className="mt-2.5">
              <Field label="Текст карточки">
                <TextArea
                  rows={2}
                  value={item.text}
                  onChange={(e) =>
                    setLocal((l) => ({ ...l, cards: l.cards.map((it) => (it.id === item.id ? { ...it, text: e.target.value } : it)) }))
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
            setLocal((l) => ({ ...l, cards: [...l.cards, { id: newId("tr"), title: "Новая карточка", text: "" }] }))
          }
          label="Добавить карточку"
        />
      </div>

      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}
