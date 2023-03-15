<script>
  import { goto } from '$app/navigation';
  import BottomNavigation from '$lib/molecules/BottomNavigation.svelte';
  import DetailsTemplate from '$lib/templates/DetailsTemplate.svelte';
</script>

<div class="flex flex-col h-screen">
  <div class="grow">
    <DetailsTemplate on:clicked={() => goto('/profile')}/>
  </div>
  <div class="z-0">
    <BottomNavigation on:profile={() => goto('/profile')} />
  </div>
</div>
