{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/postgresql/postgresql-original.svg?raw"
  import Plain from "devicon/icons/postgresql/postgresql-plain.svg?raw"
  let { type } = $props()
</script>
