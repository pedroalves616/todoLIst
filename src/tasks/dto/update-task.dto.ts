export class UpdateTaskDto {
    title?: string;
    status?: 'Em andamento' | 'Finalizado';
    priority?: number;
    description?: string;
  }