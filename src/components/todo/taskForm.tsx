import React, {Component} from 'react';
import {TodoItem} from './index';
import {ButtonDS} from "../designSystem/button";


// initial state
type initialState = {
    selectedTask: null | TodoItem,
}

export class TaskForm extends Component<any, initialState> {
    constructor(props: {}) {
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
            <div id='todoForm'>
                <input type={'text'}
                       onChange={this.handleSelectedTask}
                       value={this.getValue()}/>
                <ButtonDS type={'primary'}
                          label={isUpdate ? 'Update' : 'Add'}
                          onClick={this.saveChanges}/>
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
        return  {
            id: new Date().getTime(),
            label: '',
            status: true
        }
    }

    saveChanges = () => {
        const {selectedTask} = this.state;

        if (!selectedTask) {
            return false;
        }

        const isUpdate = this.isUpdate();
        this.setState({
            selectedTask: null
        }, () => {
            this.props.saveChanges(selectedTask, isUpdate);
        })
    }
}