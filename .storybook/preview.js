import { addDecorator } from "@storybook/react"
import {darkTheme, defaultTheme} from './../src/components/ThemeProvider/themes'
import {ThemeProvider} from 'styled-components'
import { withThemesProvider } from "storybook-addon-styled-component-theme";


export const getAllThemes = () => {
  return [defaultTheme, darkTheme];
};
addDecorator(withThemesProvider(getAllThemes(), ThemeProvider));

// const THEMES = [
//   {
//     name: 'Light',
//     backgroundColor: '#fff',
//     palette: {
//       TextField: {
//         backgroundColor: 'red',
//         fontColor: 'red',
//         borderColor: '#e2e6f3',
//         placeholderColor: '#999999',
//         opacityDisabled: 0.25,
//         borderError: '#e25a66',
//       },
//       Common: {
//         backgroundColor: '#1a213f',
//         fontColor: '#808ab1',
//         borderError: '#e25a66'
//       },
//     }
//   },
//   {
//     name: 'Dark',
//     backgroundColor: 'red',
//     palette: {
//       TextField: {
//         backgroundColor: '#1a213f',
//         fontColor: '#808ab1',
//         borderColor: '#808ab1',
//         placeholderColor: '#808ab1',
//         opacityDisabled: 0.45,
//         borderError: '#e25a66'
//       },
//       Common: {
//         backgroundColor: '#1a213f',
//         fontColor: '#808ab1',
//         borderError: '#e25a66'
//       },
//     }
//   },
// ]

