import type { StorybookConfig } from '@storybook/nextjs';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  // core: {
  //   builder: 'webpack5',
  // },
  // webpackFinal: async (config, { configType }) => {
  //   config.module?.rules?.push({
  //     test: /\.jsx?$/,
  //     exclude: /node_modules/,
  //     use: ['babel-loader', '@xstyled/style-loader'],
  //   });
  //   return config;
  // },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
