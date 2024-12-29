{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/bootstrap/bootstrap-original.svg?raw"
  import Plain from "devicon/icons/bootstrap/bootstrap-plain.svg?raw"
  let { type } = $props()
</script>
