import { IconSport, IconUltrasound, IconJoint, IconPRP, IconUrgent } from "../icons";

const specialties = [
  {
    Icon: IconSport,
    title: "Sporto traumos",
    text: "Peties, alkūnės, klubo, kelio, čiurnos sąnarių traumų, kaulų lūžių, raumenų, sausgyslių ir raiščių traumų konservatyvus gydymas.",
  },
  {
    Icon: IconUltrasound,
    title: "Echoskopija",
    text: "Sąnarių, raiščių ir sausgyslių ultragarsinis tyrimas — tiksliam traumų ir patologijų nustatymui bei tolesnio gydymo planavimui.",
  },
  {
    Icon: IconJoint,
    title: "Degeneracinės ligos",
    text: "Lėtinių degeneracinių sąnarių ligų konservatyvus, į pacientą orientuotas gydymas.",
  },
  {
    Icon: IconPRP,
    title: "Regeneracinė medicina",
    text: "Intrasąnarinės ir intrasausgyslinės injekcijos: PRP/PRGF, hialurono rūgštis, plazmos + hialurono derinys. Blokados (išskyrus nugaros).",
  },
  {
    Icon: IconUrgent,
    title: "Skubi pagalba",
    text: "Skubi traumatologinė pagalba ir patarimai — ar reikia kreiptis į skubios pagalbos skyrių. Prieinama vakarais, savaitgaliais ir švenčių dienomis.",
  },
];

export function Specialties() {
  return (
    <section
      className="bg-slate-50 border-y border-slate-200 py-16 px-6"
      id="specialties"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
          Domėjimosi sritys
        </p>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-10">
          Su kuo galiu padėti?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {specialties.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <s.Icon />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
