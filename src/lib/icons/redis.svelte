{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/redis/redis-original.svg?raw"
  import Plain from "devicon/icons/redis/redis-plain.svg?raw"
  let { type } = $props()
</script>
