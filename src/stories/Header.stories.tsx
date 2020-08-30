import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {Props, HeaderDS as Header} from '../components/designSystem/header'

export default {
  title: 'DesignSystem/Header',
  component: Header,
} as Meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Hello there'
};