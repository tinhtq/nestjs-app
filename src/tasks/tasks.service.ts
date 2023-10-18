import { Injectable } from '@nestjs/common'
import { Task, TaskStatus } from './tasks.model'
import { v4 } from 'uuid'
import { CreateTaskDto } from './dto/creat-task.dto'
@Injectable()
export class TasksService {
  private tasks: Task[] = []
  getAllTasks(): Task[] {
    return this.tasks
  }
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id)
  }
  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto
    const task: Task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.OPEN,
    }
    this.tasks.push(task)
    return task
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
    return `${id} is deleted`
  }
  updateTaskStatus(id: string, status: TaskStatus) {
    const task = this.getTaskById(id)
    task.status = status
  }
}
