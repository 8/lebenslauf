{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/angular/angular-original.svg?raw"
  import Plain from "devicon/icons/angular/angular-plain.svg?raw"
  let { type } = $props()
</script>
