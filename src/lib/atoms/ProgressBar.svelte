<script lang="ts">
  export let value: number;
</script>

<div class="relative pt-1">
  <div class="mb-4 flex h-2 overflow-hidden rounded bg-violet-100 text-xs">
    <div
      style="width:{value}%"
      class="flex flex-col justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-center text-white shadow-none"
    />
  </div>
</div>
