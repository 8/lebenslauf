import { DateTime } from 'luxon'

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
  | 'ASP.NET Core'
  | 'Reporting Services'
  | 'gRPC'
  | 'Blazor'
  | 'Knockout'

export type Project = {
  name: string
  types: Array<ProjectType>
  languages: Array<Language>
  technologies: Array<Technology>
  fromDate?: Date
  toDate?: Date
}

const dateFromYM = (s: string) => DateTime.fromFormat(s, 'yyyy-MM').toJSDate()

export const projects: Array<Project> = [
  {
    name: 'GitContributors',
    types: ['WebSite', 'DesktopApp'],
    technologies: ['Tauri', 'Ansible', 'SQLite'],
    languages: ['Rust', 'Typescript', 'SQL'],
    fromDate: dateFromYM('2023-09')
  },
  {
    name: 'Timetracking',
    types: ['WebSite', 'DesktopApp'],
    technologies: ['Tauri', 'Ansible', 'SQLite'],
    languages: ['Rust', 'Typescript', 'SQL'],
    fromDate: dateFromYM('2024-06')
  },
  {
    name: 'Fremdwährungsanlage',
    types: ['Api', 'WebApp', 'Service'],
    technologies: ['Svelte', 'PostgreSQL'],
    languages: ['C#', 'Typescript', 'SQL'],
    fromDate: dateFromYM('2024-02'),
    toDate: dateFromYM('2024-08')
  },
  {
    name: 'Vault Exporter',
    types: ['WebSite', 'DesktopApp'],
    technologies: ['WPF', 'Ansible', 'M-Files'],
    languages: ['C#', 'XAML'],
    fromDate: dateFromYM('2019-10')
  },
  {
    name: 'Automatische Dokumentenverarbeitung mit Texterkennung',
    types: ['Api', 'Service', 'WebApp'],
    technologies: ['Tesseract', 'docker'],
    languages: ['C#'],
    fromDate: dateFromYM('2019-04'),
    toDate: dateFromYM('2020-11')
  },
  {
    name: 'Backoffice Tolling Solutions',
    types: ['Api', 'WebApp', 'Service'],
    technologies: ['ASP.NET Core', 'Ansible', 'docker', 'SignalR', 'gRPC', 'Blazor', 'WPF'],
    languages: ['C#', 'Typescript', 'XAML'],
    fromDate: dateFromYM('2016-06'),
    toDate: dateFromYM('2023-03')
  },
  {
    name: 'Webshop',
    types: ['WebApp'],
    technologies: ['Knockout'],
    languages: ['Javascript'],
    fromDate: dateFromYM('2016-02'),
    toDate: dateFromYM('2016-04')
  },
  {
    name: 'Buchhaltungsprogramm',
    types: ['DesktopApp', 'WebApp'],
    technologies: ['WPF', 'SQL Server', 'Reporting Services'],
    languages: ['C#', 'XAML', 'SQL', 'Javascript']
  },
  {
    name: 'WebApplikation mit M-Files integration',
    types: ['WebApp'],
    technologies: ['M-Files'],
    languages: ['C#'],
    fromDate: dateFromYM('2015-10')
  }
]
