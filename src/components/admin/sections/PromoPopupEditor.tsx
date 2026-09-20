import { useState } from "react";
import { useContentSection } from "@/lib/content";
import { AdminCard, Field, TextInput, TextArea, SaveBar } from "../AdminUi";
import { MediaUpload } from "../MediaUpload";

export function PromoPopupEditor() {
  const [popup, save] = useContentSection("promoPopup");
  const [local, setLocal] = useState(popup);

  return (
    <AdminCard title="Поп-ап консультации">
      <p className="-mt-2 mb-4 text-xs text-muted-foreground">
        Это всплывающее окно, которое появляется, когда посетитель пролистывает сайт.
      </p>

      <label className="mb-4 flex items-center gap-2 text-sm font-semibold text-ink">
        <input
          type="checkbox"
          checked={local.enabled}
          onChange={(e) => setLocal((l) => ({ ...l, enabled: e.target.checked }))}
          className="size-4 rounded border-border accent-primary"
        />
        Показывать поп-ап на сайте
      </label>

      <div className="grid gap-4">
        <Field label="Фото">
          <MediaUpload kind="image" value={local.image} onChange={(url) => setLocal((l) => ({ ...l, image: url }))} />
        </Field>

        <Field label="Заголовок">
          <TextInput value={local.title} onChange={(e) => setLocal((l) => ({ ...l, title: e.target.value }))} />
        </Field>

        <Field label="Описание">
          <TextArea
            rows={3}
            value={local.description}
            onChange={(e) => setLocal((l) => ({ ...l, description: e.target.value }))}
          />
        </Field>

        <Field label="Адрес / доп. строка">
          <TextInput value={local.address} onChange={(e) => setLocal((l) => ({ ...l, address: e.target.value }))} />
        </Field>

        <Field label="Текст кнопки WhatsApp">
          <TextInput
            value={local.buttonText}
            onChange={(e) => setLocal((l) => ({ ...l, buttonText: e.target.value }))}
          />
        </Field>
      </div>

      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}
