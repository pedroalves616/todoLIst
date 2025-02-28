import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Task } from '../tasks/task.model';
import { Tag } from '../tags/tag.model';

@Table
export class TaskTag extends Model {
  @ForeignKey(() => Task)
  @Column
  taskId: number;

  @BelongsTo(() => Task)
  task: Task;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;

  @BelongsTo(() => Tag)
  tag: Tag;
}