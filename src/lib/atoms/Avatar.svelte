<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Camera } from 'svelte-heros-v2';

  const dispatch = createEventDispatcher();

  /**
   * URL ("https://example.org/profile.png")
   * or
   * relative path to local static resource ("/person.jpeg")
   */
  export let imageSrc: string | undefined = undefined;
  export let initials: string | undefined = undefined;
  export let size: 'small' | 'large' = 'small';
</script>

<div class={`${size == 'small' ? 'h-14 w-14' : 'h-24 w-24'} relative drop-shadow-md`}>
  <div
    class="absolute left-0 top-0 h-full w-full rounded-full border-slate-300 bg-white ring-1 ring-slate-300"
  />
  <div
    class={`${
      size == 'small' ? 'h-12 w-12' : ''
    } absolute m-1 flex items-center justify-center rounded-full bg-slate-200 ring-1 ring-slate-300`}
    style={`${size == 'small' ? '' : 'height: 88px; width: 88px;'}`}
  >
    {#if imageSrc}
      <img
        class="h-full w-full rounded-full bg-slate-200 object-scale-down"
        src={imageSrc}
        alt={'avatar'}
      />
    {:else if initials?.length === 2}
      <div class="text-xl font-semibold text-slate-400">{initials}</div>
    {:else}
      <div class="text-xl font-semibold text-slate-400"><Camera /></div>
    {/if}
  </div>
</div>
