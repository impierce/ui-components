<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/atoms/Button.svelte';
  import Input from '$lib/atoms/Input.svelte';
  import ActionTemplate from '$lib/templates/ActionTemplate.svelte';

  let seed: string[] = 'alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu'.split(
    ' '
  );
</script>

<div class="h-screen p-6">
  <ActionTemplate title="Create new profile" description="">
    <div slot="content" class="h-full">
      <div class="">
        <Input placeholder="Enter profile name ..." />
      </div>
      <!-- <div class="grid grid-cols-3 gap-2 place-items-center border rounded-lg p-4">
        {#each seed as word}
            <p class="text-slate-400 font-mono">{word}</p>
        {/each}
      </div> -->
      <!-- <div class="h-full grid place-content-center text-slate-500 p-8">
          Welcome to your identity wallet! You can store information about yourself and manage
          certificates and other verifiable information. Your data never leaves your devices unless
          you explicitly want to. To get started, please create a new profile.
        </div> -->
    </div>
    <div slot="buttons" class="grid">
      <Button label="Create" on:clicked={() => goto('/profile')} />
    </div>
  </ActionTemplate>
</div>
