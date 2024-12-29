{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/tauri/tauri-original.svg?raw"
  import Plain from "devicon/icons/tauri/tauri-plain.svg?raw"
  let { type } = $props()
</script>
