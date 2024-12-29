{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/ubuntu/ubuntu-original.svg?raw"
  import Plain from "devicon/icons/ubuntu/ubuntu-plain.svg?raw"
  let { type } = $props()
</script>
