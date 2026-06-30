import { HashRouter, Route, Routes } from "react-router-dom";
import Contacto from "../contacto";
import Portfolio from "../layouts/portafolio";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cursos" element={<Portfolio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}