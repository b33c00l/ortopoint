import doctorImg from "../assets/doctor.png";
import { IconCheck } from "../icons";

export function Hero() {
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
            <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center flex-shrink-0">
                <IconCheck />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <a
            href="#book"
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
