<button class="h-8 py-2 px-4 rounded-sm
  bg-slate-200 text-gray-800 font-bold
  inline-flex items-center whitespace-nowrap
  hover:opacity-80 transition-opacity
  disabled:opacity-50"
        disabled={disabled}
        on:click={onClick}>
  <slot />
</button>

<script>
  export let disabled;
  export let onClick;
</script>