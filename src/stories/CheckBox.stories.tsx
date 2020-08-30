import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Props, CheckBoxDS as CheckBox} from '../components/designSystem/checkBox'
import {action} from "@storybook/addon-actions";

export default {
    title: 'DesignSystem/CheckBox',
    component: CheckBox,
} as Meta;

const Template: Story<Props> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 'Checkbox here',
    onChange: (e) => action('changed')

};

export const Checked = Template.bind({});
Checked.args = {
    value: 'has Value',
    onChange: (e) => action('changed'),
    checked: true
};