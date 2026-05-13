import doctorImg from "./assets/doctor.png";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_URL =
  "https://calendly.com/dovydas-prascevicius/30min?text_color=ffffff&primary_color=1447e6";

function openCalendly(e: React.MouseEvent) {
  e.preventDefault();
  window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
}

/* ─── SVG icon components ─── */
const IconCross = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
const IconSport = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
  >
    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
  </svg>
);
const IconUltrasound = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
  >
    <path d="M3 12h2M5 7l1.5 1.5M5 17l1.5-1.5M12 3v2M17 5l-1.5 1.5M19 12h2M17 19l-1.5-1.5M12 19v2" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const IconJoint = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
  >
    <path d="M8 6h8M8 18h8M12 3v18M7 9.5c0 1.38 2.24 2.5 5 2.5s5-1.12 5-2.5" />
    <ellipse cx="12" cy="12" rx="5" ry="2.5" />
  </svg>
);
const IconPRP = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IconUrgent = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
const IconCalendar = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconVideo = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" />
  </svg>
);
const IconDoc = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

/* ─── Header ─── */
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center text-white flex-shrink-0">
            <IconCross />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 leading-tight">
              Dr. Dovydas Prascevičius
            </p>
            <p className="text-xs text-slate-500 leading-tight tracking-wide uppercase">
              Ortopedas-Traumatologas
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a
            href="#specialties"
            className="hover:text-blue-700 transition-colors"
          >
            Specializacija
          </a>
          <a href="#about" className="hover:text-blue-700 transition-colors">
            Apie mane
          </a>
          <a
            href="#consultation"
            className="hover:text-blue-700 transition-colors"
          >
            Konsultacija
          </a>
        </nav>
        <a
          href=""
          onClick={openCalendly}
          className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
        >
          Rezervuoti konsultaciją
        </a>
      </div>
    </header>
  );
}

/* ─── Stats bar ─── */
const stats = [
  { value: "10+", label: "Metų patirties" },
  { value: "<24h", label: "Greitas atsakymas" },
  { value: "VU", label: "Vilniaus universitetas" },
  { value: "LT · EN · RU", label: "Konsultacijų kalbos" },
];

