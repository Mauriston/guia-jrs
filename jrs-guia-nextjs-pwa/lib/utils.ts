export function includesQ(q: string, ...texts: Array<string | undefined>) {
  if (!q) return true;
  const qq = q.toLowerCase();
  return texts.some((t) => (t ?? "").toLowerCase().includes(qq));
}

export function addBusinessDays(start: Date, days: number) {
  const d = new Date(start.getTime());
  let added = 0;
  while (added < days) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay(); // 0 Sun .. 6 Sat
    if (day !== 0 && day !== 6) added++;
  }
  return d;
}

export function addCalendarDays(start: Date, days: number) {
  const d = new Date(start.getTime());
  d.setDate(d.getDate() + days);
  return d;
}
