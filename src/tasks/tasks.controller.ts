import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { Task } from './tasks.model'
import { CreateTaskDto } from './dto/creat-task.dto'

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService
  }
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks()
  }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto)
  }
  @Get('/:id')
  getTaskbyId(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id)
  }
  @Delete('/:id')
  DeleteTask(@Param('id') id: string): string {
    return this.tasksService.deleteTask(id)
  }
}
