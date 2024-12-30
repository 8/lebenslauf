<script lang="ts">
  import Languages from "./Languages.svelte"
</script>

<div class="grid grid-cols-2 gap-y-5 pt-20">
    
  <Languages />

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