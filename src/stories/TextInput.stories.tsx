import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Props, InputTextDS as InputText} from '../components/designSystem/textInput'
import {action} from "@storybook/addon-actions";

export default {
    title: 'DesignSystem/TextInput',
    component: InputText,
} as Meta;

const Template: Story<Props> = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: '',
    onChange: (e) => action('changed'),
    placeholder: 'Type here',
};

export const Large = Template.bind({});
Large.args = {
    value: 'has Value',
    onChange: (e) => action('changed'),
    placeholder: 'Type here',
    size: "large"
};