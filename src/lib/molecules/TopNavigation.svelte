<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ChevronLeft from '~icons/lucide/chevron-left';
  
  const dispatch = createEventDispatcher();
</script>

<div class="border-b bg-white dark:border-slate-900 dark:bg-slate-800">
  <button class="p-4 rounded-full" on:click={() => dispatch('back')}>
    <ChevronLeft class="text-violet-700 dark:text-violet-600 w-6 h-6" />
  </button>
</div>
