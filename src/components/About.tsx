const credentials = [
  {
    label: "Išsilavinimas",
    value: "2011 m. Medicinos gydytojo kvalifikacija — Vilniaus universiteto Medicinos fakultetas",
  },
  {
    label: "Specializacija",
    value: "2016 m. Ortopedo traumatologo kvalifikacija — VU Ortopedijos-traumatologijos centras",
  },
  {
    label: "Echoskopija",
    value: "2023 m. Raumenų ir skeleto sistemos echoskopuotojo kvalifikacija — LSMU",
  },
  {
    label: "Stažuotės",
    value: "EFORT (DE, UK, CZ), EFAS, ATLS, Baltijos kongresai, 2025 m. MIKS Ispanijoje",
  },
];

const statCards = [
  { value: "10+", label: "Metų klinikinės patirties", color: "bg-blue-700 text-white" },
  { value: "VU", label: "Medicinos gydytojo kvalifikacija, 2011", color: "bg-blue-50 text-blue-700 border border-blue-200" },
  { value: "2016", label: "Ortopedo traumatologo kvalifikacija, VU", color: "bg-slate-800 text-white" },
  { value: "2023", label: "Echoskopuotojo kvalifikacija, LSMU", color: "bg-slate-50 text-slate-800 border border-slate-200" },
];

export function About() {
  return (
    <section className="py-16 px-6 bg-white" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
            Apie gydytoją
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
            Patirtis ir kvalifikacija
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Dr. Dovydas Prascevičius — licencijuotas ortopedas-traumatologas,
            įgijęs kvalifikaciją Vilniaus universitete. Daugiau nei 10 metų
            klinikinės patirties sporto traumatologijos ir regeneracinės
            ortopedijos srityse. Konsultuoja lietuvių, anglų ir rusų kalbomis.
            Priima tik suaugusiuosius.
          </p>
          <div className="space-y-4">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <div className="w-1.5 rounded-full bg-blue-700 flex-shrink-0 self-stretch" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                    {c.label}
                  </p>
                  <p className="text-sm text-slate-800 font-medium">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {statCards.map((card) => (
            <div
              key={card.label}
              className={`rounded-2xl p-6 flex flex-col justify-between min-h-[140px] ${card.color}`}
            >
              <p className="text-3xl font-extrabold tracking-tight">{card.value}</p>
              <p className="text-xs font-medium leading-snug opacity-80 mt-2">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
