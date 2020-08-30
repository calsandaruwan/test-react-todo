import React from 'react';
import {TodoItem, TaskListInterface as Props} from './index'
import {Task} from "./Task";

export const TaskList: React.FC<Props> = (props) => {
    const {taskList} = props;

    if (!(taskList && taskList.length)) {
        return (
            <div id='noTaskMessage' className='text-center text-lg p-6'>
                <div>No tasks available at the moment.</div>
                <div>Please add new task to see them here</div>
            </div>
        )
    }

    return (
        <div className="px-0 border border-gray-200 rounded overflow-hidden max-h"
             id='todoList'>
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