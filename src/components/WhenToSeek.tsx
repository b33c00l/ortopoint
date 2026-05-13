import { IconCheck } from "../icons";

const reasons = [
  "Nuolatinis sąnarių ar raumenų skausmas",
  "Judėjimo apribojimai — sunkumai vaikščiojant, kylant iš sėdimos padėties ar lipant laiptais",
  "Trauma: kaulo lūžis, sąnario išnirimas, raištelio ar sausgyslės sužalojimas",
  "Sąnarių patinimas ar matomos deformacijos",
  "Sporto trauma — greitesniam ir efektyvesniam atsigavimui",
  "Profilaktika: vyresnio amžiaus asmenys ar turintys paveldėtą polinkį į sąnarių ligas",
];

const collaborations = [
  { title: "Reabilitacija", desc: "Efektyvios reabilitacijos programos po traumų" },
  { title: "Vaizdiniai tyrimai", desc: "Rentgeno, MRT, KT tyrimų interpretacija" },
  { title: "Šeimos gydytojas", desc: "Koordinuotas gydymas su pirminės priežiūros gydytoju" },
];

export function WhenToSeek() {
  return (
    <section className="py-16 px-6 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
            Kada kreiptis
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
            Ar reikia konsultacijos ortopedo?
          </h2>
          <p className="text-slate-500 leading-relaxed mb-8">
            Ortopedas-traumatologas diagnozuoja ir gydo kaulų, sąnarių, raumenų,
            sausgyslių ir raiščių sutrikimus. Kreipkitės, jei pastebite bent
            vieną iš šių požymių:
          </p>
          <ul className="space-y-3">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center flex-shrink-0">
                  <IconCheck />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-3">
            Bendradarbiavimas
          </p>
          <h3 className="text-xl font-extrabold text-slate-900 mb-4">
            Visapusiška priežiūra
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Prireikus bendradarbiauju su kitų sričių specialistais —
            reabilitologais, radiologais ir šeimos gydytojais — siekiant
            užtikrinti, kad pacientas gautų visapusišką ir kokybišką priežiūrą.
          </p>
          <div className="space-y-3">
            {collaborations.map((item) => (
              <div key={item.title} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
