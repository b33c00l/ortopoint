import { Header } from "./components/Header";
import { StatsBar } from "./components/StatsBar";
import { Hero } from "./components/Hero";
import { Specialties } from "./components/Specialties";
import { WhenToSeek } from "./components/WhenToSeek";
import { About } from "./components/About";
import { Consultation } from "./components/Consultation";
import { BookingSection } from "./components/BookingSection";
import { Footer } from "./components/Footer";

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
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
