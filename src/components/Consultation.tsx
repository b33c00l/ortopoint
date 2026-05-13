import { IconCalendar, IconCheck, IconDoc, IconVideo } from "../icons";

const steps = [
  {
    n: "01",
    Icon: IconCalendar,
    title: "Rezervuokite laiką",
    desc: "Pasirinkite jums patogų laiką. Konsultacija suteikiama greičiau nei per 24 val., taip pat vakarais ir savaitgaliais.",
  },
  {
    n: "02",
    Icon: IconVideo,
    title: "Prisijunkite prie pokalbio",
    desc: "Gaukite saugią nuorodą el. paštu ir prisijunkite iš bet kurio įrenginio. Konsultacija trunka ~30 min.",
  },
  {
    n: "03",
    Icon: IconDoc,
    title: "Gaukite išvadą ir planą",
    desc: "Po konsultacijos išrašas įkeliamas į e-sveikatą. Gausite gydymo planą, tyrimų vertinimą, e-receptą ir (ar) siuntimą.",
  },
];

const included = [
  "Išsami konsultacija vaizdo skambučiu",
  "Gydymo planas ir tyrimų vertinimas",
  "E-receptas ar siuntimas tyrimams/pas kitus specialistus",
  "Konsultacijos išrašas e-sveikatoje",
];

export function Consultation() {
  return (
    <section
      className="py-16 px-6 bg-slate-50 border-t border-slate-200"
      id="consultation"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
            Nuotolinė konsultacija
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            Kaip veikia nuotolinė konsultacija?
          </h2>
          <p className="text-slate-500 leading-relaxed mb-10">
            Rezervuokite laiką per kelias minutes. Konsultacijos metu aptarsime
            simptomų istoriją, traumos aplinkybes ir atliksime vizualinį
            klinikinį įvertinimą per vaizdo skambutį. Gausite individualų,
            medicininiais įrodymais pagrįstą gydymo planą įkeltą į e-sveikatą.
          </p>
          <ol className="space-y-7">
            {steps.map((step) => (
              <li key={step.n} className="flex gap-5 items-start">
                <div className="w-11 h-11 rounded-xl bg-blue-700 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <step.Icon />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded px-1.5 py-0.5">
                      {step.n}
                    </span>
                    <p className="font-bold text-slate-900">{step.title}</p>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-xs text-slate-400 bg-slate-50 border border-slate-200 rounded-xl p-4 leading-relaxed">
            <strong className="text-slate-600">
              Pasiruošimas konsultacijai:
            </strong>{" "}
            Pasirinkite ramią, gerai apšviestą ir netriukšmingą aplinką.
            Receptas gali būti išrašomas tik nekompensuojamiems ir
            nepsichotropiniams vaistams. Turint privatų sveikatos draudimą —
            išrašome sąskaitą faktūrą.
          </p>
        </div>

        <div className="top-24">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-blue-700 px-8 py-5 text-white text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-1">
                Konsultacijos kaina
              </p>
              <p className="text-6xl font-extrabold tracking-tighter">€49</p>
              <p className="text-xs text-blue-200 mt-1">
                vienkartinė konsultacija · ~30 min.
              </p>
            </div>
            <div className="p-8">
              <ul className="space-y-3 mb-7">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center flex-shrink-0">
                      <IconCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className="block w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm py-3.5 rounded-lg transition-colors text-center tracking-wide"
              >
                Rezervuoti dabar
              </a>
              <p className="text-xs text-slate-400 mt-4 text-center">
                Turite klausimų?{" "}
                <a
                  href="mailto:info@ortopoint.lt"
                  className="text-blue-700 hover:underline font-medium"
                >
                  Rašykite mums
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
