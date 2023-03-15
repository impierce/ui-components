<script>
  import { goto } from '$app/navigation';
</script>

<div class="p-4">
  <h1 class="font-bold text-2xl">Use cases</h1>
  <div class="flex flex-col space-y-4 p-4">
    <button class="rounded border shadow px-4 py-2 text-slate-500" on:click={() => goto('/welcome')}>👋 Welcome new user</button>
    <button class="rounded border shadow px-4 py-2 text-slate-500" on:click={() => goto('/profile')}>🔑 Login to website</button>
  </div>
</div>
