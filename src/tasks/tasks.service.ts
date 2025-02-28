import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskTagService } from '../task-tag/task-tag.service';
import { Tag } from '../tags/tag.model';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
    private readonly taskTagService: TaskTagService,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskModel.create({ ...createTaskDto } as Partial<Task>);
  }
  

  async findAll(): Promise<Task[]> {
    return this.taskModel.findAll();
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskModel.findByPk(id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.taskModel.findByPk(id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task.update(updateTaskDto);
  }

  async remove(id: number): Promise<void> {
    const task = await this.taskModel.findByPk(id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    await task.destroy();
  }

  async addTagToTask(taskId: number, tagId: number): Promise<void> {
    await this.taskTagService.addTagToTask(taskId, tagId);
  }

  async removeTagFromTask(taskId: number, tagId: number): Promise<void> {
    await this.taskTagService.removeTagFromTask(taskId, tagId);
  }

  async findTasksByTags(tagIds: number[]): Promise<Task[]> {
    return this.taskModel.findAll({
      include: [{
        model: Tag,
        where: { id: tagIds },
      }],
    });
  }
}