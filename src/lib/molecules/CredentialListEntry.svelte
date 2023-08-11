<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { melt } from '@melt-ui/svelte';
  import { QuestionMarkCircle } from 'svelte-heros-v2';
  import BottomDrawer from './dialogs/BottomDrawer.svelte';

  const dispatch = createEventDispatcher();

  export let title = '';
  export let description = '';
  export let color: string | undefined = undefined;
</script>

<BottomDrawer titleText={title} descriptionText={description}>
  <!-- TODO: replace <div> with <button>? -->
  <div
    slot="trigger"
    let:trigger
    class="flex rounded-lg bg-white p-2 hover:cursor-pointer dark:bg-slate-800"
    on:click={() => dispatch('clicked')}
    on:keyup={() => dispatch('clicked')}
    use:melt={trigger}
  >
    <div
      class={`mr-4 grid h-12 w-12 place-items-center rounded-md p-2 ${color ?? 'bg-neutral-100'}`}
    >
      <!-- <div class="flex w-full h-full"> -->
      <slot name="icon">
        <QuestionMarkCircle class="text-black" />
      </slot>
      <!-- </div> -->
    </div>
    <div class="flex flex-col items-start">
      <p class="font-medium text-neutral-800 dark:text-neutral-200">{title}</p>
      <p class="text-sm font-normal text-neutral-400 dark:text-neutral-400">{description}</p>
    </div>
  </div>

  <!-- "content" slot of Drawer is passed on as "drawer-body" to consumer of CredentialListEntry -->
  <svelte:fragment slot="content">
    <slot name="drawer-body" />
  </svelte:fragment>
</BottomDrawer>
