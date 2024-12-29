{#if type === "plain" }
  {@html Plain}
<!-- {:else if type === "line"}
  {@html Line} -->
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/fsharp/fsharp-original.svg?raw"
  import Plain from "devicon/icons/fsharp/fsharp-plain.svg?raw"
  // import Line from "devicon/icons/fsharp/fsharp-line.svg?raw"
  let { type } = $props()
</script>
