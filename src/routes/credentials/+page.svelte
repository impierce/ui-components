<script>
  import { goto } from '$app/navigation';
  import BottomNavigation from '$lib/molecules/BottomNavigation.svelte';
  import DetailsTemplate from '$lib/templates/DetailsTemplate.svelte';
  import { blur, fly, slide } from 'svelte/transition';
</script>

<div class="flex flex-col h-screen">
  <!-- <div class="grow" in:blur="{{duration: 2000, amount: 10}}"> -->
  <div class="grow" in:fly="{{duration: 800, y: 20 }}">
  <!-- <div class="grow"> -->
    <DetailsTemplate on:clicked={() => goto('/profile')} />
  </div>
  <div class="z-0">
    <BottomNavigation on:profile={() => goto('/profile')} />
  </div>
</div>
