export type ProjectType = 'WebSite' | 'WebApp' | 'DesktopApp' | 'Api' | 'Service'

export type Language = 'F#' | 'C#' | 'Typescript' | 'SQL' | 'Rust' | 'Javascript' | 'XAML'

export type Technology =
  | 'Ansible'
  | 'PostgreSQL'
  | 'SQLite'
  | 'docker'
  | 'Tauri'
  | 'Tailwind CSS'
  | 'WPF'
  | 'Vue.js'
  | 'Svelte'
  | 'SignalR'
  | 'SQL Server'
  | 'M-Files'
  | 'Tesseract'
  | 'Reporting Services'
  | 'gRPC'
  | 'Blazor'
  | 'Knockout'
  | '.NET'
  | 'OpenCV'
  | 'Ubuntu'
  | 'Angular'
  | 'RxJS'
  | 'Bootstrap'
  | 'Redis'
  | 'OpenAPI'
  | 'WinForms'

export type DevTool =
  | 'Visual Studio'
  | 'Visual Studio Code'
  | 'Datagrip'
  | 'Rider'
  | 'Bun'
  | 'Gitlab'
  | 'Github'
  | 'Git'
  | 'vite'

export type Project = {
  name: string
  url?: string
  types: Array<ProjectType>
  languages: Array<Language>
  technologies: Array<Technology>
  fromDate?: Date
  toDate?: Date
}