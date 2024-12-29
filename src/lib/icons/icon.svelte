<script lang="ts">
  import Csharp from './csharp.svelte'
  import Javascript from './javascript.svelte'
  import Rust from './rust.svelte'
  import Typescript from './typescript.svelte'
  import Sqlite from './sqlite.svelte'
  import Fsharp from './fsharp.svelte'
  import type { Language, ProjectType, Technology } from '../types'

  let { name }: { name: Language | ProjectType | Technology } = $props()

  const getComponent = () => {
    switch (name) {
      case 'Javascript':
        return Javascript
      case 'C#':
        return Csharp
      case 'F#':
        return Fsharp
      case 'Rust':
        return Rust
      case 'Typescript':
        return Typescript
      case 'SQLite':
        return Sqlite
      default:
        return undefined
        // throw Error(`Unknown name: ${name}`)
    }
  }

  let Icon = $derived(getComponent())
</script>

{#if Icon}
<div class="w-6" title={name}>
  <Icon />
</div>
{/if}