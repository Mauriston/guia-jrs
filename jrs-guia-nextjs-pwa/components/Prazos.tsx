"use client";

import { DEADLINES, type RoleId } from "@/lib/data";
import { includesQ } from "@/lib/utils";

export default function Prazos({ q, role }: { q: string; role: RoleId | "all" }) {
  const items = DEADLINES.filter((d) => {
    const roleOk = role === "all" ? true : (d.jrsOwner ?? []).includes(role);
    const qOk =
      !q ||
      includesQ(q, d.target, d.title, d.deadline, d.who) ||
      (d.tags ?? []).some((t) => includesQ(q, t));
    return roleOk && qOk;
  });

  return (
    <section className="space-y-3">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <h2 className="text-sm font-semibold">Prazos críticos</h2>
        <p className="mt-1 text-xs text-slate-400">
          Cards com passo-a-passo. Filtre por função (topo) para enxergar só o que é mais relevante.
        </p>
      </div>

      {items.length === 0 && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
          Nenhum item encontrado. Ajuste a busca ou o filtro de função.
        </div>
      )}

      {items.map((d) => (
        <article key={d.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              Alvo: <b>{d.target}</b>
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              Prazo: <b>{d.deadline}</b>
            </span>
          </div>

          <h3 className="mt-3 text-sm font-semibold">{d.title}</h3>
          <p className="mt-1 text-xs text-slate-400">
            <b>Responsável:</b> {d.who}
          </p>

          <details className="mt-3 rounded-xl border border-white/10 bg-slate-900/40 p-3">
            <summary className="cursor-pointer text-sm font-medium">O que fazer</summary>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-200">
              {d.whatToDo.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </details>

          <div className="mt-3 flex flex-wrap gap-2">
            {d.tags.slice(0, 8).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
