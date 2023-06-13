<!-- Should be imported through shadcn-svelte
issue: https://github.com/huntabyte/shadcn-svelte/issues/105
-->
<script lang="ts">
  import { createListbox } from 'svelte-headlessui';
  import Transition from 'svelte-transition';
  import { Check, ChevronDown } from 'svelte-heros-v2';
  import { createEventDispatcher } from 'svelte';

  // ISO-3166-1 codes
  type Language = { displayName: string; i18n: string, isoCode: string };
  type SupportedLanguages = Language[];

  // prettier-ignore
  const supportedLanguages: SupportedLanguages = [
		{ displayName: 'English', i18n: 'en', isoCode: 'gb' },
		{ displayName: 'Nederlands', i18n: 'nl', isoCode: 'nl' },
		{ displayName: 'Deutsch', i18n: 'de', isoCode: 'de' }
	]

  export let selected: string = supportedLanguages[1].displayName;

  // TODO: type list so 'selected' isn't 'any'
  const listbox = createListbox<SupportedLanguages>({
    label: 'Actions',
    selected: supportedLanguages.find((l) => l.displayName === selected),
  });

  const dispatch = createEventDispatcher();

  function onSelect(e: Event) {
    selected = (e as CustomEvent).detail.selected.i18n;
    dispatch('value', selected);
  }
</script>

<div class="flex w-full flex-col items-center justify-center">
  <!-- <div class="fixed top-16 w-72"> -->
  <!-- <div class="relative mt-1"> -->
  <button
    use:listbox.button
    on:select={onSelect}
    class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm ring-1 ring-slate-200 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-violet-300 sm:text-sm"
  >
    <span class="block truncate">
      <span class="fi fi-{$listbox.selected.isoCode} fi mr-1.5 rounded" />
      {$listbox.selected.displayName}
    </span>
    <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
      <ChevronDown class="h-5 w-5 text-gray-400" />
    </span>
  </button>

  <Transition
    show={$listbox.expanded}
    leave="transition ease-in duration-100"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <ul
      use:listbox.items
      class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
    >
      {#each supportedLanguages as value, i}
        {@const active = $listbox.active === value}
        {@const selected = $listbox.selected === value}
        <li
          class="relative cursor-default select-none py-2 pl-10 pr-4 {active
            ? 'bg-violet-100 text-violet-900'
            : 'text-gray-900'}"
          use:listbox.item={{ value }}
        >
          <span class="fi fi-{value.isoCode} fi mr-1.5 rounded" />
          <span class="truncate {selected ? 'font-medium' : 'font-normal'}"
            >{value.displayName}</span
          >
          {#if selected}
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-violet-600">
              <Check class="h-5 w-5" strokeWidth="2" />
            </span>
          {/if}
        </li>
      {/each}
    </ul>
  </Transition>
  <!-- </div> -->
  <!-- </div> -->
</div>
