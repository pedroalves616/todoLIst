import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskTag } from './task-tag.model';
import { TaskTagService } from './task-tag.service';

@Module({
  imports: [SequelizeModule.forFeature([TaskTag])], 
  exports: [TaskTagService],
})
export class TaskTagModule {}