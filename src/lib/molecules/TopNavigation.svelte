<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ChevronLeft from '~icons/lucide/chevron-left';

  const dispatch = createEventDispatcher();

  export let title: string;
</script>

<div class="flex items-center border-b bg-white dark:border-slate-900 dark:bg-slate-800">
  <button class="rounded-full p-4" on:click={() => dispatch('back')}>
    <ChevronLeft class="h-6 w-6 text-violet-700 dark:text-violet-600" />
  </button>
  {#if title}
    <p class="grow pr-14 text-center font-medium text-slate-500 dark:text-slate-600">{title}</p>
  {/if}
</div>
