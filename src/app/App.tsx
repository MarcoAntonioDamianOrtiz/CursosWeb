import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contacto from "../contacto";
import Portfolio from "../layouts/portafolio";
import DashboardPage from "../pages/DashboardPage";


function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-4 text-white">
      <h1 className="mb-4 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400">
        Bienvenido a Cursos JHONSON :D
      </h1>
      <p className="mb-8 max-w-md text-center text-slate-400">
        Ve mas de nuestros cursos aqui:
      </p>
      <div className="flex flex-col gap-3 sm:flex-row items-center">
        <Link
          to="/portfolio"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-500"
        >
          Portafolio de Cursos
        </Link>
        
        {/* 2. Nuevo botón hacia el Dashboard con un estilo cyan/blue brillante */}
        <Link
          to="/dashboard"
          className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:opacity-90"
        >
          Mi Panel (Dashboard)
        </Link>

        <Link
          to="/contacto"
          className="rounded-lg bg-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-500"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* 3. Registramos la ruta del Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}