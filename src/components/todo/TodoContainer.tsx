import React, {Component} from 'react';
import {TodoItem} from './index'
import {TaskList} from "./TaskList";
import {TaskForm} from "./TaskForm";
import {HeaderDS} from "../designSystem/header";

// initial state
type initialState = {
    taskList: TodoItem[],
    selectedTask: null | TodoItem,
}

export class TodoContainer extends Component<any, initialState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            taskList: [],
            selectedTask: null
        }
    }

    render() {
        const taskList = this.getSortedTaskList();

        return (
            <div className='max-w-lg mx-auto bg-white rounded-lg shadow-xl pt-6'>
                <HeaderDS title='todo app'/>
                <div id='todoAppContainer' className=' p-6 '>
                    <TaskForm selectedTask={this.state.selectedTask}
                              saveChanges={this.saveChanges}/>
                    <TaskList taskList={taskList}
                              updateTaskStatus={this.updateTaskStatus}
                              selectActiveTask={this.selectActiveTask}
                              deleteTask={this.deleteTask}/>
                </div>
            </div>
        )
    }

    getSortedTaskList = () => {
        let {taskList} = this.state;
        taskList.sort((a: TodoItem, b: TodoItem) => {
            return (a.status === b.status) ? 0 : a.status ? -1 : 1;
        });
        return taskList;
    }

    saveChanges = (selectedTask: TodoItem, isUpdate: boolean) => {
        let {taskList} = this.state;
        if (isUpdate) {
            taskList.map(task => {
                if (task.id === selectedTask.id) {
                    return selectedTask
                }
                return task;
            })
            this.setState({
                taskList,
                selectedTask: null
            })
            return;
        }

        taskList.push(selectedTask);
        this.setState({
            taskList,
            selectedTask: null
        });
    }

    updateTaskStatus = (id: number) => {
        let {taskList} = this.state;
        const filtered = taskList.map(task => {
            if (task.id === id) {
                task.status = !task.status
            }
            return task
        })
        this.setState({taskList: filtered});
    }

    selectActiveTask = (selectedTask: TodoItem) => {
        this.setState({selectedTask})
    }

    deleteTask = (id: number) => {
        let {taskList} = this.state;
        const filtered = taskList.filter(task => task.id !== id)
        this.setState({taskList: filtered});
    }
}