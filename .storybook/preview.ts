import { themes } from '@storybook/theming';
import type { Preview } from '@storybook/svelte';

const preview: Preview = {
  globalTypes: {
    // theme: {
    //   description: 'Global theme for components',
    //   defaultValue: 'light',
    //   toolbar: {
    //     // The label to show for this toolbar item
    //     title: 'Theme',
    //     icon: 'circlehollow',
    //     // Array of plain string values or MenuItem shape (see below)
    //     items: ['light', 'dark'],
    //     // Change title based on selected value
    //     dynamicTitle: true
    //   }
    // },
    darkMode: {
      defaultValue: false // Enable dark mode by default on all stories
    },
    // Optional (Default: 'dark')
    className: {
      defaultValue: 'dark' // Set your custom dark mode class name
    }
  }
};

export default preview;

const parameters = {
  backgrounds: {
    default: 'light'
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  globalTypes: {
    darkMode: {
      defaultValue: false // Enable dark mode by default on all stories
    },
    className: {
      defaultValue: 'dark' // Set your custom dark mode class name
    }
  }
  // darkMode: {
  //   // Override the default dark theme
  //   dark: { ...themes.dark, appBg: 'black' },
  //   // Override the default light theme
  //   light: { ...themes.normal, appBg: 'white' }
  // }
};
