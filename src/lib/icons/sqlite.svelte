{#if type === "plain" }
  {@html Plain}
<!-- {:else if type === "line"}
  {@html Line} -->
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/sqlite/sqlite-original.svg?raw"
  import Plain from "devicon/icons/sqlite/sqlite-plain.svg?raw"
  // import Line from "devicon/icons/sqlite/sqlite-line.svg?raw"
  let { type } = $props()
</script>
