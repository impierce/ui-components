<!-- Should be imported through shadcn-svelte
issue: https://github.com/huntabyte/shadcn-svelte/issues/105
currently using component: https://captaincodeman.github.io/svelte-headlessui/listbox/
-->
<script lang="ts">
  import { createListbox, type Listbox } from 'svelte-headlessui';
  import Transition from 'svelte-transition';
  import { Check, ChevronDown } from 'svelte-heros-v2';
  import { SvelteComponent, SvelteComponentTyped, createEventDispatcher, onMount } from 'svelte';
  import Avatar from './Avatar.svelte';

  import GB from '~icons/flag/gb-4x3?raw&width=24&height=18';
  import NL from '~icons/flag/nl-4x3?raw&width=24&height=18';
  import DE from '~icons/flag/de-4x3?raw&width=24&height=18';

  import Gb_flag from './flag/gb.svelte';
  import Nl_flag from './flag/nl.svelte';
  import De_flag from './flag/de.svelte';
  // import GB from '~icons/flag/gb-4x3';
  // import NL from '~icons/flag/nl-4x3';
  // import DE from '~icons/flag/de-4x3';

  // ISO-3166-1 codes
  type Language = { displayName: string; i18n: string; isoCode: string; component: any };
  type SupportedLanguages = Language[];

  const supportedLanguages: SupportedLanguages = [
    { displayName: 'English', i18n: 'en', isoCode: 'gb', component: Gb_flag },
    { displayName: 'Nederlands', i18n: 'nl', isoCode: 'nl', component: Nl_flag },
    { displayName: 'Deutsch', i18n: 'de', isoCode: 'de', component: De_flag }
  ];

  // TODO: BUG: bind this input to $listbox.selected
  export let selected: string = supportedLanguages[0].i18n; // default: 'en'

  // TODO: type list so 'selected' isn't 'any'
  const listbox = createListbox({
    label: 'Actions',
    selected: supportedLanguages.find((l) => l.i18n === selected)
  });

  const dispatch = createEventDispatcher();

  function onSelect(e: Event) {
    selected = (e as CustomEvent).detail.selected.i18n;
    dispatch('value', selected);
  }

  $: {
    console.log('selected changed: ', selected);
    listbox.selected = supportedLanguages.find((l) => l.i18n === selected);
    listbox.active = supportedLanguages.find((l) => l.i18n === selected);
    // listbox.set(listbox);
  }

  onMount(() => {
    // listbox.open();
  });
</script>

<div class="flex w-full flex-col items-center justify-center">
  <div class="min-w-[12rem]">
    <div class="relative">
      <button
        use:listbox.button
        on:select={onSelect}
        class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm ring-1 ring-slate-200 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-violet-300 dark:bg-slate-800 dark:text-neutral-300 dark:ring-slate-900 dark:focus-visible:ring-slate-900 sm:text-sm"
      >
        <!-- <span class="block truncate"> -->
        <span class="flex items-center">
          <span class="mr-1.5 h-[18px] w-[24px]"
            ><svelte:component
              this={supportedLanguages.find((l) => l.i18n === selected)?.component}
            /></span
          >
          <span>{supportedLanguages.find((l) => l.i18n === selected)?.displayName}</span>
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
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800 sm:text-sm"
        >
          {#each supportedLanguages as language}
            {@const active = $listbox.active === language}
            {@const selected = $listbox.selected === language}
            <!-- TODO: bug: item[0] is always selected on reload -->
            <li
              class="relative flex cursor-default select-none items-center py-2 pl-10 pr-4 {active
                ? 'bg-violet-100 text-violet-900 dark:bg-violet-700 dark:text-violet-300'
                : 'text-gray-900 dark:text-neutral-300'}"
              use:listbox.item={{ value: language }}
            >
              <!-- Checkmark -->
              {#if selected}
                <span
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-violet-600 dark:text-violet-200"
                >
                  <Check class="h-5 w-5" strokeWidth="2" />
                </span>
              {/if}
              <!-- Flag -->
              <span class="mr-1.5 h-[18px] w-[24px]">
                <svelte:component this={language.component} />
              </span>
              <!-- Display name -->
              <span class="truncate {selected ? 'font-medium' : 'font-normal'}"
                >{language.displayName}</span
              >
            </li>
          {/each}
        </ul>
      </Transition>
    </div>
  </div>
</div>

<style>
  span :global(svg) {
    width: 24px;
    border-radius: 0.25rem;
  }
</style>
