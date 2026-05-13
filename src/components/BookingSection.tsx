import { CalendlyInline } from "./CalendlyInline";

export function BookingSection() {
  return (
    <section id="book" className="py-20 px-6 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
            Rezervuoti laiką
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Pasirinkite jums patogų laiką
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Konsultacija suteikiama greičiau nei per 24 val. — taip pat vakarais,
            savaitgaliais ir švenčių dienomis.
          </p>
        </div>
        <CalendlyInline />
      </div>
    </section>
  );
}
