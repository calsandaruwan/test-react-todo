import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {TodoFormInterface as Props} from "../components/todo";
import {TaskForm} from "../components/todo/TaskForm";

export default {
    title: 'Todo/TaskForm',
    component: TaskForm,
} as Meta;

const Template: Story<Props> = (args) => <TaskForm {...args} />;

export const Default = Template.bind({});
Default.args = {
    selectedTask: null,
    saveChanges: () => action('save clicked')
};

export const WithValue = Template.bind({});
Default.args = {
    selectedTask: {
        id: new Date().getTime(),
        label: 'Clean the garden',
        status: true
    },
    saveChanges: () => action('save clicked')
};