<script lang="ts">
  import Csharp from './csharp.svelte'
  import Javascript from './javascript.svelte'
  import Rust from './rust.svelte'
  import Typescript from './typescript.svelte'
  import Sqlite from './sqlite.svelte'
  import Fsharp from './fsharp.svelte'
  import type { Language, ProjectType, Technology } from '../types'
  import Tauri from './tauri.svelte'
  import Ansible from './ansible.svelte'
  import Blazor from './blazor.svelte'
  import Knockout from './knockout.svelte'
  import Dotnetcore from './dotnetcore.svelte'
  import Opencv from './opencv.svelte'
  import Ubuntu from './ubuntu.svelte'
  import Bootstrap from './bootstrap.svelte'
  import Grpc from './grpc.svelte'
  import Openapi from './openapi.svelte'

  let { name, type = 'original' }: {
    name: Language | ProjectType | Technology,
    type: 'original' | 'plain' | 'line'
  } = $props()

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
      case 'Tauri':
        return Tauri
      case 'Ansible':
        return Ansible
      case 'Blazor':
        return Blazor
      case 'Knockout':
        return Knockout
      case '.NET':
        return Dotnetcore
      case 'OpenCV':
        return Opencv
      case 'Ubuntu':
        return Ubuntu
      case 'Bootstrap':
        return Bootstrap
      case 'gRPC':
        return Grpc
      case 'OpenAPI':
        return Openapi
      default:
        return undefined
        // throw Error(`Unknown name: ${name}`)
    }
  }

  let Icon = $derived(getComponent())
</script>

{#if Icon}
<div class="w-6" title={name}>
  <Icon type={type} />
</div>
{/if}