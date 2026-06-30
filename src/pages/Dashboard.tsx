import { Link } from 'react-router-dom';

const dashboardStats = [
  { label: 'Cursos en progreso', value: '0' },
  { label: 'Cursos completados', value: '0' },
  { label: 'Certificados obtenidos', value: '0' },
  { label: 'Horas de aprendizaje', value: '0h' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-lg font-extrabold tracking-tight text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Academix
            </span>
          </Link>
          <Link
            to="/"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
          >
            Cerrar sesión
          </Link>
        </nav>
      </header>

      <main className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-700 via-fuchsia-700 to-blue-700 p-8 shadow-2xl shadow-violet-950/40 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-100">
              Bienvenido de vuelta
            </span>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Tu panel de aprendizaje
            </h1>
            <p className="mt-3 max-w-2xl text-violet-100">
              Aquí podrás dar seguimiento a tus cursos, certificados y progreso. Esta sección
              está en construcción.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-700/70 bg-slate-900 p-6 shadow-xl shadow-black/20"
              >
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-10 text-center">
            <p className="text-lg font-bold text-white">Aún no tienes cursos inscritos</p>
            <p className="mt-2 text-sm text-slate-400">
              Explora nuestro catálogo y empieza tu primer curso hoy mismo.
            </p>
            <Link
              to="/cursos"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500"
            >
              Explorar Cursos
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
