import { IconCross } from "../icons";

export function Footer() {
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
            <a href="mailto:info@ortopoint.lt" className="hover:text-white transition-colors">
              info@ortopoint.lt
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Dr. Dovydas Prascevičius. Visos teisės saugomos.</p>
          <p className="text-slate-600 text-center">
            Ši svetainė yra informacinio pobūdžio ir nepakeičia gydytojo konsultacijos.
          </p>
        </div>
      </div>
    </footer>
  );
}
