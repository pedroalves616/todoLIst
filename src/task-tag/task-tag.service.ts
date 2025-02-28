import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TaskTag } from './task-tag.model';

@Injectable()
export class TaskTagService {
  constructor(
    @InjectModel(TaskTag)
    private taskTagModel: typeof TaskTag,
  ) {}

  async addTagToTask(taskId: number, tagId: number): Promise<TaskTag> {
    return this.taskTagModel.create({ taskId, tagId });
  }

  async removeTagFromTask(taskId: number, tagId: number): Promise<void> {
    const taskTag = await this.taskTagModel.findOne({ where: { taskId, tagId } });
    if (taskTag) {
      await taskTag.destroy();
    }
  }
}