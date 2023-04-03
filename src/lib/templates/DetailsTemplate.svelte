<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { XMark } from 'svelte-heros-v2';

  const dispatch = createEventDispatcher();
</script>

<div class="flex h-full w-full flex-col bg-white">
  <div class="flex justify-end p-2">
    <button
      class="rounded-full p-2"
      on:click={() => dispatch('clicked')}
      on:keyup={() => dispatch('clicked')}
    >
      <XMark class="text-slate-400" size="32" />
    </button>
  </div>
  <div
    class="mx-6 mb-6 grid grow place-content-center rounded-lg border border-slate-300 text-neutral-400"
  >
    content
  </div>
</div>
