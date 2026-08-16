import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const args = process.argv.slice(2)
const files = []

for (let i = 0; i < args.length; i += 1) {
  if (args[i] === '--files-from') {
    const filePath = args[i + 1]
    if (!filePath) {
      throw new Error('--files-from requires a path')
    }
    const content = await fs.readFile(filePath, 'utf8')
    files.push(...content.split('\n').map((line) => line.trim()).filter(Boolean))
    i += 1
    continue
  }

  files.push(args[i])
}

const uniqueFiles = [...new Set(files)]
const routes = new Set()

const sharedRouteMappings = [
  {
    match: (file) => file.startsWith('components/ActionBar/') || file === 'config/actions.ts',
    routes: ['/'],
  },
  {
    match: (file) =>
      file === 'config/menu.ts' ||
      file.startsWith('components/global/Header/') ||
      file.startsWith('components/global/Nav/') ||
      file.startsWith('components/global/Footer/') ||
      file === 'layouts/template.tsx' ||
      file === 'layouts/main.tsx' ||
      file === 'layouts/Layouts.styled.tsx' ||
      file === 'pages/_app.tsx' ||
      file === 'pages/_document.tsx',
    routes: ['/', '/about', '/agenda'],
  },
  {
    match: (file) =>
      file === 'pages/agenda.tsx' ||
      file.startsWith('pages/agenda/') ||
      file.startsWith('components/Agenda/') ||
      file === 'components/currentAgenda.tsx' ||
      file === 'components/allAgendas.tsx' ||
      file === 'layouts/agendaWide.tsx' ||
      file === 'components/utils/pastAgenda.ts' ||
      file.startsWith('config/past-agendas/'),
    routes: ['/agenda', '/agenda/2024', '/agenda/2025', '/agenda/2026'],
  },
  {
    match: (file) => file === 'config/conference.ts' || file === 'config/dates.ts',
    routes: ['/', '/about', '/agenda'],
  },
  {
    match: (file) => file.startsWith('components/Tickets/') || file === 'pages/tickets.tsx',
    routes: ['/tickets'],
  },
  {
    match: (file) => file.startsWith('components/FAQList/') || file === 'config/faqs.tsx' || file === 'pages/faq.tsx',
    routes: ['/faq'],
  },
  {
    match: (file) => file.startsWith('components/Sponsors/') || file === 'config/sponsors.ts' || file === 'pages/sponsorship.tsx',
    routes: ['/', '/sponsorship', '/agenda'],
  },
  {
    match: (file) => file === 'pages/conference-day.tsx' || file.startsWith('config/venues/'),
    routes: ['/conference-day', '/venue'],
  },
  {
    match: (file) => file === 'pages/cfp.tsx',
    routes: ['/cfp'],
  },
  {
    match: (file) => file.startsWith('pages/vote/'),
    routes: ['/vote', '/vote/landing', '/vote/elo'],
  },
]

function pageFileToRoute(file) {
  if (!file.startsWith('pages/') || !/\.(ts|tsx|js|jsx)$/.test(file)) {
    return null
  }

  const relativePath = file.slice('pages/'.length).replace(/\.(ts|tsx|js|jsx)$/, '')

  if (relativePath.startsWith('_')) {
    return null
  }

  if (relativePath === 'index') {
    return '/'
  }

  if (relativePath.endsWith('/index')) {
    return `/${relativePath.slice(0, -'/index'.length)}`
  }

  return `/${relativePath}`
}

for (const file of uniqueFiles) {
  const directRoute = pageFileToRoute(file)
  if (directRoute) {
    routes.add(directRoute)
  }

  for (const mapping of sharedRouteMappings) {
    if (mapping.match(file)) {
      mapping.routes.forEach((route) => routes.add(route))
    }
  }
}

const sortedRoutes = [...routes].sort((a, b) => a.localeCompare(b))
process.stdout.write(`${sortedRoutes.join('\n')}${sortedRoutes.length > 0 ? '\n' : ''}`)
