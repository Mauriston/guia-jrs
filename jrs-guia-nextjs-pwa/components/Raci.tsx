"use client";

import { RACI, RACI_LEGEND, type RoleId } from "@/lib/data";
import { includesQ } from "@/lib/utils";

export default function Raci({ q, role }: { q: string; role: RoleId | "all" }) {
  const filtered = RACI.filter((r) => !q || includesQ(q, r.task)).filter((r) => {
    if (role === "all") return true;
    const cell = role === "pres" ? r.Pres : role === "sup" ? r.Sup : role === "sec" ? r.Sec : r.Aux;
    return cell.trim() !== "" || (!!q && includesQ(q, r.task));
  });

  return (
    <section className="space-y-3">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <h2 className="text-sm font-semibold">Matriz RACI (I inferido por célula vazia)</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {RACI_LEGEND.map((l) => (
            <span key={l.label} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              {l.icon} {l.label}
            </span>
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-400">
          Regra: célula vazia = “informado por padrão (I)”, salvo exceções explícitas em procedimento.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        <div className="overflow-x-auto">
          <table className="min-w-[720px] w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-200">
              <tr>
                <th className="px-3 py-3 font-semibold">Tarefa</th>
                <th className="px-3 py-3 font-semibold text-right">Pres</th>
                <th className="px-3 py-3 font-semibold text-right">Sup</th>
                <th className="px-3 py-3 font-semibold text-right">Sec</th>
                <th className="px-3 py-3 font-semibold text-right">Aux</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.task} className="border-t border-white/10">
                  <td className="px-3 py-3 text-slate-100">{r.task}</td>
                  <td className="px-3 py-3 text-right">{r.Pres}</td>
                  <td className="px-3 py-3 text-right">{r.Sup}</td>
                  <td className="px-3 py-3 text-right">{r.Sec}</td>
                  <td className="px-3 py-3 text-right">{r.Aux}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
