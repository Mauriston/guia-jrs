"use client";

import { useMemo, useState } from "react";
import { addBusinessDays, addCalendarDays } from "@/lib/utils";

type Preset = { id: string; label: string; kind: "business" | "calendar"; days: number };

const PRESETS: Preset[] = [
  { id: "7b", label: "7 dias úteis", kind: "business", days: 7 },
  { id: "10b", label: "10 dias úteis", kind: "business", days: 10 },
  { id: "15c", label: "15 dias (corridos)", kind: "calendar", days: 15 },
  { id: "20c", label: "20 dias (corridos)", kind: "calendar", days: 20 },
  { id: "45c", label: "45 dias (corridos)", kind: "calendar", days: 45 },
  { id: "60c", label: "60 dias (corridos)", kind: "calendar", days: 60 },
];

export default function Calc() {
  const isoToday = new Date().toISOString().slice(0, 10);
  const [start, setStart] = useState(isoToday);
  const [presetId, setPresetId] = useState(PRESETS[0].id);

  const due = useMemo(() => {
    const p = PRESETS.find((x) => x.id === presetId)!;
    const s = new Date(start + "T12:00:00");
    const d = p.kind === "business" ? addBusinessDays(s, p.days) : addCalendarDays(s, p.days);
    return d.toISOString().slice(0, 10);
  }, [start, presetId]);

  return (
    <section className="space-y-3">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <h2 className="text-sm font-semibold">Calculadora de prazos</h2>
        <p className="mt-1 text-xs text-slate-400">
          Dias úteis = seg-sex (sem feriados). Use para estimar vencimentos e organizar cobrança/controle.
        </p>

        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          <label className="text-xs text-slate-300">
            Data inicial
            <input
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm outline-none"
            />
          </label>

          <label className="text-xs text-slate-300 sm:col-span-2">
            Tipo de prazo
            <select
              value={presetId}
              onChange={(e) => setPresetId(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm outline-none"
            >
              {PRESETS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-3 rounded-xl border border-white/10 bg-slate-900/40 p-3">
          <div className="text-xs text-slate-400">Vencimento (estimado)</div>
          <div className="text-lg font-semibold">{due}</div>
          <div className="mt-1 text-xs text-slate-500">Ajuste manualmente se houver feriados.</div>
        </div>
      </div>
    </section>
  );
}
