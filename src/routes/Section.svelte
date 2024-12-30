<div>
  <h2>{title}</h2>
  <div class="grid gap-y-2">
    {@render children?.()}
  </div>
</div>

<script lang="ts">
  const { title, children } = $props()
</script>