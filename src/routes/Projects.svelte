<script lang="ts">
  import Icon from "$lib/icons/icon.svelte"
  import { projects } from "$lib/projects"
  import { DateTime } from "luxon"
  const formatDate = (dt: Date | undefined) =>
    dt ? DateTime.fromJSDate(dt).toFormat('yyyy/MM') : ''
</script>

<h2>Projekte</h2>
<div class="grid gap-y-8 grid-flow-row grid-cols-3 gap-x-2">
  {#each projects as project}
    <div class="grid gap-0">

      <div class="label grid grid-flow-col auto-cols-min gap-2">
        <div>{formatDate(project.fromDate)}</div>
        <div>-</div>
        <div>
          {#if project.toDate}
          {formatDate(project.toDate)}
          {:else}
          Aktuell
          {/if}
        </div>
      </div>

      <div class="font-semibold text-lg text-gray-500">{project.name}</div>

      {#if project.url}
      <a class="text-sm" href="{project.url}">{project.url}</a>
      {/if}

      <div class="grid grid-flow-col auto-cols-min  ">
        {#each project.types as type, i}
        <div>
          {type}
        </div>
        {#if i !== project.types.length-1}
        <div class="px-2">-</div>
        {/if}
        {/each}
      </div>

      <!-- <div class="grid grid-flow-col auto-cols-min gap-x-2 items-center"> -->
      <div class="grid gap-x-2 items-center grid-cols-[min-content_min-content_min-content_min-content_min-content_min-content_min-content]" >
        {#each project.languages as language}
        <Icon name={language} type="original" />
        {/each}
        {#each project.technologies as technology}
        <Icon name={technology} type="original" />
        {/each}
      </div>

    </div>
  {/each}
</div>