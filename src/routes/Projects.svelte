<script lang="ts">
  import Icon from "$lib/icons/icon.svelte"
  import { projects } from "$lib/projects"
  import { DateTime } from "luxon"
  const formatDate = (dt: Date | undefined) =>
    dt ? DateTime.fromJSDate(dt).toFormat('yyyy-MM') : ''
</script>

<h2>Projekte</h2>
<div class="grid gap-y-5 grid-flow-row grid-cols-4 gap-3">
  {#each projects as project}
    <div class="grid border-2 bg-gray-50 rounded-lg px-2 pt-1 pb-2">
      <div class="label font-semibold grid grid-flow-col justify-between">
        <div>{formatDate(project.fromDate)}</div>
        <div>{formatDate(project.toDate)}</div>
      </div>
      <div class="text-lg text-gray-700">{project.name}</div>
      <div class="grid grid-flow-col auto-cols-min ">
        <!-- divide-x-2 divide-gray-400 -->
        {#each project.types as type, i}
        <!-- <div class="px-2 first:pl-0 last:pr-0 text-gray-900"> -->
        <div>
          {type}
        </div>
        {#if i !== project.types.length-1}
        <div class="px-2">-</div>
        {/if}
        {/each}
      </div>

      <div class="grid grid-flow-col auto-cols-min gap-x-2 ">
        <!-- <div class="grid grid-flow-col auto-cols-min"> -->
          {#each project.languages as language}
          <Icon name={language} type="original" />
          {/each}
        <!-- </div> -->
        <div class="text-gray-400">
          |
        </div>
        <!-- <div class="grid grid-flow-col auto-cols-min"> -->
          {#each project.technologies as technology}
          <Icon name={technology} type="original" />
          {/each}
        <!-- </div> -->
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