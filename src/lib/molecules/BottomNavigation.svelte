<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Clock, Cog, User } from 'svelte-heros-v2';

  const dispatch = createEventDispatcher();

  export let active: 'history' | 'profile' | 'settings' = 'profile';
</script>

<div class="flex justify-evenly border-t bg-white py-2 sm:justify-center sm:space-x-24">
  <button class="rounded-full p-4 hover:bg-slate-100" on:click={() => dispatch('history')}>
    <Clock
      class={`${active == 'history' ? 'text-violet-700' : 'text-slate-400'}`}
      strokeWidth="2"
    />
  </button>
  <button class="rounded-full p-4 hover:bg-slate-100" on:click={() => dispatch('profile')}>
    <User class={`${active == 'profile' ? 'text-violet-700' : 'text-slate-400'}`} strokeWidth="2" />
  </button>
  <button class="rounded-full p-4 hover:bg-slate-100" on:click={() => dispatch('settings')}>
    <Cog class={`${active == 'settings' ? 'text-violet-700' : 'text-slate-400'}`} strokeWidth="2" />
  </button>
</div>
