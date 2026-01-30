"use client";

import { CHECKLISTS, ROLES, type RoleId } from "@/lib/data";
import { includesQ } from "@/lib/utils";

export default function Checklists({ q, role }: { q: string; role: RoleId | "all" }) {
  const items = CHECKLISTS.filter((c) => (role === "all" ? true : c.role === role)).filter(
    (c) => !q || includesQ(q, c.title) || c.items.some((i) => includesQ(q, i))
  );

  return (
    <section className="space-y-3">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <h2 className="text-sm font-semibold">Checklists por função</h2>
        <p className="mt-1 text-xs text-slate-400">Use como “rota diária”.</p>
      </div>

      {items.map((c) => {
        const roleMeta = ROLES.find((r) => r.id === c.role);
        return (
          <article key={c.role} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <h3 className="text-sm font-semibold">
              {roleMeta?.icon} {c.title}
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-200">
              {c.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </article>
        );
      })}
    </section>
  );
}
