{#if type==="plain" }
  {@html Plain}
<!-- {:else if type === "line"}
  {@html Line} -->
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/javascript/javascript-original.svg?raw"
  import Plain from "devicon/icons/javascript/javascript-plain.svg?raw"
  // import Line from "devicon/icons/javascript/javascript-line.svg?raw"
  let { type } = $props()
</script>
