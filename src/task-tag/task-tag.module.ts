import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskTag } from './task-tag.model';
import { TaskTagService } from './task-tag.service';

@Module({
  imports: [SequelizeModule.forFeature([TaskTag])], // Importa o modelo TaskTag
  providers: [TaskTagService], // Registra o serviço
  exports: [TaskTagService], // Exporta o serviço para uso em outros módulos
})
export class TaskTagModule {}