<div>
  <div class="label">{label}</div>
  <div>{@render children?.()}</div>
</div>

<style lang="postcss">
.label {
  @apply text-cyan-700;
}
</style>

<script lang="ts">
  let { label, children }: {
    label: string,
    children?: any,
  } = $props()
</script>