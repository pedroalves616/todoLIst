import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto); // Certifique-se de usar "createTaskDto"
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }

  @Post(':taskId/tags/:tagId')
  addTagToTask(@Param('taskId') taskId: string, @Param('tagId') tagId: string) {
    return this.tasksService.addTagToTask(+taskId, +tagId);
  }

  @Delete(':taskId/tags/:tagId')
  removeTagFromTask(@Param('taskId') taskId: string, @Param('tagId') tagId: string) {
    return this.tasksService.removeTagFromTask(+taskId, +tagId);
  }

  @Get('filter')
  findTasksByTags(@Query('tags') tags: string) {
    const tagIds = tags.split(',').map(Number);
    return this.tasksService.findTasksByTags(tagIds);
  }
}