<script lang="ts">
  import { createDialog, melt } from '@melt-ui/svelte';
  import { fade, fly } from 'svelte/transition';
  import X from '~icons/lucide/x';

  const {
    elements: { trigger, overlay, content, title, description, close, portalled },
    states: { open }
  } = createDialog();

  export let titleText = '';
  export let descriptionText = '';
</script>

<!--
@component

@prop titleText - The title of the dialog.
@prop descriptionText - The description of the dialog.

@slot trigger - The trigger element that opens the dialog.

Usage:
```svelte
<BottomDrawer let:trigger titleText="My title" descriptionText="My description">
  ...
  <div use:melt={trigger}></div>
</BottomDrawer>
```  
-->

<!-- <slot trigger={$trigger} /> -->
<slot name="trigger" trigger={$trigger} />

<div use:melt={$portalled}>
  {#if $open}
    <div
      use:melt={$overlay}
      class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      transition:fade={{ duration: 150 }}
    />
    <!-- TODO: should we respect the bottom safe area as well? -> pb-[calc(25px_+_var(--safe-area-inset-bottom))] -->
    <div
      use:melt={$content}
      class="fixed left-0 bottom-0 z-50 flex w-screen flex-col
              items-center rounded-t-[20px] bg-white px-[18px] py-[25px] shadow-lg focus:outline-none"
      transition:fly={{
        y: 350,
        duration: 300,
        opacity: 1
      }}
    >
      <!-- <button
        use:melt={$close}
        aria-label="Close"
        class="text-magnum-800 hover:bg-magnum-100 focus:shadow-magnum-400 focus:ring-magnum-400 absolute right-[10px]
                  top-[10px] inline-flex h-6 w-6 appearance-none
                  items-center justify-center rounded-full focus:outline-none
                  focus:ring-2"
      >
        <X class="square-4" />
      </button> -->
      <p use:melt={$title} class="text-center text-2xl font-medium text-black pb-[15px]">{titleText}</p>
      <p use:melt={$description} class="custom text-center text-slate-500 max-w-[280px]">
        {descriptionText}
      </p>

      <section class="w-full">
        <slot name="content">
          <!-- A slot for a component (usually text) -->
        </slot>
        <!-- <div class="rounded-md bg-gray-100/80 p-4 text-zinc-800 shadow">
          <h3 class="mb-3 text-base font-semibold">New invitation</h3>
          <p class="text-sm">
            You have been invited to join the <strong>Designers</strong> team.
          </p>
          <div class="mt-6 flex justify-end gap-4">
            <button
              class="focus:ring-magnum-400 inline-flex h-8 items-center
                              justify-center rounded-[4px] bg-zinc-100 px-4 font-medium
                              leading-none text-zinc-600 focus:outline-none
                              focus:ring-2"
            >
              Reject
            </button>
            <button
              class="bg-magnum-100 text-magnum-900 focus:ring-magnum-400 inline-flex
                              h-8 items-center justify-center rounded-[4px] px-4
                              font-medium leading-none focus:outline-none
                              focus:ring-2"
            >
              Accept
            </button>
          </div>
        </div> -->
      </section>

      <!-- Slot for a close button -->
      <slot name="close" close={$close} />
    </div>
  {/if}
</div>

<style>
  .custom {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
</style>
