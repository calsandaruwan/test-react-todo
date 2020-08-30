import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {Props, ButtonDS as Button} from '../components/designSystem/button'
import {action} from "@storybook/addon-actions";
import {EditOutlined} from "@ant-design/icons";

export default {
  title: 'DesignSystem/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  onClick: action('btn clicked')
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: "primary",
  onClick: action('btn clicked')
};

export const Icon= Template.bind({});
Icon.args = {
  icon: <EditOutlined/>,
  onClick: action('btn clicked')
};