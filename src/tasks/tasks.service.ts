import { Injectable, NotFoundException } from '@nestjs/common'
import { Task, TaskStatus } from './tasks.model'
import { v4 } from 'uuid'
import { CreateTaskDto } from './dto/creat-task.dto'
import { searchDto } from './dto/search.dto'
@Injectable()
export class TasksService {
  private tasks: Task[] = []
  getAllTasks(): Task[] {
    return this.tasks
  }
  getTaskById(id: string): Task {
    const found = this.tasks.find((task) => task.id === id)
    if (!found) throw new NotFoundException()
    return found
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
  getTaskWithFilter(data: searchDto) {
    const { status, search } = data
    if (status) {
      return this.tasks.filter((task) => task.status === status)
    }
    if (search) {
      this.tasks = this.tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true
        }

        return false
      })
    }

    return tasks
  }
}
