import { Link } from 'react-router';
import './index.css'; // 👈 AGREGA ESTA LÍNEA AQUÍ PARA IMPORTAR TUS ESTILOS

interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  duracion: string;
}

export default function Portfolio() {
  const cursos: Curso[] = [
    {
      id: 1,
      titulo: "IRIS Core",
      descripcion: "Collect metrics from thousands of devices on networks and present data in an easy to read format.",
      tecnologias: ["React", "Vite", "Tailwind CSS"],
      duracion: "40 horas"
    },
    {
      id: 2,
      titulo: "IRIS Netflow",
      descripcion: "Give engineers and managers the insights they need for stable and predictable networking environments.",
      tecnologias: ["TypeScript", "Node.js", "Jest"],
      duracion: "30 horas"
    },
    {
      id: 3,
      titulo: "IRIS CDR Insight",
      descripcion: "Get Call Data Records in real-time on signal performance statistics crucial to monitoring your call routing.",
      tecnologias: ["Flutter", "Dart", "Firebase"],
      duracion: "45 horas"
    },
    {
      id: 4,
      titulo: "IRIS Maps",
      descripcion: "Powerful tool that generates visually detailed network reporting maps in real-time for quick data intake.",
      tecnologias: ["Python", "Django", "PostgreSQL"],
      duracion: "35 horas"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-cyber-bg text-left p-6 md:p-16 block box-border font-sans">
      <div className="max-w-6xl mx-auto block">
        
        {/* Encabezado */}
        <header className="mb-12 border-b border-slate-800 pb-6 flex justify-between items-center w-full">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-white m-0 p-0 tracking-tight block text-left">
              Mi Portafolio de Cursos
            </h1>
            <p className="text-slate-400 text-sm mt-2 block text-left">
              Explora los programas disponibles y las tecnologías clave.
            </p>
          </div>
          <Link 
            to="/" 
            className="text-xs font-mono uppercase bg-slate-900 text-slate-400 border border-slate-800 px-4 py-2 rounded-md hover:text-white transition-colors"
          >
            ← Volver
          </Link>
        </header>

        {/* 🛠️ AQUÍ USAMOS TU UTILITY DEL CSS: portfolio-grid */}
        <main className="portfolio-grid">
          {cursos.map((curso) => (
            
            /* 🛠️ AQUÍ USAMOS TU UTILITY DEL CSS: course-card */
            <section key={curso.id} className="course-card">
              
              <div className="w-full text-left flex flex-col items-start">
                
                {/* Cabecera interna de la tarjeta */}
                <div className="mb-5 flex items-center justify-between w-full">
                  <div className="w-8 h-8 rounded-full border border-slate-700 bg-slate-900/50 flex items-center justify-center">
                    <span className="text-neon-rose text-xs font-mono">⚡</span>
                  </div>
                  <span className="text-[11px] font-mono bg-cyber-bg text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                    {curso.duracion}
                  </span>
                </div>

                {/* Título de la tarjeta */}
                <h2 className="text-xl font-semibold text-white tracking-wide m-0 mb-3 p-0 text-left block w-full">
                  {curso.titulo}
                </h2>

                {/* Descripción */}
                <p className="text-slate-400 text-sm leading-relaxed m-0 mb-4 text-left block w-full">
                  {curso.descripcion}
                </p>
              </div>

              {/* Contenedor inferior de badges y enlace */}
              <div className="w-full text-left mt-auto pt-4 border-t border-slate-800/50 flex flex-col items-start gap-4">
                
                {/* Badges de tecnologías */}
                <div className="flex flex-wrap gap-2 w-full justify-start">
                  {curso.tecnologias.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-cyber-bg text-slate-300 text-[11px] font-mono px-2 py-1 rounded border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlace de acción "Learn more" */}
                <span className="text-neon-rose hover:text-[#ff526f] text-sm font-medium tracking-wide inline-flex items-center gap-1 cursor-pointer transition-colors mt-2">
                  Learn more <span className="text-base">→</span>
                </span>
              </div>

            </section>
          ))}
        </main>

      </div>
    </div>
  );
}