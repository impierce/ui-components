<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { QuestionMarkCircle } from 'svelte-heros-v2';

  const dispatch = createEventDispatcher();

  export let title = '';
  export let description = '';
</script>

<div
  class="flex rounded-lg bg-slate-100 p-4 hover:cursor-pointer dark:bg-slate-800"
  on:click={() => dispatch('clicked')}
  on:keyup={() => dispatch('clicked')}
>
  <div
    class="mr-4 grid h-12 w-12 place-items-center rounded-md bg-violet-100 p-2 dark:bg-violet-800"
  >
    <!-- <div class="flex w-full h-full"> -->
    <slot name="icon">
      <QuestionMarkCircle class="text-violet-500 dark:text-violet-400" />
    </slot>
    <!-- </div> -->
  </div>
  <div class="flex flex-col items-start">
    <p class="font-semibold opacity-80 dark:text-neutral-200">{title}</p>
    <p class="text-sm opacity-50 dark:text-neutral-300">{description}</p>
  </div>
</div>
