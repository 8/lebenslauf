{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/grpc/grpc-original.svg?raw"
  import Plain from "devicon/icons/grpc/grpc-plain.svg?raw"
  let { type } = $props()
</script>
