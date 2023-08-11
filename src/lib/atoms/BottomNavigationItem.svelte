<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let active: boolean = false;
  export let label: string;
</script>

<div class="flex flex-col items-center">
  <!-- Indicator -->
  {#if active}
    <div class="h-[4px] w-full rounded-full bg-indigo-500" />
  {/if}

  <!-- Button -->
  <button
    class={`rounded-full px-6 active:bg-slate-100 dark:active:bg-slate-700 ${
      active ? 'py-1' : 'py-2'
    }`}
    on:click={() => dispatch('click')}
  >
    <div class="flex h-12 w-10 flex-col items-center justify-center">
      <!-- Currently, there is no better way of applying conditional Tailwind classes to a named slot inside a component. -->
      <slot name="icon" />
      <div
        class={`pt-1 text-xs ${
          active ? 'text-black dark:text-white' : 'text-slate-400 dark:text-slate-500'
        }`}
      >
        {label}
      </div>
    </div>
  </button>
</div>
