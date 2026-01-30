"use client";

import { useMemo, useState } from "react";
import { META, ROLES, type RoleId } from "@/lib/data";
import TopBar from "@/components/TopBar";
import BottomTabs, { type TabKey } from "@/components/BottomTabs";
import Prazos from "@/components/Prazos";
import Checklists from "@/components/Checklists";
import Raci from "@/components/Raci";
import Calc from "@/components/Calc";

export default function Page() {
  const [q, setQ] = useState("");
  const [role, setRole] = useState<RoleId | "all">("all");
  const [tab, setTab] = useState<TabKey>("prazos");

  const roleLabel = useMemo(() => {
    if (role === "all") return "Todos";
    return ROLES.find((r) => r.id === role)?.name ?? "—";
  }, [role]);

  return (
    <div className="min-h-screen bg-slate-950">
      <TopBar
        title={META.title}
        subtitle={`Mobile-first • Filtro: ${roleLabel}`}
        disclaimer={META.disclaimer}
        q={q}
        setQ={setQ}
        role={role}
        setRole={setRole}
      />

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-4">
        {tab === "prazos" && <Prazos q={q} role={role} />}
        {tab === "checklists" && <Checklists q={q} role={role} />}
        {tab === "raci" && <Raci q={q} role={role} />}
        {tab === "calc" && <Calc />}
      </main>

      <BottomTabs tab={tab} setTab={setTab} />
    </div>
  );
}
