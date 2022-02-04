import { addDecorator } from "@storybook/react"
import { withThemes } from "storybook-addon-themes"
import {theme1, theme2} from './../src/components/ThemeProvider/theme'
import {ThemeProvider} from 'styled-components'
import { withThemesProvider } from "storybook-addon-styled-component-theme";


const defaultTheme = {
  name: "DEFAULT",
  backgroundColor: "white",
  textColor: "dimgrey",
  borderRadius: "30px"
};

const darkTheme = {
  name: "DARK",
  backgroundColor: "black",
  textColor: "seashell",
  borderRadius: "100px"
};

export const getAllThemes = () => {
  return [defaultTheme, darkTheme];
};

addDecorator(withThemesProvider(getAllThemes(), ThemeProvider));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    themes:  [
      { name: 'twitter', class: 'theme-twt', color: '#00aced', default: true },
      { name: 'facebook', class: 'theme-fb', color: '#3b5998' }
    ],
    options: {
      theme: theme2,
    },
  },
  
}


