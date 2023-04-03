<script>
  import { goto } from '$app/navigation';
  import Button from '$lib/atoms/Button.svelte';
  import BottomNavigation from '$lib/molecules/BottomNavigation.svelte';
  import ActionTemplate from '$lib/templates/ActionTemplate.svelte';
  import { CheckBadge, QuestionMarkCircle } from 'svelte-heros-v2';
  import { fly, slide } from 'svelte/transition';
</script>

<div class="flex h-screen flex-col">
  <div class="grow p-6" in:slide={{ duration: 400 }} out:fly={{ x: -50, duration: 400 }}>
    <ActionTemplate
      title="Log in to bestdex.com"
      description="bestdex.com is asking for your permission to log in"
    >
      <div slot="content" class="h-full rounded-lg border">
        <div class="flex space-x-4 p-6">
          <div class="h-max rounded-full border  p-4">
            <QuestionMarkCircle class="text-neutral-300" />
          </div>
          <div class="flex-auto space-y-8">
            <!-- Name -->
            <div class="flex flex-col">
              <span class="text-sm text-neutral-500">Name</span>
              <span class="text-xl font-semibold">bestdex.com</span>
            </div>

            <!-- URL -->
            <div class="flex flex-col">
              <span class="text-sm text-neutral-500">URL address</span>
              <div class="flex flex-row">
                <span class="flex items-center break-all font-mono text-xs">
                  https://www.bestdex.com/siop?key=my%20value&type=user
                </span>
                <div class="ml-2">
                  <CheckBadge variation="solid" class="text-emerald-400" />
                </div>
              </div>
            </div>

            <!-- Status -->
            <div class="flex flex-col">
              <span class="text-sm text-neutral-500">Status</span>
              <div class="flex flex-row">
                <span class="">Not connected</span>
                <div class="ml-2">
                  <button
                    on:click={() => {
                      console.log('TODO');
                    }}
                  >
                    <QuestionMarkCircle variation="solid" class="text-neutral-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="buttons" class="flex flex-col space-y-4">
        <Button label="Cancel" type="cancel" on:clicked={() => goto('/profile')} />
        <Button label="Log in" type="accept" on:clicked={() => goto('/credentials/share')} />
      </div>
    </ActionTemplate>
  </div>
  <BottomNavigation />
</div>
