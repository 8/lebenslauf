<script lang="ts">
  import { DateTime } from 'luxon'
  import Item from './Item.svelte'
  import { projects } from '$lib/projects'
  import Icon from '$lib/icons/icon.svelte'

  const formatDate = (dt: Date | undefined) =>
    dt ? DateTime.fromJSDate(dt).toFormat('yyyy-MM') : ''
</script>

<div class="px-10">
  <div class="grid auto-cols-min">
    <div class="bg-cyan-700 h-20 text-white px-4 py-1 grid items-end">Lebenslauf</div>
  </div>

  <div class="grid grid-cols-[1fr_auto]">
    <div class="pt-4">
      <h1>Martin Kramer</h1>
    </div>
    <div class="">
      <img class="rounded-full" src="author.png" alt="Martin Kramer" />
    </div>
  </div>

  <div class="grid grid-cols-2">
    <div>
      <h2>Persönliche Daten</h2>

      <div class="grid gap-y-2">
        <Item label="Name">Martin Kramer</Item>
        <div>
          <div class="label">Name</div>
          <div>Martin Kramer</div>
        </div>

        <div>
          <div class="label">Anschrift</div>
          <div>Anton-Baumgartner-Strasse 44, A7 3/3</div>
        </div>

        <div>
          <div class="label">Tel</div>
          <div>+43 699 19052088</div>
        </div>

        <div>
          <div class="label">E-Mail</div>
          <div>
            <a href="mailto:martin.kramer@lostindetails.com">martin.kramer@lostindetails.com</a>
          </div>
        </div>

        <div>
          <div class="label">Web</div>
          <div><a href="https://lostindetails.com">https://lostindetails.com</a></div>
        </div>

        <div>
          <div class="label">Geb.</div>
          <div>3.4.1981 in Wien</div>
        </div>
      </div>
    </div>

    <div>
      <h2>Laufbahn</h2>

      <div class="grid gap-y-2">
        <div>
          <div class="label">2015/10-2024/12</div>
          <div>Selbständiger Software Consultant</div>
        </div>
        <div>
          <div class="label">2015/8-2015/10</div>
          <div>UGP Programm / Vorbereitung auf Selbstständigkeit</div>
        </div>
        <div>
          <div class="label">2004/10-2015/8</div>
          <div>Amescon GmbH</div>
          <div>Software Developer / Senior Software Developer</div>
        </div>
        <div>
          <div class="label">2002-2003</div>
          <div>Bluebridge Technologies GmbH</div>
          <div>Software Developer</div>
        </div>

        <div>
          <div class="label">1999-2001</div>
          <div>Studium Informatik an der TU-Wien</div>
        </div>

        <div>
          <div class="label">bis 1999</div>
          <div>Realgymnasium auf der Schmelz</div>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-10">
    <h2>Kenntnisse & Fähigkeiten</h2>
    <div class="grid grid-cols-2 gap-y-5">
      <div>
        <div class="label">Kernkompetenz</div>
        <div>Applikationsentwicklung für Web und Desktop</div>
      </div>

      <div>
        <div class="label">Applicationsentwicklung</div>
        <ul>
          <li>Web Applikationen</li>
          <li>Desktop Applikationen</li>
          <li>Dienste Applikationen</li>
          <li>Kommandozeilen Applikationen</li>
        </ul>
      </div>
    </div>
  </div>

  <div style="break-after:page"></div>

  <div class="pt-10">
    <h2>Projekte</h2>
    <div class="grid gap-y-5 grid-flow-row">
      {#each projects as project}
        <div class="grid ">
          <div class="label font-semibold">
            {formatDate(project.fromDate)}
            {`${project.toDate ? '-' : ''}`}
            {formatDate(project.toDate)}
          </div>
          <div class="font-semibold text-gray-600 tracking-wide text-lg">{project.name}</div>
          <div class="grid grid-flow-col auto-cols-min divide-x-2 divide-gray-400">
            {#each project.types as type}
            <div class="px-2 first:pl-0 last:pr-0 text-gray-900">
              {type}
            </div>
            {/each}
          </div>
          <div class="grid grid-flow-col auto-cols-min gap-x-2 py-1">
            {#each project.languages as language}
            <Icon name={language} type="original" />
            {/each}
          </div>
          <div class="grid grid-flow-col auto-cols-min gap-x-2">
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
  </div>

  <div class="grid grid-cols-2 gap-y-5 pt-20">
    <div>
      <div class="label">Programmiersprachen</div>
      <ul>
        <li>
          <!-- <i class="devicon-csharp-original"></i> -->
          C#
        </li>
        <li>
          Typescript
        </li>
        <li>
          F#
        </li>
        <li>
          Javascript
        </li>
        <li>
          rust
        </li>
        <li>SQL</li>
      </ul>
    </div>

    <div>
      <div class="label">Desktop Applikation</div>
      <ul>
        <li>Tauri</li>
        <li>WPF</li>
      </ul>
    </div>

    <div>
      <div class="label">Deployment</div>
      <ul>
        <li>Docker</li>
        <li>Ansible</li>
      </ul>
    </div>

    <div>
      <div class="label">CI/CD Pipelines</div>
      <ul>
        <li>gitlab</li>
        <li>github</li>
        <li>jenkins</li>
      </ul>
    </div>

    <div>
      <div class="label">Datenbanken</div>
      <ul>
        <li>PostgreSQL</li>
        <li>MSSQL</li>
        <li>Sqlite</li>
        <li>MySql</li>
        <li>Oracle</li>
      </ul>
    </div>

    <div>
      <div class="label">Web Technologien</div>
      <ul>
        <li>Svelte</li>
        <li>Vue</li>
        <li>TailwindCSS</li>
        <li>Angular</li>
      </ul>
    </div>

    <div>
      <div class="label">Mobile</div>
      <ul>
        <li>Tauri mobile</li>
        <li>Xamarin Forms</li>
        <li>Apache Cordova</li>
      </ul>
    </div>
  </div>
</div>

<style lang="postcss">
  h1 {
    @apply uppercase text-cyan-700 text-5xl;
  }
  h2 {
    @apply text-gray-500 text-3xl pb-4;
  }
  ul {
    @apply list-square list-inside;
  }
  .label {
    @apply text-cyan-700;
  }
  a {
    @apply underline;
  }
</style>
