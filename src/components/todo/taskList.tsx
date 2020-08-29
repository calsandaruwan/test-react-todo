import React from 'react';
import {TodoItem} from './index'
import {Task} from "./task";

interface Props {
    taskList: TodoItem[],
    updateTaskStatus: (arg0: number) => void,
    selectActiveTask: (arg0: TodoItem) => void,
    deleteTask: (arg0: number) => void,
}

export const TaskList: React.FC<Props> = (props) => {
    const {taskList} = props;

    if (!(taskList && taskList.length)) {
        return <div>No tasks available</div>
    }

    return (
        <div id='todoList'>
            {
                taskList.map((task: TodoItem) => {
                    return <Task key={task.id}
                                 task={task}
                                 updateTaskStatus={props.updateTaskStatus}
                                 selectActiveTask={props.selectActiveTask}
                                 deleteTask={props.deleteTask}/>
                })
            }
        </div>
    )
}