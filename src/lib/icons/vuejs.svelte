{#if type === "plain" }
  {@html Plain}
{:else if type === "line"}
  {@html Line}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/vuejs/vuejs-original.svg?raw"
  import Plain from "devicon/icons/vuejs/vuejs-plain.svg?raw"
  import Line from "devicon/icons/vuejs/vuejs-line.svg?raw"
  let { type } = $props()
</script>
