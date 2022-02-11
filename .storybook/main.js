// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/preset-create-react-app"
//   ],
//   "framework": "@storybook/react",
//   "core": {
//     "builder": "webpack5"
//   }
// }

module.exports = {
  "stories": [
    "../src/**/**/*.stories.mdx",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // 'storybook-addon-themes',
    // '@react-theming/storybook-addon',
   
    'storybook-addon-themes',
    "storybook-addon-styled-component-theme/dist/preset",
    "themeprovider-storybook/register",

    '@storybook/addon-controls'

  ]}