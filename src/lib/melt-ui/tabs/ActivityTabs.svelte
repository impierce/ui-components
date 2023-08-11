<script lang="ts">
  import { createTabs, melt } from '@melt-ui/svelte';

  const {
    elements: { root, list, content, trigger }
  } = createTabs({ defaultValue: 'connections' });
</script>

<div
  use:melt={$root}
  class="flex h-full flex-col
    overflow-hidden data-[orientation=vertical]:flex-row"
>
  <div
    use:melt={$list}
    class="flex h-[57px] shrink-0 overflow-x-auto border-b bg-white
      data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-r"
    aria-label="Manage your activity"
  >
    <button use:melt={$trigger('connections')} class="trigger font-medium text-slate-500"
      >Connections</button
    >
    <button use:melt={$trigger('history')} class="trigger font-medium text-slate-500"
      >History</button
    >
  </div>

  <div use:melt={$content('connections')} class="grow bg-white">
    <slot name="connections" />
  </div>

  <div use:melt={$content('history')} class="grow bg-white">
    <slot name="history" />
  </div>
</div>

<style lang="postcss">
  .trigger {
    display: flex;
    /* height: theme(spacing.11); */
    flex: 1;
    cursor: default;
    user-select: none;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    background-color: theme(colors.white);
    padding-inline: theme(spacing.2);
    line-height: 1;
    /* color: theme(colors.blue.900); */

    &:focus {
      position: relative;
    }

    &[data-orientation='vertical'] {
      @apply w-full flex-grow-0 rounded-none border-b border-r-2;
      @apply border-transparent border-b-blue-100 py-4 last:border-b-0;
    }

    &[data-state='active'] {
      @apply text-violet-700 focus:relative;
    }

    &[data-state='active'][data-orientation='horizontal'] {
      @apply shadow-[inset_0_-1px_0_0,0_1px_0_0] shadow-current focus:relative;
    }

    &[data-state='active'][data-orientation='vertical'] {
      @apply border-r-blue-500;
    }
  }

  /* input {
    height: theme(spacing.8);
    flex-shrink: 0;
    flex-grow: 1;
    border-radius: theme(borderRadius.md);
    border: 1px solid theme(colors.neutral.200);
    padding-inline: theme(spacing[2.5]);
    line-height: 1;
    color: theme(colors.blue.900);

    &:focus {
      border-color: theme(colors.blue.400);
    }
  } */

  /* .save {
    display: inline-flex;
    height: theme(spacing.8);
    cursor: default;
    align-items: center;
    justify-content: center;
    border-radius: theme(borderRadius.md);
    background-color: theme(colors.green.100);
    padding-inline: theme(spacing.4);
    line-height: 1;
    font-weight: theme(fontWeight.semibold);
    color: theme(colors.green.900);

    &:hover {
      background-color: theme(colors.green.200);
    }

    &:focus {
      @apply !ring-green-600;
    }
  } */
</style>
