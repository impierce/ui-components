import { loadConfigFromFile, mergeConfig } from 'vite';
// import * as path from 'path';
const path = require('path');
import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-tailwind-dark-mode'
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    disableTelemetry: true
  },
  staticDirs: ['../static'],
  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts')
    );
    // console.log('userConfig', userConfig);
    // Remove Svelte plugins that would duplicate those added by the Storybook plugin
    const plugins = userConfig.plugins
      .flat(1)
      .filter((p) => p.name !== undefined)
      .filter(
        (p) => !p.name.startsWith('vite-plugin-svelte') || p.name === 'vite-plugin-svelte-kit'
      );
    console.log('plugins', plugins);
    return mergeConfig(config, {
      ...userConfig,
      plugins
    });
  }
};
export default config;
