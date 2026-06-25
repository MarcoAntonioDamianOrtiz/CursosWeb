import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import { mockUsuario, mockEstadisticas, mockCursosProgreso } from '../data/dashboardData';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#0f172a] text-slate-300 overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header usuario={mockUsuario} />

        <main className="p-8 max-w-7xl w-full mx-auto space-y-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">¡Hola de nuevo, {mockUsuario.nombre}!</h2>
            <p className="text-slate-400">Continúa construyendo tu futuro profesional en tecnología.</p>
          </div>

          {/* Estadísticas */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEstadisticas.map((stat) => (
              <div key={stat.id} className="bg-[#1e293b]/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-sm font-medium text-slate-400 mb-2">{stat.titulo}</p>
                <p className="text-3xl font-bold text-white tracking-tight mb-1">{stat.valor}</p>
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  ↑ {stat.subtexto}
                </p>
              </div>
            ))}
          </section>

          {/* Cursos en Progreso */}
          <section className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Tus cursos en desarrollo</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockCursosProgreso.map((curso) => (
                <div key={curso.id} className="bg-[#1e293b]/30 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-bold text-white">{curso.titulo}</h4>
                      <span className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md border border-slate-700/50">
                        {curso.totalHoras} horas
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mb-6 line-clamp-2">{curso.descripcion}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1.5">
                        <span className="text-slate-400">{curso.horasCompletadas}h de {curso.totalHoras}h</span>
                        <span className="text-cyan-400">{curso.progreso}%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${curso.progreso}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex gap-1.5">
                        {curso.tags.map((tag) => (
                          <span key={tag} className="text-[11px] bg-slate-800/60 text-slate-300 px-2 py-0.5 rounded border border-slate-700/40">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-all">
                        Continuar →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}