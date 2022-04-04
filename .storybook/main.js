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
const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));

const assetLoader = {
  loader: assetRule.loader,
  options: assetRule.options || assetRule.query
};

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },

    );
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack", assetLoader]
    });

    // Return the altered config
    return config;
  },
  stories: [
    '../src/**/**/*.stories.mdx',
    '../src/**/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // 'storybook-addon-themes',
    // '@react-theming/storybook-addon',

    'storybook-addon-themes',
    'storybook-addon-styled-component-theme/dist/preset',
    '@storybook/addon-controls',
  ],
};
