import { TaskStatus } from '../task.model';

export class GetTasksFilter {
  staus: TaskStatus;
  search: string;
}
