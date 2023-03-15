<script>
  import { goto } from '$app/navigation';
  import Button from '$lib/atoms/Button.svelte';
  import ActionTemplate from '$lib/templates/ActionTemplate.svelte';
</script>

<div class="p-6 h-screen">
  <ActionTemplate title="Welcome" description="">
    <div slot="content" class="h-full">
      <div class="h-full grid place-content-center text-slate-500 p-8">
        Welcome to your identity wallet! You can store information about yourself and manage
        certificates and other verifiable information. Your data never leaves your devices unless
        you explicitly want to. To get started, please create a new profile.
      </div>
    </div>
    <div slot="buttons" class="grid">
      <Button label="Create new profile" on:clicked={() => goto('/profile/new')} />
    </div>
  </ActionTemplate>
</div>
