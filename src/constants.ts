export const CALENDLY_URL =
  "https://calendly.com/dovydas-prascevicius/30min";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        resize?: boolean;
      }) => void;
    };
  }
}
