import { TaskStatus } from '../tasks.model'
import { CreateTaskDto } from './creat-task.dto'
export interface searchDto {
  status: TaskStatus
  search: CreateTaskDto
}
