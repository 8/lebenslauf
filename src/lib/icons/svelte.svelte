{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/svelte/svelte-original.svg?raw"
  import Plain from "devicon/icons/svelte/svelte-plain.svg?raw"
  let { type } = $props()
</script>
