{#if type === "plain" }
  {@html Plain}
{:else if type === "line"}
  {@html Line}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/openapi/openapi-original.svg?raw"
  import Plain from "devicon/icons/openapi/openapi-plain.svg?raw"
  import Line from "devicon/icons/openapi/openapi-line.svg?raw"
  let { type } = $props()
</script>
