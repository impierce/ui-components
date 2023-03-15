<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { QuestionMarkCircle } from 'svelte-heros-v2';

  const dispatch = createEventDispatcher();

  export let title = '';
  export let description = '';
</script>

<div class="rounded-lg bg-slate-100 p-4 flex hover:cursor-pointer" on:click={() => dispatch('clicked')} on:keyup={() => dispatch('clicked')}>
  <div class="rounded-md bg-violet-100 p-2 mr-4 w-12 h-12 grid place-items-center">
    <!-- <div class="flex w-full h-full"> -->
    <slot name="icon">
      <QuestionMarkCircle class="text-violet-500" />
    </slot>
    <!-- </div> -->
  </div>
  <div class="">
    <p class="opacity-80 font-semibold">{title}</p>
    <p class="opacity-50 text-sm">{description}</p>
  </div>
</div>
