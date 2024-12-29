{#if type === "line"}
  {@html Line}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/blazor/blazor-original.svg?raw"
  import Line from "devicon/icons/blazor/blazor-line.svg?raw"
  let { type } = $props()
</script>
