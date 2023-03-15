<script>
  import { goto } from '$app/navigation';
  import Button from '$lib/atoms/Button.svelte';
  import BottomNavigation from '$lib/molecules/BottomNavigation.svelte';
  import ActionTemplate from '$lib/templates/ActionTemplate.svelte';
</script>

<div class="flex flex-col h-screen">
  <div class="grow p-6">
    <ActionTemplate title="Login" description="Please point the camera towards a QR code">
      <div
        slot="content"
        class="h-full border rounded-lg grid place-content-center text-neutral-400 grow"
      >
        <button
          class="shadow border border-slate-200 text-violet-600 font-semibold py-2 px-4 rounded-lg"
          on:click={() => goto('/login/confirm')}>Click to scan</button
        >
      </div>
      <div slot="buttons" class="grid">
        <Button label="Cancel" type="cancel" on:clicked={() => goto('/profile')} />
      </div>
    </ActionTemplate>
  </div>
  <BottomNavigation />
</div>
