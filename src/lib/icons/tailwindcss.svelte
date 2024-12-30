{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/tailwindcss/tailwindcss-original.svg?raw"
  import Plain from "devicon/icons/tailwindcss/tailwindcss-plain-wordmark.svg?raw"
  let { type } = $props()
</script>
