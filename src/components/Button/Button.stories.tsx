import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button  from './Button';
import {ButtonProps} from "./Button.types"
import { withThemes } from 'storybook-addon-themes';
import { storiesOf } from '@storybook/react';
import { darkTheme, defaultTheme } from '../ThemeProvider/themes';
const themes = {darkTheme, defaultTheme }as any;
const themeNames = Object.keys(themes);

export default {
  title: 'ChatBot/RBI/Button',
  component: Button,
  // controls: {
  //   presetColors: [{ color: '#ff4785', title: 'Coral' }, 'rgba(0, 159, 183, 1)', '#fe4a49'],
  // },
  argTypes: {
    themify:{
      options: themeNames,
      control: { type: 'radio' },
      mapping: themes
    }
  },
 
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
storiesOf('Button', module)


export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
  text: 'Primary',  
  themify: 'defaultTheme'
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  disabled: false,
  text: "Secondary",
  themify: 'darkTheme'

};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: false,
  disabled: true,
  text: 'Disabled',
  themify: 'defaultTheme'

};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  disabled: false,
  size:"small",
  text: 'Small',
  themify: 'darkTheme'

};

export const Medium = Template.bind({});
Medium.args = {
  primary: true,
  disabled: false,
  size:"medium",
  text: 'Medium',
  themify: 'darkTheme'


};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  disabled: false,
  size:"large",
  text: 'Large',
  themify: 'darkTheme'
};
Primary.decorators = [(Story) => <div style={{ display: 'flex', margin: 'auto' }}><Story /></div>]