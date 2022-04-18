import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FiTrash2, FiSend } from 'react-icons/fi';

import { Button, IButtonProps } from '../src';

const meta: Meta = {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    variant: { defaultValue: 'contained' },
    size: { defaultValue: 'medium' },
    loading: { defaultValue: false },
    disabled: { defaultValue: false },
    startIcon: { type: 'symbol' },
    endIcon: { type: 'symbol' },
  },
};

export default meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const StartIcon = Template.bind({});

export const EndIcon = Template.bind({});

Default.args = {
  children: 'Button',
};

StartIcon.args = {
  children: 'Delete',
  startIcon: <FiTrash2 />,
};

EndIcon.args = {
  children: 'Send',
  endIcon: <FiSend />,
};
