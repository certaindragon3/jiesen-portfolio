import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <Principles />
      <Work />
      <Footer />
    </main>
  );
}
