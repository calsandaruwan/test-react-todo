import React from 'react';
import {TodoItem} from './index'

interface Props {
    task: TodoItem,
    updateTaskStatus: (arg0: number) => void,
    selectActiveTask: (arg0: TodoItem) => void,
    deleteTask: (arg0: number) => void,
}

export const Task: React.FC<Props> = (props) => {
    const {task} = props;

    return (
        <div key={task.id}>
            <span onClick={() => props.updateTaskStatus(task.id)}>
                {task.status ? 'Done' : 'Not done'}
            </span>
            {task.label} - {task.id}
            <span onClick={() => props.selectActiveTask(task)}> edit</span>
            <span onClick={() => props.deleteTask(task.id)}> delete</span>
        </div>
    );
}