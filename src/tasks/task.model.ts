import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { TaskTag } from '../task-tag/task-tag.model';

@Table
export class Task extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.ENUM('Em andamento', 'Finalizado'),
    allowNull: false,
  })
  status: 'Em andamento' | 'Finalizado';

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 10,
    },
  })
  priority: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  @HasMany(() => TaskTag)
  taskTags: TaskTag[];
}