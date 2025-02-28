import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { TaskTag } from '../task-tag/task-tag.model';

@Table
export class Tag extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;

  @HasMany(() => TaskTag)
  taskTags: TaskTag[];
}