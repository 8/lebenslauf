{#if type === "line"}
  {@html Line}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Line from "devicon/icons/rust/rust-line.svg?raw"
  import Original from "devicon/icons/rust/rust-original.svg?raw"
  let { type } = $props()
</script>
