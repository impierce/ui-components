<script lang="ts">
  import { goto } from '$app/navigation';
  import Avatar from '$lib/atoms/Avatar.svelte';
  import BottomNavigation from '$lib/molecules/BottomNavigation.svelte';
  import CredentialListEntry from '$lib/molecules/CredentialListEntry.svelte';
  import { CreditCard, FingerPrint, Identification, QrCode } from 'svelte-heros-v2';
  import AlertDialog from '$lib/molecules/AlertDialog.svelte';
  import LanguageSelect from '$lib/atoms/LanguageSelect.svelte';

  export let credentials: any = [
    { title: 'Personal information', description: 'Self-issued credential' },
    { title: 'Banking details', description: 'Barclays' },
    { title: 'ID card copy', description: 'Passport Office' }
  ];

  let showAlert = false;
</script>

<div class="min-h-screen">
  {#if showAlert}
    <AlertDialog />
  {/if}

  <button
    class="absolute top-12 right-6 z-0 rounded-full bg-white p-3 shadow-md"
    on:click={() => goto('/login')}
  >
    <QrCode size="28" class="text-violet-800" />
  </button>
  <img src="blobs.png" alt="background-blobs" class="absolute -z-10 w-full opacity-60" />
  <div class="absolute bottom-0 h-5/6 w-full rounded-t-3xl bg-white">
    <div class="relative bottom-12 -mb-8 flex justify-center">
      <Avatar size="large" />
    </div>
    <div class="flex justify-center text-3xl font-bold">John Doe</div>

    <div class="flex justify-center">
      <LanguageSelect />
    </div>

    <!-- w-full absolute bottom-0 -z-10" /> -->
    <div class="space-y-4 p-6">
      <!-- Personal information -->
      <CredentialListEntry
        title={credentials[0].title}
        description={credentials[0].description}
        on:clicked={() => (showAlert = true)}
      >
        <span slot="icon"><FingerPrint class="text-violet-500" /></span>
      </CredentialListEntry>
      <!-- Banking -->
      <CredentialListEntry
        title={credentials[1].title}
        description={credentials[1].description}
        on:clicked={() => goto('/credentials')}
      >
        <span slot="icon"><CreditCard class="text-violet-500" /></span>
      </CredentialListEntry>
      <!-- ID -->
      <CredentialListEntry
        title={credentials[2].title}
        description={credentials[2].description}
        on:clicked={() => goto('/credentials')}
      >
        <span slot="icon"><Identification class="text-violet-500" /></span>
      </CredentialListEntry>
    </div>
  </div>
  <div class="sticky top-[100vh]">
    <BottomNavigation />
  </div>
</div>
