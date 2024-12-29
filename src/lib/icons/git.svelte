{#if type === "plain" }
  {@html Plain}
{:else if type === "line"}
  {@html Line}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/git/git-original.svg?raw"
  import Plain from "devicon/icons/git/git-plain.svg?raw"
  import Line from "devicon/icons/git/git-line.svg?raw"
  let { type } = $props()
</script>
