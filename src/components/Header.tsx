import { IconCross } from "../icons";

export function Header() {
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
          <a href="#specialties" className="hover:text-blue-700 transition-colors">
            Specializacija
          </a>
          <a href="#about" className="hover:text-blue-700 transition-colors">
            Apie mane
          </a>
          <a href="#book" className="hover:text-blue-700 transition-colors">
            Konsultacija
          </a>
        </nav>
        <a
          href="#book"
          className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
        >
          Rezervuoti konsultaciją
        </a>
      </div>
    </header>
  );
}
