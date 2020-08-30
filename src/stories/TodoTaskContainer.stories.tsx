import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {TaskListInterface as Props} from "../components/todo";
import {TodoComponent} from "../components/todo/";

export default {
    title: 'Todo/TaskListContainer',
    component: TodoComponent,
} as Meta;

const Template: Story<Props> = (args) => <TodoComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};