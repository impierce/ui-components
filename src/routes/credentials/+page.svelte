<script>
  import { goto } from '$app/navigation';
  import BottomNavBar from '$lib/molecules/navigation/BottomNavBar.svelte';
  import DetailsTemplate from '$lib/templates/DetailsTemplate.svelte';
  import { blur, fly, slide } from 'svelte/transition';
</script>

<div class="flex h-screen flex-col">
  <!-- <div class="grow" in:blur="{{duration: 2000, amount: 10}}"> -->
  <div class="grow" in:fly={{ duration: 800, y: 20 }}>
    <!-- <div class="grow"> -->
    <DetailsTemplate on:clicked={() => goto('/profile')} />
  </div>
  <div class="z-0">
    <BottomNavBar on:profile={() => goto('/profile')} />
  </div>
</div>
