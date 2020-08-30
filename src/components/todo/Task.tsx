import React from 'react';
import {TaskInterface as Props} from './index'
import {ButtonDS} from "../designSystem/button";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import {CheckBoxDS} from "../designSystem/checkBox";

export const Task: React.FC<Props> = (props) => {
    const {task} = props;
    let labelClass = "flex-wrap md:w-9/12 sm:w-4/6";

    if (!task.status) {
        labelClass += ' line-through'
    }

    return (
        <div className="w-full px-4 py-4 border-b last:border-b-0 flex text-lg"
             key={task.id}>

            <div className="flex-wrap md:w-1/12  sm:w-1/6">
                <CheckBoxDS className=""
                            onChange={() => props.updateTaskStatus(task.id)}
                            checked={!task.status}/>
            </div>

            <div className={labelClass}>
                {task.label}
            </div>

            <div className="flex justify-end md:w-2/12  sm:w-1/6 whitespace-no-wrap">
                {
                    task.status && <ButtonDS className='ml-1'
                                              icon={<EditOutlined/>}
                                              onClick={() => props.selectActiveTask(task)}/>
                }
                <ButtonDS className='ml-1'
                          icon={<DeleteOutlined/>}
                          onClick={() => props.deleteTask(task.id)}/>
            </div>

        </div>
    );
}