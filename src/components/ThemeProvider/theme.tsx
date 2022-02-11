import React from 'react';
import { ThemeProvider } from 'styled-components';
//addDecorator(withThemes(ThemeProvider, [theme]));
// import {enum} from '@storybook/addon-controls'
// const themingDecorator = withThemes(ThemeProvider, [theme]);
import { darkTheme, defaultTheme } from './themes';
import { Story, Meta } from '@storybook/react';

const themes = [ darkTheme, defaultTheme ]
const themeNames = Object.keys(themes);

const SimplrChatThemeProvider = ({ children, theme= defaultTheme }:any) => {
  return <ThemeProvider  theme={theme}>{children}</ThemeProvider>;
};

 export default SimplrChatThemeProvider;
