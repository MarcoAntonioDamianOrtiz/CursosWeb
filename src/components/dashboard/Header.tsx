import type { UsuarioPerfil } from '../../types/dashboard_types';
interface HeaderProps {
  usuario: UsuarioPerfil;
}

export default function Header({ usuario }: HeaderProps) {
  return (
    <header className="h-20 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 px-8 flex justify-between items-center sticky top-0 z-10">
      <div>
        <h1 className="text-lg font-semibold text-slate-200">Panel de Control</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-slate-200 relative bg-slate-800/40 rounded-lg border border-slate-700/50">
          <span>🔔</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
          <div className="text-right">
            <p className="text-sm font-medium text-slate-200">{usuario.nombre}</p>
            <p className="text-xs text-purple-400 font-semibold">{usuario.plan}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-md shadow-purple-500/20">
            {usuario.nombre.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  );
}