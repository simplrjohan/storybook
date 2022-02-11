import React from 'react';
import { Story, Meta } from '@storybook/react';
import SimplrChatThemeProvider from './Theme';

import { storiesOf } from '@storybook/react';
import { darkTheme, defaultTheme } from '../ThemeProvider/themes';
import {SimplrThemeProps} from'./Theme.types'

const themes = {darkTheme, defaultTheme }as any;
const themeNames = Object.keys(themes);

export default {
    title: 'ChatBot/Theme',
    component: SimplrChatThemeProvider,
    // controls: {
    //   presetColors: [{ color: '#ff4785', title: 'Coral' }, 'rgba(0, 159, 183, 1)', '#fe4a49'],
    // },
    // argTypes: {
    //   theme:{
    //     options: themeNames,
    //     control: { type: 'radio' },
    //     mapping: themes
    //   }
    // },
   
  } as Meta<typeof SimplrChatThemeProvider>;
  
  const Template: Story<SimplrThemeProps> = (args) => <SimplrChatThemeProvider  {...args} />;
  storiesOf('SimplrChatThemeProvider', module)
  
  
  export const RBI = Template.bind({});
  RBI.args = {
    theme: 'darkTheme'
  };