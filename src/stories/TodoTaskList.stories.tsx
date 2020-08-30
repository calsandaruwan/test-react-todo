import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {TaskList} from "../components/todo/TaskList";
import {TaskListInterface as Props} from "../components/todo";

export default {
    title: 'Todo/TaskList',
    component: TaskList,
} as Meta;

const Template: Story<Props> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    taskList: [{
        id: 1,
        label: 'Clean the garden',
        status: true
    }, {
        id: 1,
        label: 'Water plants',
        status: true
    }],
    updateTaskStatus: () => action('task statue updated'),
    selectActiveTask: () => action('task selected'),
    deleteTask: () => action('task deleted'),
};

export const Completed = Template.bind({});
Completed.args = {
    taskList: [{
        id: new Date().getTime(),
        label: 'Clean the garden',
        status: false
    }, {
        id: 1,
        label: 'Water plants',
        status: false
    }, {
        id: 1,
        label: 'Do something',
        status: false
    }, {
        id: 1,
        label: 'do something else',
        status: true
    }],
    updateTaskStatus: () => action('task statue updated'),
    selectActiveTask: () => action('task selected'),
    deleteTask: () => action('task deleted'),
};