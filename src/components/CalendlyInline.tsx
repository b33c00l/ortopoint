import { useEffect, useRef } from "react";
import { CALENDLY_URL } from "../constants";

export function CalendlyInline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const init = () => {
      window.Calendly?.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: el,
        resize: true,
      });
    };

    if (window.Calendly) {
      init();
    } else {
      const script = document.querySelector(
        'script[src*="calendly.com"]',
      ) as HTMLScriptElement | null;
      script?.addEventListener("load", init);
      return () => {
        script?.removeEventListener("load", init);
        el.innerHTML = "";
      };
    }

    return () => {
      el.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-slate-200 shadow-sm"
      style={{ minWidth: "320px", minHeight: "700px" }}
    />
  );
}
