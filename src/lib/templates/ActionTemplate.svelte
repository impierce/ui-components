<script lang="ts">
  import Button from '$lib/atoms/Button.svelte';

  export let title: string;
  export let description: string = '';
</script>

<div class="grid">
  <!-- Description (text) -->
  <p class="font-semibold text-2xl">
    {title}
  </p>
  <p class="font-normal opacity-50">
    {description}
  </p>

  <!-- Mid section -->
  <slot name="mid-section">
    <div class="h-24 rounded-lg border my-4" />
  </slot>

  <!-- Buttons -->
  <div class="flex flex-col space-y-4">
    <slot name="buttons">
      <Button type="cancel" label="Cancel" />
      <Button type="accept" label="Confirm" />
    </slot>
  </div>
</div>
