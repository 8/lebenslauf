{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/docker/docker-original.svg?raw"
  import Plain from "devicon/icons/docker/docker-plain.svg?raw"
  let { type } = $props()
</script>
