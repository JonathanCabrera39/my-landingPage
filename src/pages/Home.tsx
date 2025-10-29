// src/pages/Home.tsx
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsAppButton";


export default function Home() {
  return (
    <div className="min-h-screen bg-violet-500">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}
