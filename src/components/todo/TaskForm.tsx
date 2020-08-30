import React, {Component} from 'react';
import {TodoFormInterface, TodoItem} from './index';
import {ButtonDS} from "../designSystem/button";
import {InputTextDS} from "../designSystem/textInput";
import {Form} from 'antd';


// initial state
type initialState = {
    selectedTask: null | TodoItem,
}

export class TaskForm extends Component<TodoFormInterface, initialState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTask: null,
        }
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<initialState>, snapshot?: any) {
        console.log(this.props);
        if (this.props.selectedTask !== prevProps.selectedTask) {
            console.log(this.props.selectedTask, prevProps.selectedTask)
            this.setState({
                selectedTask: this.props.selectedTask
            })
        }
    }

    render() {
        const isUpdate = this.isUpdate();

        return (
            <div id='todoForm' className="w-full">
                <Form className="flex items-center py-2">

                    <Form.Item className="border-b bg-transparent border-b-10 w-full py-1 leading-tight focus:outline-none">
                        <InputTextDS className="text-xl"
                                     onChange={this.handleSelectedTask}
                                     bordered={false}
                                     value={this.getValue()}
                                     placeholder={'Anything in your mind'}
                                     size={'large'}/>
                    </Form.Item>

                    <Form.Item className="text-lg flex-shrink-0 text-sm text-white py-1 px-2 rounded">
                        <ButtonDS className="ml-4"
                                  type={'primary'}
                                  label={isUpdate ? 'Update' : 'Add'}
                                  onClick={this.saveChanges}
                                  size={'large'}/>
                    </Form.Item>

                </Form>
            </div>
        )
    }

    isUpdate = () => {
        return (!!this.props.selectedTask);
    }

    getValue = () => {
        return this.state.selectedTask ? this.state.selectedTask.label : '';
    }

    handleSelectedTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        let {selectedTask} = this.state;
        if (!selectedTask) {
            selectedTask = Object.assign({}, this.getDefaultTask());
        }

        selectedTask.label = e.target.value;
        this.setState({selectedTask});
    }

    getDefaultTask = () => {
        return {
            id: new Date().getTime(),
            label: '',
            status: true
        }
    }

    saveChanges = () => {
        const {selectedTask} = this.state;
        const isUpdate = this.isUpdate();

        if (!selectedTask) {
            return false;
        }

        this.setState({
            selectedTask: null
        }, () => {
            this.props.saveChanges(selectedTask, isUpdate);
        })
    }
}