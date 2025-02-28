export class CreateTaskDto {
  title: string;
  status: 'Em andamento' | 'Finalizado';
  priority: number;
  description?: string;
}
