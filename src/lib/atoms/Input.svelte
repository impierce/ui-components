<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { XMark } from 'svelte-heros-v2';

  export let delay = 500;
  let inputValue: string | undefined;
  let debouncedValue = '';

  let timer: any;

  export let placeholder = 'Enter search term ...';

  const dispatch = createEventDispatcher();

  const debounce = (value: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      debouncedValue = value;
      dispatch('value', debouncedValue);
    }, delay);
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape') clear();
  };

  const clear = () => {
    inputValue = undefined;
    dispatch('value', '');
  };
</script>

<svelte:window on:keydown={handleKeydown} />

<form class="group relative" style="min-width: 15rem;">
  <!-- <Icons name="search" class="w-5 h-5 absolute left-3 top-1/2 -mt-2.5 text-slate-400 fill-current pointer-events-none group-focus-within:text-blue-500" aria-hidden="true"></Icons> -->
  <input
    class="w-full appearance-none rounded-md py-2 px-4 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
    type="text"
    aria-label="Filter employees"
    {placeholder}
    id="search-input"
    bind:value={inputValue}
    on:input={(e) => debounce(e.target.value)}
  />
  {#if inputValue}
    <div on:click={clear}>
      <!-- <Icons name="x" aria-hidden="true"></Icons> -->
      <XMark
        class="pointer-events-auto absolute right-3 top-1/2 -mt-2.5 h-5 w-5 fill-current text-slate-400 hover:cursor-pointer group-focus-within:text-violet-500"
      />
    </div>
  {/if}
</form>
