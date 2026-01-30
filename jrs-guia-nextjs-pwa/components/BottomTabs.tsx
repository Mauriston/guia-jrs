"use client";

export type TabKey = "prazos" | "checklists" | "raci" | "calc";

const TABS: Array<{ key: TabKey; label: string; icon: string }> = [
  { key: "prazos", label: "Prazos", icon: "⏱️" },
  { key: "checklists", label: "Checklists", icon: "🧾" },
  { key: "raci", label: "RACI", icon: "🧩" },
  { key: "calc", label: "Calc", icon: "🧮" },
];

export default function BottomTabs(props: { tab: TabKey; setTab: (t: TabKey) => void }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto max-w-3xl px-4">
        <div className="grid grid-cols-4 gap-1 py-2">
          {TABS.map((t) => {
            const active = props.tab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => props.setTab(t.key)}
                className={[
                  "flex flex-col items-center justify-center rounded-xl px-2 py-2 text-xs",
                  active ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5",
                ].join(" ")}
              >
                <span className="text-base">{t.icon}</span>
                <span className="mt-0.5">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
