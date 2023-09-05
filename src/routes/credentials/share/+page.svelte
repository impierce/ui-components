<script>
  import { goto } from '$app/navigation';
  import Button from '$lib/atoms/Button.svelte';
  import ProgressBar from '$lib/atoms/ProgressBar.svelte';
  import BottomNavBar from '$lib/molecules/navigation/BottomNavBar.svelte';
  import CredentialListEntry from '$lib/molecules/CredentialListEntry.svelte';
  import ActionTemplate from '$lib/templates/ActionTemplate.svelte';
  import { AtSymbol, FingerPrint } from 'svelte-heros-v2';
  import { fly, slide, blur } from 'svelte/transition';
</script>

<div class="flex h-screen flex-col">
  <div class="grow p-6" in:fly={{ x: 50, delay: 400, duration: 400 }}>
    <ActionTemplate
      title="Share credentials"
      description="bestdex.com wants to access your following credentials and information"
    >
      <div slot="content">
        <div class="space-y-4">
          <CredentialListEntry title="Personal information" description="Self-issued credential">
            <span slot="icon"><FingerPrint class="text-violet-500" /></span>
          </CredentialListEntry>
          <CredentialListEntry title="Email address" description="john.doe@example.org">
            <span slot="icon"><AtSymbol class="text-violet-500" /></span>
          </CredentialListEntry>
        </div>
        <div class="grid p-8">
          <ProgressBar value={60} />
          <span class="text-center font-medium text-violet-700">Medium data sensitivity</span>
        </div>
      </div>
      <div slot="buttons" class="flex flex-col space-y-4">
        <Button label="Deny" type="cancel" on:clicked={() => goto('/profile')} />
        <Button label="Share credentials" type="accept" on:clicked={() => goto('/profile')} />
      </div>
    </ActionTemplate>
  </div>
  <BottomNavBar />
</div>
