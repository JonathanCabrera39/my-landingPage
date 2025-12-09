// src/routes/index.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AppVet from "../landing/components/Appvet";
import ScrollToTop from "../components/ui/ScrollToTop";
import GymLanding from "../landing/components/GymLanding";
import DoctorLanding from "../landing/components/DoctorLanding";
import LawyerLanding from "../landing/components/LawyerLanding";
import GameDevLanding from "../landing/components/GameDevLanding";
import BeatmakerLanding from "../landing/components/BeatmakerLanding.0.1";
import SingerLanding from "../landing/components/SingerLanding";
import GuitaristLanding from "../landing/components/GuitaristLanding";
import UrbanRitualDocument from "../landing/components/UrbanRitualDocument";


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
        <Route path="/urban-ritual" element={<UrbanRitualDocument />} />
        {/* Aquí añadirás más rutas si vendes landing + página de gracias, etc. */}
      </Routes>
    </BrowserRouter>
  );
}
