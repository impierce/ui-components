import { InlineConfig, Plugin } from 'vite';
import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        // postCss: {
        //   implementation: require.resolve('postcss')
        // }
      }
    },
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
  viteFinal(config) {
    return workaroundSvelteDocgenPluginConflictWithUnpluginIcons(config);
  }
};

export default config;

// https://github.com/storybookjs/storybook/issues/20562
function workaroundSvelteDocgenPluginConflictWithUnpluginIcons(config: InlineConfig): InlineConfig {
  if (!config.plugins) return config;

  const [_internalPlugins, ...userPlugins] = config.plugins as Plugin[];
  const docgenPlugin = userPlugins.find(
    (plugin) => plugin.name === 'storybook:svelte-docgen-plugin'
  );
  if (docgenPlugin) {
    const origTransform = docgenPlugin.transform;
    const newTransform: typeof origTransform = (code, id, options) => {
      if (id.startsWith('~icons/')) {
        return;
      }
      return (origTransform as Function)?.call(docgenPlugin, code, id, options);
    };
    docgenPlugin.transform = newTransform;
    docgenPlugin.enforce = 'post';
  }
  return config;
}
