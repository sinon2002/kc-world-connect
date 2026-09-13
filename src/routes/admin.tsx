import { createFileRoute } from "@tanstack/react-router";
import { AdminGate } from "@/components/admin/AdminGate";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Админ-панель — KC Education Abroad" }, { name: "robots", content: "noindex" }],
  }),
  component: AdminGate,
});
