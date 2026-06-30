import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  active?: 'inicio' | 'cursos' | 'nosotros' | 'contacto';
}

export default function Header({ active }: HeaderProps) {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function linkClasses(key: HeaderProps['active']) {
    return active === key
      ? 'text-white font-semibold'
      : 'text-slate-300 transition-colors hover:text-white';
  }

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowLogin(false);
    setEmail('');
    setPassword('');
    navigate('/dashboard');
  }

  return (
    <>
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur sticky top-0 z-40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-lg font-extrabold tracking-tight text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Academix
            </span>
          </Link>

          <div className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <Link to="/" className={linkClasses('inicio')}>
              Inicio
            </Link>
            <Link to="/cursos" className={linkClasses('cursos')}>
              Cursos
            </Link>
            <span
              aria-disabled="true"
              title="Próximamente"
              className="cursor-not-allowed text-slate-500"
            >
              Nosotros
            </span>
            <Link to="/contacto" className={linkClasses('contacto')}>
              Contacto
            </Link>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium">
            <button
              type="button"
              onClick={() => setShowLogin(true)}
              className="text-slate-300 transition-colors hover:text-white"
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={() => setShowLogin(true)}
              className="rounded-lg bg-violet-600 px-4 py-2 text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-500"
            >
              Registrarse
            </button>
          </div>
        </nav>
      </header>

      {showLogin ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-violet-950/40"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Inicia sesión</h2>
              <button
                type="button"
                onClick={() => setShowLogin(false)}
                className="text-slate-400 transition hover:text-white"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="login-email" className="text-sm font-medium text-slate-300">
                  Correo electrónico
                </label>
                <input
                  id="login-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="tu@correo.com"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400 focus:ring-4 focus:ring-violet-500/15"
                />
              </div>

              <div>
                <label htmlFor="login-password" className="text-sm font-medium text-slate-300">
                  Contraseña
                </label>
                <input
                  id="login-password"
                  type="password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400 focus:ring-4 focus:ring-violet-500/15"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-600/20 transition hover:bg-violet-500"
              >
                Entrar
              </button>

              <p className="text-center text-xs text-slate-500">
                Demo: cualquier correo y contraseña te llevará al dashboard.
              </p>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
