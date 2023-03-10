<script>
  import BottomNavigation from '$lib/molecules/BottomNavigation.svelte';
  import ActionTemplate from '$lib/templates/ActionTemplate.svelte';
</script>

<link href="/tailwind.css" rel="stylesheet" />

<!-- <h1>Welcome to your library project</h1> -->
<!-- <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<div class="flex flex-col h-screen">
  <div class="grow p-6">
    <ActionTemplate />
  </div>
  <BottomNavigation />
</div>
