import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Portfolio from './portafolio'; // Mantenemos tu importación tal cual

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        Bienvenido a Cursos JHONSON :D
      </h1>
      <p className="text-slate-400 mb-8 max-w-md text-center">
        Ve más de nuestros cursos aquí:
      </p>
            <Link 
        to="/portfolio" 
        className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
      >
       Portafolio de Cursos →
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/" element={<Home />} />
        
        {}
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}