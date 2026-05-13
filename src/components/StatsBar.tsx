const stats = [
  { value: "10+", label: "Metų patirties" },
  { value: "<24h", label: "Greitas atsakymas" },
  { value: "VU", label: "Vilniaus universitetas" },
  { value: "LT · EN · RU", label: "Konsultacijų kalbos" },
];

export function StatsBar() {
  return (
    <div className="bg-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-blue-600">
        {stats.map((s) => (
          <div key={s.label} className="text-center px-4 first:pl-0">
            <p className="text-xl font-extrabold tracking-tight">{s.value}</p>
            <p className="text-xs text-blue-200 mt-0.5 uppercase tracking-wider">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
