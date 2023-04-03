<script lang="ts">
  import Button from '$lib/atoms/Button.svelte';

  export let title = 'Title';
  export let description = 'Description';
</script>

<div class="flex h-full flex-col">
  <!-- Description (text) -->
  <p class="text-center text-2xl font-semibold">
    {title}
  </p>
  <p class="text-center font-normal opacity-50">
    {description}
  </p>

  <!-- Content -->
  <div class="my-4 grow">
    <slot name="content">
      <div class="grid h-full grow place-content-center rounded-lg border text-neutral-400">
        content
      </div>
    </slot>
  </div>

  <!-- Buttons -->
  <div class="flex flex-col space-y-4">
    <slot name="buttons">
      <Button type="cancel" label="Cancel" />
      <Button type="accept" label="Confirm" />
    </slot>
  </div>
</div>
