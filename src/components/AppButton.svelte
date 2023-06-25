<button class="h-8 py-2 px-4 rounded-sm
  bg-zinc-100 text-zinc-900 font-bold
  inline-flex items-center whitespace-nowrap
  hover:opacity-70 transition-opacity
  disabled:opacity-50"
        disabled={disabled}
        on:click={onClick}>
  <slot />
</button>

<script>
  export let disabled;
  export let onClick;
</script>