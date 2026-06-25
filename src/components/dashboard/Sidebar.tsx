import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0b1222] border-r border-slate-800 p-6 flex flex-col justify-between hidden md:flex">
      <div>
        <div className="mb-10">
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Cursos JHONSON
          </h2>
          <span className="text-xs text-slate-500">Panel de Estudiante</span>
        </div>

        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-purple-400 border border-purple-500/30 font-medium">
            <span>💻</span> Mis Cursos
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 transition-all">
            <span>📊</span> Progreso
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 transition-all">
            <span>🏆</span> Certificados
          </a>
        </nav>
      </div>

      <div className="pt-4 border-t border-slate-800 text-xs text-slate-500">
        Versión v1.0.2
      </div>
    </aside>
  );
}