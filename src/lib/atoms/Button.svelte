<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  /**
   * Is this the principal call to action on the page?
   */
  // export let primary = false;

  const dispatch = createEventDispatcher();

  export let emphasis: 'low' | 'medium' | 'high' = 'medium';

  export let type: 'accept' | 'cancel' = 'accept';

  /**
   * What background color to use
   */
  //   export let backgroundColor: string | undefined = undefined;
  /**
   * How large should the button be?
   */
  export let size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * Button contents
   */
  export let label: string;

  // $: mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  $: mode =
    type == 'accept'
      ? 'bg-gradient-to-b from-violet-500 to-violet-600 text-white shadow shadow-violet-600/50'
      : 'bg-red-100 text-red-500';

  //   $: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<!-- <button
    type="button"
    class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    {style}
    on:click
  >
    {label}
  </button> -->

<button
  type="button"
  class={`rounded-lg py-3 px-4 font-medium ${
    emphasis == 'low' ? 'bg-transparent text-black' : ''
  } ${mode}`}
  on:click={() => dispatch('clicked')}
>
  {label}
</button>
