import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TasksRepository)
        private tasksRepository: TasksRepository,
      ) {}

      getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
        return this.tasksRepository.getTasks(filterDto);
      }
    
      async getTaskById(id: string): Promise<Task> {
        const found = await this.tasksRepository.findOne(id);
    
        if (!found) {
          throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
      }

      createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksRepository.createTask(createTaskDto);
      }

}
