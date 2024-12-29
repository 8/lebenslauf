{#if type === "plain" }
  {@html Plain}
<!-- {:else if type === "line"}
  {@html Line} -->
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/typescript/typescript-original.svg?raw"
  import Plain from "devicon/icons/typescript/typescript-plain.svg?raw"
  // import Line from "devicon/icons/typescript/typescript-line.svg?raw"
  let { type } = $props()
</script>
