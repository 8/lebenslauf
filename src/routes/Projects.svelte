<script lang="ts">
  import Icon from "$lib/icons/icon.svelte"
  import { projects } from "$lib/projects"
  import { DateTime } from "luxon"
  const formatDate = (dt: Date | undefined) =>
    dt ? DateTime.fromJSDate(dt).toFormat('yyyy-MM') : ''
</script>

<h2>Projekte</h2>
<div class="grid gap-y-8 grid-flow-row grid-cols-3 gap-3">
  {#each projects as project}
    <div class="grid">

      <div class="label font-semibold grid grid-flow-col auto-cols-min gap-2">
        <div>{formatDate(project.fromDate)}</div>
        {#if project.toDate}
        <div>-</div>
        <div>{formatDate(project.toDate)}</div>
        {/if}
      </div>

      <div class="grid grid-cols-[1fr_auto] gap-2">
        <div class="text-base font-semibold text-gray-600">{project.name}</div>
      </div>

      {#if project.url}
      <a href="{project.url}">{project.url}</a>
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

      <div class="grid grid-flow-col auto-cols-min gap-x-2 ">
        <div class="grid grid-flow-col auto-cols-min gap-x-2">
          {#each project.languages as language}
          <Icon name={language} type="original" />
          {/each}
        </div>
          {#each project.technologies as technology}
          <Icon name={technology} type="original" />
          {/each}
      </div>

    </div>
  {/each}
  <!-- <div>Fremdwährungsanlage</div>
  <div>Amescon GmbH</div>
  <div>2024</div> -->

  <!--
  <div>Timetracking</div>

  <div>Website & Desktop Application / <a href="https://gitcontributors.com">git-contributors.com</a></div>

  <div>Website & Desktop Application / <a href="https://vault-exporter.com">vault-exporter.com</a></div>

  <div>Desktop Applikation / Steuerberatungskanzlei</div>

  <div>Web und Desktop Applikation / Ringschuh</div>

  <div>Web Applikationen und Service Entwicklung / Kapsch Traffic Com</div>

  <div>Datenbankwartung / Ringschuh</div>

  <div>Softwareberatung / Anwaltskanzlei</div>

  <div>Mustererkungsbasierte Dokumentenverarbeitung / AKV</div>
  
  <div>Web-basierte Fragebogensoftware / Universität Salzburg</div>
  -->
</div>