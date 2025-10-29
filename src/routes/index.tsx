// src/routes/index.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/navbar" element={<Navbar />} /> */}
        {/* <Route path="/app" element={<App />} /> */}
        {/* <Route path="/hero" element={<Hero />} /> */}

        {/* Aquí añadirás más rutas si vendes landing + página de gracias, etc. */}
      </Routes>
    </BrowserRouter>
  );
}