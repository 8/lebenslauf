import { DateTime } from "luxon";
import type { Project } from "./types";

const dateFromYM = (s: string) => DateTime.fromFormat(s, 'yyyy-MM').toJSDate()

export const projects: Array<Project> = [
  {
    name: 'GitContributors',
    url: 'https://gitcontributors.com',
    types: ['WebSite', 'DesktopApp'],
    technologies: ['Tauri', 'Ansible', 'SQLite'],
    languages: ['Rust', 'Typescript', 'SQL'],
    fromDate: dateFromYM('2023-09')
  },
  {
    name: 'Timetracking',
    url: 'https://timetracking.lostindetails.com',
    types: ['WebSite', 'DesktopApp'],
    technologies: ['Tauri', 'Ansible', 'SQLite'],
    languages: ['Rust', 'Typescript', 'SQL'],
    fromDate: dateFromYM('2024-06')
  },
  {
    name: 'Fremdwährungsanlage',
    types: ['Api', 'WebApp', 'Service'],
    technologies: ['.NET', 'Svelte', 'PostgreSQL', 'Ubuntu'],
    languages: ['C#', 'Typescript', 'SQL'],
    fromDate: dateFromYM('2024-02'),
    toDate: dateFromYM('2024-08')
  },
  {
    name: 'Vault Exporter',
    url: 'https://vault-exporter.com',
    types: ['WebSite', 'DesktopApp'],
    technologies: ['.NET', 'WPF', 'Ansible', 'M-Files'],
    languages: ['C#', 'XAML'],
    fromDate: dateFromYM('2019-10')
  },
  {
    name: 'Automatische Dokumentenverarbeitung mit Texterkennung',
    types: ['Api', 'Service', 'WebApp'],
    technologies: ['.NET', 'OpenCV', 'Tesseract', 'docker'],
    languages: ['C#'],
    fromDate: dateFromYM('2019-04'),
    toDate: dateFromYM('2020-11')
  },
  {
    name: 'Backoffice Tolling Solutions',
    types: ['Api', 'WebApp', 'Service'],
    technologies: ['.NET', 'Ansible', 'docker', 'SignalR', 'gRPC', 'Blazor', 'OpenAPI', 'WPF', 'RxJS'],
    languages: ['C#', 'Typescript', 'XAML'],
    fromDate: dateFromYM('2016-06'),
    toDate: dateFromYM('2023-03')
  },
  {
    name: 'Webshop',
    types: ['WebApp'],
    technologies: ['Knockout', 'Bootstrap'],
    languages: ['Javascript'],
    fromDate: dateFromYM('2016-02'),
    toDate: dateFromYM('2016-04')
  },
  {
    name: 'Buchhaltungsprogramm',
    types: ['DesktopApp', 'WebApp'],
    technologies: ['WPF', '.NET', 'SQL Server', 'Reporting Services'],
    languages: ['C#', 'XAML', 'SQL', 'Javascript']
  },
  {
    name: 'WebApplikation mit M-Files integration',
    types: ['WebApp'],
    technologies: ['M-Files', '.NET'],
    languages: ['C#'],
    fromDate: dateFromYM('2015-10')
  }
]
