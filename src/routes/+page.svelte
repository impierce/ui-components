<script>
  import { goto } from '$app/navigation';
</script>

<div class="p-4">
  <h1 class="text-2xl font-bold">Use cases</h1>
  <div class="flex flex-col space-y-4 p-4">
    <button class="rounded border px-4 py-2 text-slate-500 shadow" on:click={() => goto('/welcome')}
      >👋 Welcome new user</button
    >
    <button class="rounded border px-4 py-2 text-slate-500 shadow" on:click={() => goto('/profile')}
      >🔑 Login to website</button
    >
  </div>
</div>
