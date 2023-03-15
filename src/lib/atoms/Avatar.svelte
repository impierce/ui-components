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
    class="rounded-full bg-white w-full h-full absolute left-0 top-0 ring-1 ring-slate-300 border-slate-300"
  />
  <div
    class={`${
      size == 'small' ? 'h-12 w-12' : ''
    } m-1 rounded-full bg-slate-200 absolute ring-1 ring-slate-300 flex justify-center items-center`}
    style={`${size == 'small' ? '' : 'height: 88px; width: 88px;'}`}
  >
    {#if imageSrc}
      <img
        class="rounded-full bg-slate-200 h-full w-full object-cover"
        src={imageSrc}
        alt={'avatar'}
      />
    {:else if initials?.length === 2}
      <div class="font-semibold text-slate-400 text-xl">{initials}</div>
    {:else}
      <div class="font-semibold text-slate-400 text-xl"><Camera /></div>
    {/if}
  </div>
</div>