function StatsBar() {
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

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 aspect-[3/4] max-h-[520px]">
        <img
          src={doctorImg}
          alt="Dovydas Prascevičius"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-5">
          <p className="text-white font-bold text-base leading-tight">
            Dovydas Prascevičius
          </p>
          <p className="text-blue-200 text-xs mt-0.5 uppercase tracking-widest">
            Ortopedas-Traumatologas
          </p>
        </div>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Priima online konsultacijas
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
          Nuotolinė ortopedo{" "}
          <span className="text-blue-700">
            konsultacija greičiau nei per 24 val.
          </span>
        </h1>
        <p className="text-slate-500 text-base leading-relaxed mb-7 border-l-4 border-blue-200 pl-4">
          Užmirškite ilgas eiles ir varginančias keliones į kliniką. Gaukite
          profesionalią ortopedo-traumatologo konsultaciją internetu — tiksliai,
          greitai ir patogiai. Konsultuoju tik suaugusiuosius.
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Sporto traumos: petys, alkūnė, klubas, kelis, čiurna",
            "Sąnarių, raiščių ir sausgyslių echoskopija",
            "Lėtinių degeneracinių sąnarių ligų gydymas",
            "Regeneracinė medicina: PRP/PRGF ir Hialurono injekcijos",
            "Skubi traumatologinė pagalba ir patarimai",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-slate-700"
            >
              <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center flex-shrink-0">
                <IconCheck />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <a
            href=""
            onClick={openCalendly}
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Rezervuoti konsultaciją
          </a>
          <a
            href="#about"
            className="inline-block border border-slate-300 hover:border-blue-700 hover:text-blue-700 text-slate-600 font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Apie gydytoją
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Specialties ─── */
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

function Specialties() {
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

/* ─── When to seek consultation ─── */
function WhenToSeek() {
  const reasons = [
    "Nuolatinis sąnarių ar raumenų skausmas",
    "Judėjimo apribojimai — sunkumai vaikščiojant, kylant iš sėdimos padėties ar lipant laiptais",
    "Trauma: kaulo lūžis, sąnario išnirimas, raištelio ar sausgyslės sužalojimas",
    "Sąnarių patinimas ar matomos deformacijos",
    "Sporto trauma — greitesniam ir efektyvesniam atsigavimui",
    "Profilaktika: vyresnio amžiaus asmenys ar turintys paveldėtą polinkį į sąnarių ligas",
  ];

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
              <li
                key={r}
                className="flex items-start gap-3 text-sm text-slate-700"
              >
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
            {[
              {
                title: "Reabilitacija",
                desc: "Efektyvios reabilitacijos programos po traumų",
              },
              {
                title: "Vaizdiniai tyrimai",
                desc: "Rentgeno, MRT, KT tyrimų interpretacija",
              },
              {
                title: "Šeimos gydytojas",
                desc: "Koordinuotas gydymas su pirminės priežiūros gydytoju",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </p>
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

/* ─── About / Credentials ─── */
function About() {
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
            {[
              {
                label: "Išsilavinimas",
                value:
                  "2011 m. Medicinos gydytojo kvalifikacija — Vilniaus universiteto Medicinos fakultetas",
              },
              {
                label: "Specializacija",
                value:
                  "2016 m. Ortopedo traumatologo kvalifikacija — VU Ortopedijos-traumatologijos centras",
              },
              {
                label: "Echoskopija",
                value:
                  "2023 m. Raumenų ir skeleto sistemos echoskopuotojo kvalifikacija — LSMU",
              },
              {
                label: "Stažuotės",
                value:
                  "EFORT (DE, UK, CZ), EFAS, ATLS, Baltijos kongresai, 2025 m. MIKS Ispanijoje",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <div className="w-1.5 rounded-full bg-blue-700 flex-shrink-0 self-stretch" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                    {c.label}
                  </p>
                  <p className="text-sm text-slate-800 font-medium">
                    {c.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              value: "10+",
              label: "Metų klinikinės patirties",
              color: "bg-blue-700 text-white",
            },
            {
              value: "VU",
              label: "Medicinos gydytojo kvalifikacija, 2011",
              color: "bg-blue-50 text-blue-700 border border-blue-200",
            },
            {
              value: "2016",
              label: "Ortopedo traumatologo kvalifikacija, VU",
              color: "bg-slate-800 text-white",
            },
            {
              value: "2023",
              label: "Echoskopuotojo kvalifikacija, LSMU",
              color: "bg-slate-50 text-slate-800 border border-slate-200",
            },
          ].map((card) => (
            <div
              key={card.label}
              className={`rounded-2xl p-6 flex flex-col justify-between min-h-[140px] ${card.color}`}
            >
              <p className="text-3xl font-extrabold tracking-tight">
                {card.value}
              </p>
              <p className="text-xs font-medium leading-snug opacity-80 mt-2">
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Consultation ─── */
function Consultation() {
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

        <div className="sticky top-24">
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
                {[
                  "Išsami konsultacija vaizdo skambučiu",
                  "Gydymo planas ir tyrimų vertinimas",
                  "E-receptas ar siuntimas tyrimams/pas kitus specialistus",
                  "Konsultacijos išrašas e-sveikatoje",
                ].map((item) => (
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
                href=""
                onClick={openCalendly}
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
              <div className="mt-5 pt-5 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-green-500 flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Saugus mokėjimas · Konfidencialu
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-10 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center text-white flex-shrink-0">
              <IconCross />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">
                Dr. Dovydas Prascevičius
              </p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">
                Ortopedas-Traumatologas
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="mailto:info@ortopoint.lt"
              className="hover:text-white transition-colors"
            >
              info@ortopoint.lt
            </a>
            <span className="text-slate-700">·</span>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>
            © {new Date().getFullYear()} Dr. Dovydas Prascevičius. Visos teisės
            saugomos.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─── */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />
      <StatsBar />
      <main className="flex-1">
        <Hero />
        <Specialties />
        <WhenToSeek />
        <About />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
