{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/dotnetcore/dotnetcore-original.svg?raw"
  import Plain from "devicon/icons/dotnetcore/dotnetcore-plain.svg?raw"
  let { type } = $props()
</script>
