import type { CursoProgreso, EstadisticaCard, UsuarioPerfil } from '../types/dashboard_types';

export const mockUsuario: UsuarioPerfil = {
  nombre: 'Amaury Martínez',
  rol: 'estudiante',
  plan: 'Premium Developer',
};

export const mockEstadisticas: EstadisticaCard[] = [
  { id: 1, titulo: 'Cursos Activos', valor: '3', subtexto: '2 completados este mes', tipoTendencia: 'sube' },
  { id: 2, titulo: 'Horas de Estudio', valor: '48.5 hrs', subtexto: '+5 hrs esta semana', tipoTendencia: 'sube' },
  { id: 3, titulo: 'Certificados', valor: '5', subtexto: '1 pendiente de revisión', tipoTendencia: 'neutro' },
];

export const mockCursosProgreso: CursoProgreso[] = [
  {
    id: 'iris-core',
    titulo: 'IRIS Core Avanzado',
    descripcion: 'Métricas complejas y presentación de datos en tiempo real.',
    progreso: 65,
    totalHoras: 40,
    horasCompletadas: 26,
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'iris-netflow',
    titulo: 'IRIS Netflow Architecture',
    descripcion: 'Entornos de red estables y predecibles para ingenieros.',
    progreso: 20,
    totalHoras: 30,
    horasCompletadas: 6,
    tags: ['Node.js', 'TypeScript', 'Jest'],
  },
];