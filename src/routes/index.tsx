// src/routes/index.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AppVet from "../landing-vet/components/Appvet";
import ScrollToTop from "../components/ScrollToTop";
import GymLanding from "../landing-vet/components/GymLanding";
import DoctorLanding from "../landing-vet/components/DoctorLanding";
import LawyerLanding from "../landing-vet/components/LawyerLanding";
import GameDevLanding from "../landing-vet/components/GameDevLanding";
import BeatmakerLanding from "../landing-vet/components/BeatmakerLanding";
import SingerLanding from "../landing-vet/components/SingerLanding";
import GuitaristLanding from "../landing-vet/components/GuitaristLanding";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vet" element={<AppVet />} />
        <Route path="/gym" element={<GymLanding />} />
        <Route path="/doc" element={<DoctorLanding />} />
        <Route path="/law" element={<LawyerLanding />} />
        <Route path="/gamedev" element={<GameDevLanding />} />
        <Route path="/baet" element={<BeatmakerLanding />} />
        <Route path="/singer" element={<SingerLanding />} />
        <Route path="/guitar" element={<GuitaristLanding />} />

        {/* <Route path="/navbar" element={<Navbar />} /> */}
        {/* <Route path="/app" element={<App />} /> */}
        {/* <Route path="/hero" element={<Hero />} /> */}

        {/* Aquí añadirás más rutas si vendes landing + página de gracias, etc. */}
      </Routes>
    </BrowserRouter>
  );
}
