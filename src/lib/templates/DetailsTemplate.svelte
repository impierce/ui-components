<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { XMark } from 'svelte-heros-v2';

  const dispatch = createEventDispatcher();
</script>

<div class="bg-white h-full w-full flex flex-col">
  <div class="flex justify-end p-2">
    <button
      class="p-2 rounded-full"
      on:click={() => dispatch('clicked')}
      on:keyup={() => dispatch('clicked')}
    >
      <XMark class="text-slate-400" size="32" />
    </button>
  </div>
  <div
    class="grow grid place-content-center mx-6 mb-6 border border-slate-300 rounded-lg text-neutral-400"
  >
    content
  </div>
</div>
