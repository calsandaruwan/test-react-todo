export {TodoContainer as TodoComponent} from './TodoContainer';

export interface TodoItem {
    id: number
    label: string,
    status: boolean
}

export interface TaskInterface {
    task: TodoItem,
    updateTaskStatus: (arg0: number) => void,
    selectActiveTask: (arg0: TodoItem) => void,
    deleteTask: (arg0: number) => void,
}

export interface TaskListInterface {
    taskList: TodoItem[],
    updateTaskStatus: (arg0: number) => void,
    selectActiveTask: (arg0: TodoItem) => void,
    deleteTask: (arg0: number) => void,
}

export interface TodoFormInterface {
    selectedTask: TodoItem | null,
    saveChanges: (arg0: TodoItem, arg1: boolean) => void,
}