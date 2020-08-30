import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Task} from "../components/todo/Task";
import {TaskInterface as Props} from "../components/todo";

export default {
    title: 'Todo/Task',
    component: Task,
} as Meta;

const Template: Story<Props> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
    task: {
        id: new Date().getTime(),
        label: 'Clean the garden',
        status: true
    },
    updateTaskStatus: () => action('task statue updated'),
    selectActiveTask: () => action('task selected'),
    deleteTask: () => action('task deleted'),
};

export const Completed = Template.bind({});
Completed.args = {
    task: {
        id: new Date().getTime(),
        label: 'Clean the garden',
        status: false
    },
    updateTaskStatus: () => action('task statue updated'),
    selectActiveTask: () => action('task selected'),
    deleteTask: () => action('task deleted'),
};