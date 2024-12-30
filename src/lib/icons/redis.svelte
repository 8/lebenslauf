{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/csharp/csharp-original.svg?raw"
  import Plain from "devicon/icons/csharp/csharp-plain.svg?raw"
  let { type } = $props()
</script>
