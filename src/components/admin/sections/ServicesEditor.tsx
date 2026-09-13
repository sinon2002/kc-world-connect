import { useState } from "react";
import { useContentSection, newId, type ServiceItem } from "@/lib/content";
import { AdminCard, Field, TextInput, AddButton, ListItemShell, SaveBar } from "../AdminUi";
import { Trash2 } from "lucide-react";

export function ServicesEditor() {
  const [services, save] = useContentSection("services");
  const [local, setLocal] = useState(services);

  const updateTabLabel = (tabId: string, label: string) =>
    setLocal((l) => ({ ...l, tabs: l.tabs.map((t) => (t.id === tabId ? { ...t, label } : t)) }));

  const updateService = (tabId: string, serviceId: string, patch: Partial<ServiceItem>) =>
    setLocal((l) => ({
      ...l,
      tabs: l.tabs.map((t) =>
        t.id !== tabId
          ? t
          : { ...t, services: t.services.map((s) => (s.id === serviceId ? { ...s, ...patch } : s)) }
      ),
    }));

  const removeService = (tabId: string, serviceId: string) =>
    setLocal((l) => ({
      ...l,
      tabs: l.tabs.map((t) =>
        t.id !== tabId ? t : { ...t, services: t.services.filter((s) => s.id !== serviceId) }
      ),
    }));

  const addService = (tabId: string) =>
    setLocal((l) => ({
      ...l,
      tabs: l.tabs.map((t) =>
        t.id !== tabId
          ? t
          : {
              ...t,
              services: [
                ...t.services,
                { id: newId("svc"), title: "Новая услуга", includes: [], priceUsd: "по запросу", priceKgs: "" },
              ],
            }
      ),
    }));

  return (
    <AdminCard title="Услуги и стоимость">
      <Field label="Заголовок раздела">
        <TextInput value={local.heading} onChange={(e) => setLocal((l) => ({ ...l, heading: e.target.value }))} />
      </Field>

      <div className="mt-6 space-y-6">
        {local.tabs.map((tab) => (
          <div key={tab.id} className="rounded-xl border border-border/70 p-4">
            <Field label="Название вкладки">
              <TextInput value={tab.label} onChange={(e) => updateTabLabel(tab.id, e.target.value)} />
            </Field>

            <div className="mt-4 space-y-3">
              {tab.services.map((s) => (
                <ListItemShell key={s.id} onRemove={() => removeService(tab.id, s.id)}>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <Field label="Название услуги">
                      <TextInput value={s.title} onChange={(e) => updateService(tab.id, s.id, { title: e.target.value })} />
                    </Field>
                    <div />
                    <Field label="Цена (USD)">
                      <TextInput
                        value={s.priceUsd}
                        onChange={(e) => updateService(tab.id, s.id, { priceUsd: e.target.value })}
                      />
                    </Field>
                    <Field label="Цена (сом)">
                      <TextInput
                        value={s.priceKgs}
                        onChange={(e) => updateService(tab.id, s.id, { priceKgs: e.target.value })}
                      />
                    </Field>
                  </div>

                  <div className="mt-2.5">
                    <p className="mb-1.5 text-xs font-semibold text-ink">Что входит</p>
                    <div className="space-y-1.5">
                      {s.includes.map((inc, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <TextInput
                            value={inc}
                            onChange={(e) =>
                              updateService(tab.id, s.id, {
                                includes: s.includes.map((x, xi) => (xi === i ? e.target.value : x)),
                              })
                            }
                          />
                          <button
                            type="button"
                            onClick={() =>
                              updateService(tab.id, s.id, { includes: s.includes.filter((_, xi) => xi !== i) })
                            }
                            className="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-lg text-red-500 hover:bg-red-50"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="mt-1.5">
                      <AddButton
                        onClick={() => updateService(tab.id, s.id, { includes: [...s.includes, "Новый пункт"] })}
                        label="Добавить пункт"
                      />
                    </div>
                  </div>
                </ListItemShell>
              ))}
            </div>

            <div className="mt-3">
              <AddButton onClick={() => addService(tab.id)} label="Добавить услугу в эту вкладку" />
            </div>
          </div>
        ))}
      </div>

      <SaveBar onSave={() => save(local)} />
    </AdminCard>
  );
}
