<script>
  import { goto } from '$app/navigation';
  import Button from '$lib/atoms/Button.svelte';
  import BottomNavigation from '$lib/molecules/navigation/BottomNavBar.svelte';
  import ActionTemplate from '$lib/templates/ActionTemplate.svelte';
  import { slide } from 'svelte/transition';
</script>

<div class="flex h-screen flex-col">
  <div class="grow p-6" in:slide={{ duration: 400 }}>
    <ActionTemplate title="Login" description="Please point the camera towards a QR code">
      <div
        slot="content"
        class="grid h-full grow place-content-center rounded-lg border text-neutral-400"
      >
        <button
          class="rounded-lg border border-slate-200 py-2 px-4 font-semibold text-violet-600 shadow"
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
