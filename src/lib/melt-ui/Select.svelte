<script lang="ts">
  import { createSelect } from '@melt-ui/svelte';
  import Check from '~icons/lucide/check';
  import ChevronDown from '~icons/lucide/chevron-down';

  const { label, trigger, menu, option, isSelected, group, groupLabel } = createSelect();

  const options = {
    sweet: ['Caramel', 'Chocolate', 'Strawberry', 'Cookies & Cream'],
    savory: ['Basil', 'Bacon', 'Rosemary', 'Balsamic Fig']
  };
</script>

<button class="trigger" melt={$trigger} aria-label="Food">
  {$label || 'Select an option'}
  <ChevronDown />
</button>

<div class="menu" melt={$menu}>
  {#each Object.entries(options) as [key, arr]}
    <div melt={$group(key)}>
      <div class="label" melt={$groupLabel(key)}>{key}</div>
      {#each arr as item}
        <div class="option" melt={$option({ value: item, label: item })}>
          {#if $isSelected(item)}
            <div class="check">
              <Check />
            </div>
          {/if}
          {item}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style lang="postcss">
  .label {
    @apply py-1 pl-4 pr-4  font-semibold capitalize text-neutral-800;
  }

  .menu {
    @apply z-10 flex max-h-[360px]  flex-col overflow-y-auto;
    @apply rounded-md bg-white p-1;
    @apply ring-0 !important;
  }
  .option {
    @apply relative cursor-pointer rounded-md py-1 pl-8 pr-4 text-neutral-800;
    @apply focus:text-blue-700 focus:z-10;
    @apply data-[highlighted]:bg-blue-50 data-[highlighted]:text-blue-900;
    @apply data-[selected]:bg-blue-100 data-[selected]:text-blue-900;
  }
  .trigger {
    @apply flex h-10 min-w-[220px] items-center justify-between rounded-md bg-white px-3;
    @apply text-blue-700 py-2 transition-opacity hover:opacity-90;
  }
  .check {
    @apply text-blue-500 absolute left-2 top-1/2 z-20;
    translate: 0 calc(-50% + 1px);
  }
</style>