<script lang="ts">
  import Button from '$lib/atoms/Button.svelte';

  export let title = 'Title';
  export let description = 'Description';
</script>

<div class="flex flex-col h-full">
  <!-- Description (text) -->
  <p class="font-semibold text-2xl text-center">
    {title}
  </p>
  <p class="font-normal opacity-50 text-center">
    {description}
  </p>

  <!-- Content -->
  <div class="my-4 grow">
    <slot name="content">
      <div class="h-full border rounded-lg grid place-content-center text-neutral-400 grow">
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
