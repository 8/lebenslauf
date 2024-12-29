{#if type === "plain" }
  {@html Plain}
{:else}
  {@html Original}
{/if}
<script lang="ts">
  import Original from "devicon/icons/ansible/ansible-original.svg?raw"
  import Plain from "devicon/icons/ansible/ansible-plain.svg?raw"
  let { type } = $props()
</script>
