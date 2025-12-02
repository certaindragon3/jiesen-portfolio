import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UnicornHero from "@/components/UnicornHero";
import Principles from "@/components/Principles";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-amber-500 selection:text-black">
      <Header />
      <UnicornHero />
      <Hero />
      <Work />
      <Principles />
      <Footer />
    </main>
  );
}
