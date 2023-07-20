<script lang="ts">
  import { createPinInput } from '@melt-ui/svelte';

  const { root, input } = createPinInput();
</script>

<div {...$root} class="flex items-center gap-2">
  {#each Array.from({ length: 8 }) as _, i}
    <input
      class="square-12 rounded-md bg-white text-center text-lg text-slate-900 shadow-sm"
      {...$input}
      use:input
    />
  {/each}
</div>
