"use client";

import { ROLES, type RoleId } from "@/lib/data";

export default function TopBar(props: {
  title: string;
  subtitle: string;
  disclaimer: string;
  q: string;
  setQ: (v: string) => void;
  role: RoleId | "all";
  setRole: (v: RoleId | "all") => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-3xl px-4 py-4">
        <div className="space-y-1">
          <h1 className="text-base font-semibold leading-tight">{props.title}</h1>
          <p className="text-xs text-slate-400">{props.subtitle}</p>
          <p className="text-xs text-slate-500">{props.disclaimer}</p>
        </div>

        <div className="mt-3 flex gap-2">
          <input
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-white/20"
            placeholder="Pesquisar: VDF, AO/ISO, benefícios, auditoria..."
            value={props.q}
            onChange={(e) => props.setQ(e.target.value)}
          />
          <select
            className="w-40 rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-white/20"
            value={props.role}
            onChange={(e) => props.setRole(e.target.value as any)}
          >
            <option value="all">Todos</option>
            {ROLES.map((r) => (
              <option key={r.id} value={r.id}>
                {r.icon} {r.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
