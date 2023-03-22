<script lang="ts">
  import { goto } from '$app/navigation';
  import Avatar from '$lib/atoms/Avatar.svelte';
  import BottomNavigation from '$lib/molecules/BottomNavigation.svelte';
  import CredentialListEntry from '$lib/molecules/CredentialListEntry.svelte';
  import { CreditCard, FingerPrint, Identification, QrCode } from 'svelte-heros-v2';

  export let credentials: any = [
    { title: 'Personal information', description: 'Self-issued credential' },
    { title: 'Banking details', description: 'Barclays' },
    { title: 'ID card copy', description: 'Passport Office' }
  ];
</script>

<div class="min-h-screen">
  <button
    class="absolute z-0 bg-white p-3 rounded-full top-12 right-6 shadow-md"
    on:click={() => goto('/login')}
  >
    <QrCode size="28" class="text-violet-800" />
  </button>
  <img src="blobs.png" alt="background-blobs" class="opacity-60 w-full absolute -z-10" />
  <div class="bg-white rounded-t-3xl h-5/6 absolute bottom-0 w-full">
    <div class="flex justify-center relative bottom-12 -mb-8">
      <Avatar size="large" />
    </div>
    <div class="flex justify-center font-bold text-3xl">John Doe</div>
    <!-- w-full absolute bottom-0 -z-10" /> -->
    <div class="p-6 space-y-4">
      <!-- Personal information -->
      <CredentialListEntry
        title={credentials[0].title}
        description={credentials[0].description}
        on:clicked={() => goto('/credentials')}
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
