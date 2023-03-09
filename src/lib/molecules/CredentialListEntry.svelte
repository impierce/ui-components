<script lang="ts">
  import { QuestionMarkCircle } from 'svelte-heros-v2';

  export let title = '';
  export let description = '';
</script>

<div class="rounded-lg bg-slate-200 p-4 flex">
  <div class="rounded-md bg-slate-300 p-2 mr-4 w-12 h-12 grid place-items-center">
    <!-- <div class="flex w-full h-full"> -->
    <slot name="icon">
      <QuestionMarkCircle class="text-slate-500" />
    </slot>
    <!-- </div> -->
  </div>
  <div class="">
    <p class="font-semibold font-poppins">{title}</p>
    <p class="opacity-50 font-poppins text-sm">{description}</p>
  </div>
</div>
