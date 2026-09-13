import { useState, type FormEvent } from "react";
import { Lock } from "lucide-react";
import { AdminPanel } from "./AdminPanel";

const SESSION_KEY = "kc-admin-session";

export function AdminGate() {
  const envPassword = import.meta.env['VITE_ADMIN_PASSWORD'] as string | undefined;
  const [unlocked, setUnlocked] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1"
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (envPassword && password === envPassword) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (unlocked) return <AdminPanel />;

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/40 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg">
        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Lock className="size-5" />
        </div>
        <h1 className="mt-4 text-center text-lg font-bold text-ink">Вход в админ-панель</h1>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          Введите пароль администратора сайта
        </p>

        {!envPassword && (
          <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
            Пароль ещё не настроен: добавь переменную окружения{" "}
            <code className="font-mono">VITE_ADMIN_PASSWORD</code> в настройках Vercel.
          </p>
        )}

        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          className="mt-5 w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
        />
        {error && <p className="mt-2 text-xs font-semibold text-red-600">Неверный пароль</p>}

        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Войти
        </button>
      </form>
    </div>
  );
}
