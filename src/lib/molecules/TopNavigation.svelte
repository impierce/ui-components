<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ChevronLeft from '~icons/lucide/chevron-left';

  const dispatch = createEventDispatcher();

  export let title: string;
</script>

<div
  class="flex h-[50px] items-center justify-between self-stretch bg-white py-[13px] px-6"
>
  <button class="-ml-2 rounded-full p-2" on:click={() => dispatch('back')}>
    <ChevronLeft class="h-6 w-6 text-indigo-500" />
  </button>
  {#if title}
    <p class="custom grow text-center font-medium text-neutral-900">{title}</p>
  {/if}
  <div>
    <slot>
      <!-- Placeholder -->
      <div class="pr-[48px]" />
    </slot>
  </div>
</div>

<style>
  .custom {
    font-size: 13px;
    font-style: normal;
    line-height: 24px;
  }
</style>
