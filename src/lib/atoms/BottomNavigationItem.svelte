<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let active: boolean = false;
  export let label: string;
</script>

<button
  class="rounded-full py-2 px-6 hover:bg-slate-100 dark:hover:bg-slate-700"
  on:click={() => dispatch('click')}
>
  <div class="flex h-12 w-10 flex-col items-center justify-center">
    <!-- Currently, there is no better way of applying conditional Tailwind classes to a named slot inside a component. -->
    <slot name="icon" />
    <div
      class={`pt-1 text-xs ${
        active ? 'text-violet-700 dark:text-violet-600' : 'text-slate-500 dark:text-slate-400'
      }`}
    >
      {label}
    </div>
  </div>
</button>
