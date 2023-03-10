<script lang="ts">
  import CredentialListEntry from '$lib/molecules/CredentialListEntry.svelte';
  import { AcademicCap } from 'svelte-heros-v2';

  export let credentials: any = [
    { title: 'Personal information', description: 'Self-issued credential' },
    { title: 'Banking details', description: 'Barclays' },
    { title: 'ID card copy', description: 'Passport Office' }
  ];
</script>

<div class="space-y-4">
  {#each credentials as credential}
    <CredentialListEntry title={credential.title} description={credential.description}>
      <span slot="icon"><AcademicCap class="text-violet-500" /></span>
    </CredentialListEntry>
  {/each}
</div>
