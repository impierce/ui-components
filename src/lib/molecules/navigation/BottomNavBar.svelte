<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import BottomNavigationItem from '$lib/atoms/BottomNavigationItem.svelte';

  import User from '~icons/lucide/user';
  import Me from './icons/Me.svelte';

  // import Scan from '~icons/lucide/scan';
  import Scan from './icons/Scan.svelte';

  // import Activity from '~icons/lucide/activity';
  import Activity from './icons/Activity.svelte';

  const dispatch = createEventDispatcher();

  export let active: 'me' | 'scan' | 'activity' = 'me';
</script>

<div
  class="flex h-[64px] justify-evenly bg-foreground py-0 dark:bg-foreground-dark sm:justify-center sm:space-x-24"
>
  <!-- 1: Me -->
  <BottomNavigationItem label="Me" active={active == 'me'} on:click={() => dispatch('me')}>
    <!-- Currently, there is no better way of applying conditional Tailwind classes to a named slot inside a component. -->
    <!-- <User
      slot="icon"
      class={`h-6 w-6 ${
        active == 'me' ? 'text-black dark:text-primary' : 'text-slate-400 dark:text-white'
      }`}
    /> -->
    <Me
      slot="icon"
      clazz={`h-6 w-6 ${
        active == 'me' ? 'text-black dark:text-primary' : 'text-slate-400 dark:text-white'
      }`}
    />
  </BottomNavigationItem>

  <!-- 2: Scan -->
  <BottomNavigationItem label="Scan" active={active == 'scan'} on:click={() => dispatch('scan')}>
    <Scan
      slot="icon"
      clazz={`h-6 w-6 ${
        active == 'scan' ? 'text-black dark:text-primary' : 'text-slate-400 dark:text-white'
      }`}
    />
  </BottomNavigationItem>

  <!-- 3: Activity -->
  <BottomNavigationItem
    label="Activity"
    active={active == 'activity'}
    on:click={() => dispatch('activity')}
  >
    <Activity
      slot="icon"
      clazz={`h-6 w-6 ${
        active == 'activity' ? 'text-black dark:text-primary' : 'text-slate-400 dark:text-white'
      }`}
    />
  </BottomNavigationItem>
</div>
