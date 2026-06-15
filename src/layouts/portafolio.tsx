import React from 'react';

// Definimos la estructura de un curso para TypeScript
interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  duracion: string;
}

export default function Portfolio() {
  // Array con al menos 4 cursos
  const cursos: Curso[] = [
    {
      id: 1,
      titulo: "Desarrollo Web Moderno",
      descripcion: "Aprende a construir aplicaciones web completas utilizando las últimas características de React y despliegues optimizados.",
      tecnologias: ["React", "Vite", "Tailwind CSS"],
      duracion: "40 horas"
    },
    {
      id: 2,
      titulo: "Arquitectura de Software y Clean Code",
      descripcion: "Domina los patrones de diseño, principios SOLID y las mejores prácticas para escribir código mantenible a gran escala.",
      tecnologias: ["TypeScript", "Node.js", "Jest"],
      duracion: "30 horas"
    },
    {
      id: 3,
      titulo: "Desarrollo de Aplicaciones Móviles",
      descripcion: "Construye apps nativas para iOS y Android compartiendo la misma base de código de forma fluida y eficiente.",
      tecnologias: ["Flutter", "Dart", "Firebase"],
      duracion: "45 horas"
    },
    {
      id: 4,
      titulo: "Sistemas Backend y APIs con Python",
      descripcion: "Diseña arquitecturas robustas del lado del servidor, optimización de base de datos y diseño de APIs RESTful.",
      tecnologias: ["Python", "Django", "PostgreSQL"],
      duracion: "35 horas"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <header className="mb-12 text-center md:text-left border-b border-slate-800 pb-6">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Mi Portafolio de Cursos
          </h1>
          <p className="mt-2 text-slate-400 text-lg">
            Explora los programas disponibles y las tecnologías clave de cada uno.
          </p>
        </header>

        {/* Grid de Cursos (Se adapta de 1 a 3 columnas según el tamaño de pantalla) */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursos.map((curso) => (
            <section 
              key={curso.id} 
              className="bg-slate-800 rounded-xl p-6 border border-slate-700/50 shadow-xl hover:border-blue-500/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    {curso.titulo}
                  </h2>
                  <span className="bg-blue-500/10 text-blue-400 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                    {curso.duracion}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {curso.descripcion}
                </p>
              </div>

              {/* Tecnologías */}
              <div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Tecnologías clave
                </h3>
                <div className="flex flex-wrap gap-2">
                  {curso.tecnologias.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}