<script lang="ts">
  export let value: number;
</script>

<div class="relative pt-1">
  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-violet-100">
    <div
      style="width:{value}%"
      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-violet-600 to-pink-500 rounded-full"
    />
  </div>
</div>
