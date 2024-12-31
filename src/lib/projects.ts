import { DateTime } from "luxon";
import type { DevTool, Language, Project, Technology } from "./types";
import * as R from "remeda"

const dateFromYM = (s: string) => DateTime.fromFormat(s, 'yyyy-MM').toJSDate()

export const projects: Array<Project> = [
  {
    name: 'Timetracking',
    url: 'https://timetracking.lostindetails.com',
    types: ['WebSite', 'DesktopApp'],
    technologies: ['Tauri', 'Svelte', 'Ansible', 'SQLite'],
    languages: ['Rust', 'Typescript', 'SQL'],
    fromDate: dateFromYM('2024-06')
  },
  {
    name: 'Fremdwährungsanlage',
    types: ['Api', 'WebApp', 'Service'],
    technologies: ['.NET', 'Svelte', 'SignalR', 'PostgreSQL', 'Ubuntu'],
    languages: ['C#', 'Typescript', 'SQL'],
    fromDate: dateFromYM('2024-02'),
    toDate: dateFromYM('2024-08')
  },
  {
    name: 'GitContributors',
    url: 'https://gitcontributors.com',
    types: ['WebSite', 'DesktopApp'],
    technologies: ['Tauri', 'Svelte', 'Ansible', 'SQLite'],
    languages: ['Rust', 'Typescript', 'SQL'],
    fromDate: dateFromYM('2023-09'),
    toDate: dateFromYM('2024-02'),
  },
  {
    name: 'Vault Exporter',
    url: 'https://vault-exporter.com',
    types: ['WebSite', 'DesktopApp'],
    technologies: ['.NET', 'WPF', 'Vue.js', 'Ansible', 'M-Files'],
    languages: ['C#', 'XAML'],
    fromDate: dateFromYM('2019-10')
  },
  {
    name: 'Dokumentenverabeitung mit Texterkennung',
    types: ['Api', 'Service', 'WebApp'],
    technologies: ['.NET', 'OpenCV', 'Tesseract', 'Docker'],
    languages: ['C#', 'SQL'],
    fromDate: dateFromYM('2019-04'),
    toDate: dateFromYM('2020-11'),
  },
  {
    name: 'Backoffice Tolling Solutions',
    types: ['Api', 'WebApp', 'Service'],
    technologies: ['.NET', 'Ansible', 'Docker', 'SignalR', 'gRPC', 'Blazor', 'OpenAPI', 'WPF', 'Redis' /*, 'RxJS'*/],
    languages: ['C#', 'Typescript', 'XAML'],
    fromDate: dateFromYM('2016-06'),
    toDate: dateFromYM('2023-03'),
  },
  {
    name: 'Meal Order Webshop',
    types: ['WebApp'],
    technologies: ['Knockout', 'Bootstrap'],
    languages: ['Javascript'],
    fromDate: dateFromYM('2015-11'),
    toDate: dateFromYM('2016-04'),
  },
  {
    name: 'Fragebogen Software',
    types: ['WebApp'],
    technologies: ['Knockout'],
    languages: ['Typescript', 'Javascript', 'SQL'],
    fromDate: dateFromYM('2015-10'),
    toDate: dateFromYM('2019-02'),
  },
  {
    name: 'Buchhaltungsprogramm',
    types: ['DesktopApp', 'WebApp'],
    technologies: ['WPF', '.NET', 'SQL Server', 'Reporting Services'],
    languages: ['C#', 'XAML', 'SQL', 'Javascript'],
    fromDate: dateFromYM('2015-10'),
    // toDate: dateFromYM('2024-09'),
  },
  {
    name: 'Geldverpackungsanlage',
    types: ['DesktopApp'],
    technologies: ['.NET', 'WPF'],
    languages: ['C#'],
    fromDate: dateFromYM('2015-10'),
    toDate: dateFromYM('2015-12')
  },
  {
    name: 'WebApplikation mit M-Files Integration',
    types: ['WebApp'],
    technologies: ['M-Files', '.NET'],
    languages: ['C#'],
    fromDate: dateFromYM('2015-10'),
    toDate: dateFromYM('2015-11'),
  },
]

// export const languages : Array<Language> =
//   R.pipe(
//     projects,
//     R.flatMap(p => p.languages),
//     R.unique(),
//   )

export const languages : Array<Language> = [
  'C#',
  'Typescript',
  'F#',
  'Rust',
  'SQL',
  'Javascript',
  'XAML',
]

export const technologies : Array<Technology> = [
  'Ansible',
  'PostgreSQL',
  'SQLite',
  'Docker',
  'Tauri',
  'Tailwind CSS',
  'WPF',
  'Vue.js',
  'Svelte',
  'SignalR',
  'SQL Server',
  // 'M-Files',
  // 'Tesseract',
  // 'Reporting Services',
  'gRPC',
  'Blazor',
  'Knockout',
  '.NET',
  'OpenCV',
  'Ubuntu',
  'Angular',
  // 'RxJS',
  'Bootstrap',
  'Redis',
  'OpenAPI',
  'WinForms',
]

export const devTools : Array<DevTool> = [
  'Visual Studio',
  'Visual Studio Code',
  'Datagrip',
  'Rider',
  'Bun',
  'Gitlab',
  'Github',
  'Git',
  'vite' ,
]