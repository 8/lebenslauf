{#if type === "plain" }
  {@html Plain}
{:else if type === "line"}
  {@html Line}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/docker/docker-original.svg?raw"
  import Line from "devicon/icons/csharp/docker-line.svg?raw"
  import Plain from "devicon/icons/csharp/docker-plain.svg?raw"
  let { type } = $props()
</script>
