<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ChevronLeft from '~icons/lucide/chevron-left';

  const dispatch = createEventDispatcher();

  export let title: string;
</script>

<div
  class="relative flex h-[50px] items-center justify-between self-stretch bg-foreground py-[13px] px-6 dark:bg-foreground-dark"
>
  <button class="z-10 -ml-2 rounded-full p-2" on:click={() => dispatch('back')}>
    <ChevronLeft class="h-6 w-6 text-primary" />
  </button>
  {#if title}
    <p
      class="custom absolute top-0 left-0 flex h-[50px] w-full items-center justify-center font-medium text-neutral-900 dark:text-white"
    >
      {title}
    </p>
  {/if}
  <div class="z-10">
    <slot />
  </div>
</div>

<style>
  .custom {
    font-size: 13px;
    font-style: normal;
    line-height: 24px;
  }
</style>
