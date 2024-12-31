<script lang="ts">
  import Item from './Item.svelte'
  import Section from './Section.svelte'
  import Projects from './Projects.svelte'
  import PageBreak from './PageBreak.svelte'
  import Technologies from './Technologies.svelte'
    import { languages, technologies } from '$lib/projects'
    import Icon from '$lib/icons/icon.svelte'
</script>

<div class="px-10">
  <div class="grid auto-cols-min">
    <div class="bg-cyan-700 h-20 text-white px-4 py-1 grid items-end">Lebenslauf</div>
  </div>

  <div class="grid grid-cols-[1fr_auto]">
    <div class="pt-4">
      <h1>Martin Kramer</h1>
      <h2 class="uppercase">Software Consultant</h2>
    </div>
    <div class="">
      <img class="rounded-full" src="author.png" alt="Martin Kramer" />
    </div>
  </div>

  <div class="grid grid-cols-2">

    <Section title="Persönliche Daten">
      <Item label="Name">Martin Kramer</Item>
      <Item label="Anschrift">
        <div>Anton-Baumgartner-Strasse 44 A7 33</div>
        <div>1230 Wien</div>
      </Item>
      <Item label="Tel">+43 699 19052088</Item>
      <Item label="E-Mail">
        <a href="mailto:martin.kramer@lostindetails.com">martin.kramer@lostindetails.com</a>
      </Item>
      <Item label="Web">
        <a href="https://lostindetails.com">https://lostindetails.com</a>
      </Item>
      <Item label="Geb.">
        <div>3.4.1981 in Wien</div>
      </Item>
    </Section>

    <Section title="Laufbahn">
      <Item label="2015/10-2024/12">
        Selbständiger Software Consultant
      </Item>
      <Item label="2015/8-2015/10">
        UGP Programm / Vorbereitung auf Selbstständigkeit
      </Item>
      <Item label="2004/10-2015/8">
        <div>Amescon GmbH</div>
        <div>Software Developer & Senior Software Developer</div>
      </Item>
      <Item label="2002-2003">
        <div>Bluebridge Technologies GmbH</div>
        <div>Software Developer</div>
      </Item>
      <Item label="1999-2001">
        Studium Informatik an der TU-Wien
      </Item>
      <Item label="bis 1999">
        Realgymnasium auf der Schmelz
      </Item>
    </Section>

  </div>

  <div class="pt-10">
    <div>
      <h2>Serviceleistungen</h2>
      <div class="text-xl text-cyan-700">Beratung & Entwicklung</div>
      <ul class="pt-1">
        <li>Web Applikationen</li>
        <li>Desktop Applikationen</li>
        <li>Service Applikationen</li>
        <li>Kommandozeilen Applikationen</li>
      </ul>
    </div>
  </div>

  <PageBreak />

  <div class="pt-10">
    <Projects />
  </div>

  <div class="pt-10 grid grid-cols-2">
    <Section title="Technologien">
      <ul class="list-none grid grid-flow-row gap-y-1 grid-cols-2">
        {#each technologies as technology}
          <li>
            <div class="grid grid-flow-col auto-cols-min gap-1 items-center text-nowrap">
              <Icon name={technology} type="original" />
              {technology}
            </div>
          </li>
        {/each}
      </ul>
    </Section>
    <Section title="Programmiersprachen">
      <ul class="list-none grid grid-flow-row gap-y-1">
        {#each languages as language}
        <li class="">
          <div class="grid grid-flow-col auto-cols-min gap-1 items-center">
            <Icon name={language} type="original" />
            {language}
          </div>
        </li>
        
        {/each}
      </ul>
    </Section>
  </div>

</div>
