import { addDecorator } from "@storybook/react"
import {darkTheme, defaultTheme} from './../src/components/ThemeProvider/themes'
import {ThemeProvider} from 'styled-components'
import { withThemesProvider } from "storybook-addon-styled-component-theme";


export const getAllThemes = () => {
  return [defaultTheme, darkTheme];
};
addDecorator(withThemesProvider(getAllThemes(), ThemeProvider));

