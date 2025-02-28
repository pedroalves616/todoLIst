import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Task } from './tasks/task.model';
import { Tag } from './tags/tag.model';
import { TaskTag } from './task-tag/task-tag.model';
import { TasksModule } from './tasks/tasks.module';
import { TagsModule } from './tags/tags.module';
import { TaskTagModule } from './task-tag/task-tag.module'; 

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        models: [Task, Tag, TaskTag],
        autoLoadModels: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TasksModule,
    TagsModule,
    TaskTagModule, 
  ],
})
export class AppModule {}