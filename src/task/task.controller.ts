import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private tasksService: TaskService) {}
    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
      return this.tasksService.getTasks(filterDto);
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Promise<Task> {
      return this.tasksService.getTaskById(id);
    }
  
    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
      return this.tasksService.createTask(createTaskDto);
    }
}
