<script lang="ts">
  import { createTabs, melt } from '@melt-ui/svelte';
  import { crossfade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';

  const [send, receive] = crossfade({
    duration: 250,
    easing: cubicInOut
  });

  interface Tab {
    id: string;
    title: string;
  }

  export let triggers: Tab[] = [
    { id: 'connections', title: 'Connections' },
    { id: 'history', title: 'History' }
  ];

  const {
    elements: { root, list, content, trigger },
    states: { value }
  } = createTabs({ defaultValue: triggers.at(0)?.id });
</script>

<div use:melt={$root} class="flex h-full flex-col overflow-hidden">
  <div
    use:melt={$list}
    class="flex h-[39px] shrink-0 overflow-x-auto rounded-xl bg-foreground dark:bg-foreground-dark"
    aria-label="Manage your activity"
  >
    {#each triggers as triggerItem}
      <button
        use:melt={$trigger(triggerItem.id)}
        class="trigger relative m-1 rounded-xl py-2 px-3 text-xs font-bold text-slate-500 dark:text-white"
      >
        {triggerItem.title}
        <!-- Indicator: active navigation item -->
        <!-- {#if $value === triggerItem.id}
            <div
              in:send={{ key: 'trigger' }}
              out:receive={{ key: 'trigger' }}
              class="absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-red-500"
            />
          {/if} -->
      </button>
    {/each}
  </div>

  {#each triggers as triggerItem}
    <div use:melt={$content(triggerItem.id)} class="grow">
      <!-- Dynamic slot names: https://github.com/sveltejs/svelte/issues/6493 -->
      <slot name={triggerItem.id} />
    </div>
  {/each}
</div>

<style lang="postcss">
  .trigger {
    /* display: flex;
      align-items: center;
      justify-content: center; */

    cursor: default;
    user-select: none;

    flex: 1;

    &:focus {
      position: relative;
    }

    &:focus-visible {
      @apply z-10 ring-2;
    }

    &[data-state='active'] {
      @apply focus:relative;
      color: theme('colors.slate.700');
      background-color: theme('colors.primary.DEFAULT');
    }
  }
</style>
