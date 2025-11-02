// src/pages/Home.tsx
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsAppButton";


export default function Home() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-950 to-blue-800">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
