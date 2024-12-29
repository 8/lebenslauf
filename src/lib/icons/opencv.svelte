{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/opencv/opencv-original.svg?raw"
  import Plain from "devicon/icons/opencv/opencv-plain.svg?raw"
  let { type } = $props()
</script>
