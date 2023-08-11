<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Scan from '~icons/lucide/scan';
  import User from '~icons/lucide/user';
  import Activity from '~icons/lucide/activity';
  import NavItem from '$lib/atoms/BottomNavigationItem.svelte';

  const dispatch = createEventDispatcher();

  export let active: 'me' | 'scan' | 'activity' = 'me';
</script>

<div
  class="flex justify-evenly bg-white py-0 dark:border-slate-900 dark:bg-slate-800 sm:justify-center sm:space-x-24"
>

  <!-- 1: Me -->
  <NavItem label="Me" active={active == 'me'} on:click={() => dispatch('me')}>
    <!-- Currently, there is no better way of applying conditional Tailwind classes to a named slot inside a component. -->
    <User
      slot="icon"
      class={`h-6 w-6 ${
        active == 'me' ? 'text-black dark:text-white' : 'text-slate-400 dark:text-slate-500'
      }`}
    />
  </NavItem>

  <!-- 2: Scan -->
  <NavItem label="Scan" active={active == 'scan'} on:click={() => dispatch('scan')}>
    <Scan
      slot="icon"
      class={`h-6 w-6 ${
        active == 'scan' ? 'text-black dark:text-white' : 'text-slate-400 dark:text-slate-500'
      }`}
    />
  </NavItem>

  <!-- 3: Activity -->
  <NavItem label="Activity" active={active == 'activity'} on:click={() => dispatch('activity')}>
    <Activity
      slot="icon"
      class={`h-6 w-6 ${
        active == 'activity' ? 'text-black dark:text-white' : 'text-slate-400 dark:text-slate-500'
      }`}
    />
  </NavItem>
</div>
