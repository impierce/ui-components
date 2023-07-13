import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  // TODO: Known bug: cannot use compiler: 'svelte' (https://github.com/storybookjs/builder-vite/issues/419)
  plugins: [sveltekit(), Icons({ compiler: 'raw' })],
  // plugins: [sveltekit(), Icons({ compiler: 'svelte' })],
  server: {
    port: 3000
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,ts}'],
    // Extend jest-dom matchers
    setupFiles: ['./setupTest.js']
  }
  // ssr: {
  //   noExternal: ['svelte-transition']
  // }
});
