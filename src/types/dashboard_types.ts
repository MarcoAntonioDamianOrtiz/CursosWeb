export interface CursoProgreso {
  id: string;
  titulo: string;
  descripcion: string;
  progreso: number; // 0 a 100
  totalHoras: number;
  horasCompletadas: number;
  tags: string[];
}

export interface EstadisticaCard {
  id: number;
  titulo: string;
  valor: string | number;
  subtexto: string;
  tipoTendencia: 'sube' | 'baja' | 'neutro';
}

export interface UsuarioPerfil {
  nombre: string;
  avatarUrl?: string;
  rol: 'estudiante' | 'administrador';
  plan: string;
}