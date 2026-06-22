import { type FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkolnvvo';

interface ContactForm {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

interface ContactCard {
  icon: IconName;
  title: string;
  description: string;
  action: string;
}

interface Benefit {
  icon: IconName;
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

type IconName =
  | 'mail'
  | 'phone'
  | 'pin'
  | 'discord'
  | 'shield'
  | 'clock'
  | 'star'
  | 'globe'
  | 'send'
  | 'chevron'
  | 'calendar';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const initialForm: ContactForm = {
  nombre: '',
  email: '',
  asunto: '',
  mensaje: '',
};

const contactCards: ContactCard[] = [
  {
    icon: 'mail',
    title: 'Correo electronico',
    description: 'Escribenos para resolver dudas sobre cursos, pagos o acceso.',
    action: 'academia@cursosjhonson.com',
  },
  {
    icon: 'phone',
    title: 'Telefono',
    description: 'Atencion directa para estudiantes y empresas.',
    action: '+52 55 1234 9876',
  },
  {
    icon: 'pin',
    title: 'Direccion',
    description: 'Oficina virtual con soporte para Mexico y Latinoamerica.',
    action: 'Ciudad de Mexico, MX',
  },
  {
    icon: 'discord',
    title: 'Comunidad / Discord',
    description: 'Conecta con mentores y alumnos en tiempo real.',
    action: 'discord.gg/cursosjhonson',
  },
];

const benefits: Benefit[] = [
  {
    icon: 'shield',
    title: 'Pago seguro',
    description: 'Procesos confiables y confirmacion clara de cada inscripcion.',
  },
  {
    icon: 'clock',
    title: 'Respuesta rapida',
    description: 'Priorizamos tus dudas para que puedas avanzar sin friccion.',
  },
  {
    icon: 'star',
    title: 'Soporte premium',
    description: 'Acompanamiento cercano antes, durante y despues del curso.',
  },
  {
    icon: 'globe',
    title: 'Atencion internacional',
    description: 'Soporte preparado para estudiantes de diferentes zonas horarias.',
  },
];

const faqs: FaqItem[] = [
  {
    question: 'Cuanto tardan en responder mi mensaje?',
    answer:
      'Normalmente respondemos en menos de 24 horas habiles. Las solicitudes de inscripcion activa tienen prioridad.',
  },
  {
    question: 'Puedo solicitar informacion para mi empresa?',
    answer:
      'Si. Podemos orientar equipos, proponer rutas de aprendizaje y adaptar horarios de acuerdo con las necesidades de tu organizacion.',
  },
  {
    question: 'Que datos debo enviar para recibir una recomendacion?',
    answer:
      'Comparte tu nivel actual, objetivo profesional, tiempo disponible y el curso que te interesa. Con eso podemos darte una recomendacion precisa.',
  },
  {
    question: 'Atienden estudiantes fuera de Mexico?',
    answer:
      'Si. La atencion es internacional y podemos coordinar horarios para estudiantes en Latinoamerica, Estados Unidos y Espana.',
  },
  {
    question: 'Puedo pedir soporte despues de comprar un curso?',
    answer:
      'Si. El soporte posterior a la compra esta incluido para ayudarte con accesos, materiales y dudas generales del programa.',
  },
];

function Icon({ name, className = 'h-6 w-6' }: { name: IconName; className?: string }) {
  const common = {
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8,
    viewBox: '0 0 24 24',
    'aria-hidden': true,
  };

  if (name === 'mail') {
    return (
      <svg {...common}>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === 'phone') {
    return (
      <svg {...common}>
        <path d="M8 5 6 7c-.7.7-.5 2.4.5 4.2a18 18 0 0 0 6.3 6.3c1.8 1 3.5 1.2 4.2.5l2-2-3.6-3.6-1.8 1.8c-1.7-.9-3-2.2-3.8-3.8l1.8-1.8z" />
      </svg>
    );
  }

  if (name === 'pin') {
    return (
      <svg {...common}>
        <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z" />
        <path d="M12 10.5h.01" />
      </svg>
    );
  }

  if (name === 'discord') {
    return (
      <svg {...common}>
        <path d="M8.5 8.5a10 10 0 0 1 7 0" />
        <path d="M9 16c-2.4-.5-4-1.7-5-3.3.4-3 1.4-5.3 3-7A11 11 0 0 1 10 5l.6 1.2a8.8 8.8 0 0 1 2.8 0L14 5a11 11 0 0 1 3 .7c1.6 1.7 2.6 4 3 7-1 1.6-2.6 2.8-5 3.3l-.9-1.2a7.7 7.7 0 0 1-4.2 0z" />
        <path d="M9.5 12h.01M14.5 12h.01" />
      </svg>
    );
  }

  if (name === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3 5 6v5c0 4.5 3 8.4 7 10 4-1.6 7-5.5 7-10V6z" />
        <path d="m9.5 12 1.7 1.7 3.5-4" />
      </svg>
    );
  }

  if (name === 'clock') {
    return (
      <svg {...common}>
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (name === 'star') {
    return (
      <svg {...common}>
        <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
      </svg>
    );
  }

  if (name === 'globe') {
    return (
      <svg {...common}>
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9M12 3c-2.2 2.4-3.3 5.4-3.3 9s1.1 6.6 3.3 9" />
      </svg>
    );
  }

  if (name === 'send') {
    return (
      <svg {...common}>
        <path d="m21 3-7.5 18-4-8.5L3 9z" />
        <path d="M21 3 9.5 12.5" />
      </svg>
    );
  }

  if (name === 'calendar') {
    return (
      <svg {...common}>
        <path d="M7 3v3M17 3v3M4 8h16M5 5h14v16H5z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="m8 10 4 4 4-4" />
    </svg>
  );
}

function validateForm(form: ContactForm) {
  const errors: Partial<Record<keyof ContactForm, string>> = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!form.nombre.trim()) {
    errors.nombre = 'Escribe tu nombre completo.';
  }

  if (!form.email.trim()) {
    errors.email = 'Escribe tu correo electronico.';
  } else if (!emailPattern.test(form.email)) {
    errors.email = 'Escribe un correo electronico valido.';
  }

  if (!form.asunto.trim()) {
    errors.asunto = 'Indica el asunto de tu mensaje.';
  }

  if (!form.mensaje.trim()) {
    errors.mensaje = 'Cuentanos como podemos ayudarte.';
  } else if (form.mensaje.trim().length < 12) {
    errors.mensaje = 'El mensaje debe tener al menos 12 caracteres.';
  }

  return errors;
}

export default function Contacto() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [openFaq, setOpenFaq] = useState<number>(0);

  const isLoading = status === 'loading';

  function updateField(field: keyof ContactForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));

    if (status !== 'idle') {
      setStatus('idle');
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: form.nombre.trim(),
          email: form.email.trim(),
          asunto: form.asunto.trim(),
          mensaje: form.mensaje.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Formspree rejected the message');
      }

      setStatus('success');
      setForm(initialForm);
      setErrors({});
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-lg font-extrabold tracking-tight text-white">
            Cursos JHONSON
          </Link>
          <div className="flex items-center gap-3 text-sm font-medium">
            <Link to="/portfolio" className="text-slate-300 transition-colors hover:text-white">
              Cursos
            </Link>
            <Link
              to="/contacto"
              className="rounded-lg bg-violet-600 px-4 py-2 text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-500"
            >
              Contacto
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-20 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.38),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.22),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-center lg:text-left">
              <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:mx-0 lg:text-6xl">
                Hablemos de tu siguiente salto profesional
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 lg:mx-0">
                Contacta al equipo de Cursos JHONSON y recibe orientacion clara sobre programas,
                inscripciones, soporte o rutas de aprendizaje para tu perfil.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="#formulario-contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-600/25 transition hover:bg-violet-500"
                >
                  Enviar mensaje
                  <Icon name="send" className="h-4 w-4" />
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400/70 hover:bg-white/10"
                >
                  Ver preguntas frecuentes
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-left shadow-2xl shadow-violet-950/40 backdrop-blur">
              <div className="rounded-xl border border-violet-400/20 bg-slate-950/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                  Atencion personalizada
                </p>
                <h2 className="mt-4 text-2xl font-bold text-white">
                  Recibe una respuesta alineada con tus metas.
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="rounded-xl bg-white/[0.04] p-4">
                      <Icon name={benefit.icon} className="h-5 w-5 text-violet-300" />
                      <p className="mt-3 text-sm font-semibold text-white">{benefit.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="formulario-contacto" className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900 p-6 shadow-xl shadow-black/20 sm:p-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Formulario de contacto
              </h2>
              <p className="mt-3 text-slate-400">
                Completa los campos y el equipo respondera con la informacion que necesitas.
              </p>

              <form className="mt-8 space-y-5" noValidate onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-slate-200">
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    value={form.nombre}
                    onChange={(event) => updateField('nombre', event.target.value)}
                    aria-invalid={Boolean(errors.nombre)}
                    aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400 focus:ring-4 focus:ring-violet-500/15"
                    placeholder="Tu nombre"
                  />
                  {errors.nombre ? (
                    <p id="nombre-error" className="mt-2 text-sm text-rose-300">
                      {errors.nombre}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-200">
                    Correo electronico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400 focus:ring-4 focus:ring-violet-500/15"
                    placeholder="correo@ejemplo.com"
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-2 text-sm text-rose-300">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-semibold text-slate-200">
                    Asunto
                  </label>
                  <input
                    id="asunto"
                    name="asunto"
                    type="text"
                    value={form.asunto}
                    onChange={(event) => updateField('asunto', event.target.value)}
                    aria-invalid={Boolean(errors.asunto)}
                    aria-describedby={errors.asunto ? 'asunto-error' : undefined}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400 focus:ring-4 focus:ring-violet-500/15"
                    placeholder="Informacion sobre cursos"
                  />
                  {errors.asunto ? (
                    <p id="asunto-error" className="mt-2 text-sm text-rose-300">
                      {errors.asunto}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-200">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={6}
                    value={form.mensaje}
                    onChange={(event) => updateField('mensaje', event.target.value)}
                    aria-invalid={Boolean(errors.mensaje)}
                    aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
                    className="mt-2 w-full resize-y rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400 focus:ring-4 focus:ring-violet-500/15"
                    placeholder="Cuentanos que curso te interesa o que necesitas resolver."
                  />
                  {errors.mensaje ? (
                    <p id="mensaje-error" className="mt-2 text-sm text-rose-300">
                      {errors.mensaje}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-600/20 transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isLoading ? 'Enviando...' : 'Enviar mensaje'}
                  <Icon name="send" className="h-4 w-4" />
                </button>

                {status === 'success' ? (
                  <p className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                    Mensaje enviado correctamente. Te responderemos muy pronto.
                  </p>
                ) : null}

                {status === 'error' ? (
                  <p className="rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                    Revisa los campos o intenta de nuevo en unos minutos.
                  </p>
                ) : null}
              </form>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((card) => (
                <article
                  key={card.title}
                  className="group rounded-2xl border border-slate-700/70 bg-slate-900 p-6 text-left shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-violet-400/60 hover:bg-slate-800"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 ring-1 ring-violet-400/30 transition group-hover:bg-violet-500 group-hover:text-white">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{card.description}</p>
                  <p className="mt-4 text-sm font-semibold text-violet-300">{card.action}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Beneficios al contactarnos
              </h2>
              <p className="mt-3 text-slate-400">
                Un proceso claro, seguro y pensado para que elijas mejor.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-slate-700/70 bg-slate-900 p-6 text-left shadow-xl shadow-black/20 transition hover:border-violet-400/60 hover:shadow-violet-950/30"
                >
                  <Icon name={benefit.icon} className="h-7 w-7 text-violet-300" />
                  <h3 className="mt-5 text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Preguntas frecuentes
              </h2>
              <p className="mt-3 text-slate-400">
                Respuestas rapidas antes de enviar tu consulta.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    key={faq.question}
                    className="rounded-2xl border border-slate-700/70 bg-slate-900 text-left shadow-xl shadow-black/20"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${index}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span className="text-base font-bold text-white">{faq.question}</span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300 transition ${isOpen ? 'rotate-180' : ''}`}
                      >
                        <Icon name="chevron" className="h-5 w-5" />
                      </span>
                    </button>
                    <div
                      id={`faq-${index}`}
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-sm leading-7 text-slate-400">{faq.answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-violet-400/20 bg-slate-900 p-6 shadow-2xl shadow-violet-950/30 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="text-left">
              <Icon name="calendar" className="h-8 w-8 text-violet-300" />
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white">
                Ubicacion y horarios
              </h2>
              <p className="mt-4 text-slate-400">
                Seccion preparada para integrar Google Maps posteriormente.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Direccion:</span> Ciudad de Mexico,
                  Mexico. Atencion remota para toda Latinoamerica.
                </p>
                <p>
                  <span className="font-semibold text-white">Horarios:</span> Lunes a viernes,
                  9:00 a 18:00. Sabados, 10:00 a 14:00.
                </p>
                <p>
                  <span className="font-semibold text-white">Atencion:</span> Soporte para cursos,
                  inscripciones, pagos y comunidad.
                </p>
              </div>
            </div>
            <div className="flex min-h-72 items-center justify-center rounded-2xl border border-dashed border-violet-300/30 bg-slate-950/80 p-8 text-center">
              <div>
                <Icon name="pin" className="mx-auto h-10 w-10 text-violet-300" />
                <p className="mt-4 text-lg font-bold text-white">Mapa proximamente</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                  Aqui se podra montar el iframe o componente de Google Maps sin alterar la
                  estructura de la pagina.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-r from-violet-700 via-fuchsia-700 to-blue-700 p-8 text-center shadow-2xl shadow-violet-950/50 sm:p-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Listo para elegir el curso correcto?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-violet-100">
              Nuestro equipo puede ayudarte a encontrar una ruta clara y realista para avanzar en
              desarrollo web, backend, mobile o arquitectura.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#formulario-contacto"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
              >
                Quiero asesoria
              </a>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Explorar cursos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
          <p>Cursos JHONSON. Formacion moderna para equipos y profesionales.</p>
          <div className="flex gap-4">
            <Link to="/" className="transition hover:text-white">
              Inicio
            </Link>
            <Link to="/portfolio" className="transition hover:text-white">
              Cursos
            </Link>
            <Link to="/contacto" className="transition hover:text-white">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
