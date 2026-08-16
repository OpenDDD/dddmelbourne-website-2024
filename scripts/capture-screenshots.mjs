import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { chromium, devices } from 'playwright'

const baseUrl = process.env.SCREENSHOT_BASE_URL ?? 'http://localhost:3100'
const outputDir = process.env.SCREENSHOT_OUTPUT_DIR ?? '.artifacts/screenshots'
const requestedRoutes = process.argv.slice(2)
const routes = requestedRoutes.length > 0 ? requestedRoutes : ['/', '/agenda']
const repositoryRoot = process.cwd()
const viewports = [
  {
    name: 'desktop',
    contextOptions: {
      viewport: {
        width: 1440,
        height: 1200,
      },
    },
  },
  {
    name: 'mobile',
    contextOptions: devices['iPhone 13'],
  },
]

function routeToFilename(route, viewportName) {
  const normalizedRoute = route === '/' ? 'home' : route.replace(/^\//, '').replace(/[/?#]+/g, '-')
  return `${normalizedRoute || 'page'}-${viewportName}.png`
}

async function ensureOutputDir() {
  const resolvedOutputDir = path.resolve(outputDir)
  const relativeToRepo = path.relative(repositoryRoot, resolvedOutputDir)
  const isInsideRepo = relativeToRepo !== '' && !relativeToRepo.startsWith('..') && !path.isAbsolute(relativeToRepo)

  if (!isInsideRepo) {
    throw new Error(`SCREENSHOT_OUTPUT_DIR must be inside the repository: ${resolvedOutputDir}`)
  }

  await fs.rm(resolvedOutputDir, { recursive: true, force: true })
  await fs.mkdir(resolvedOutputDir, { recursive: true })
}

async function captureScreenshots() {
  await ensureOutputDir()
  const manifest = []

  const browser = await chromium.launch()

  try {
    for (const viewport of viewports) {
      const context = await browser.newContext(viewport.contextOptions)
      const page = await context.newPage()

      try {
        for (const route of routes) {
          const url = new URL(route, baseUrl).toString()
          const response = await page.goto(url, { waitUntil: 'networkidle' })

          if (!response || !response.ok()) {
            const status = response?.status() ?? 'no-response'
            throw new Error(`Failed to load ${url} (${status})`)
          }

          const outputPath = path.join(outputDir, routeToFilename(route, viewport.name))
          await page.screenshot({
            fullPage: true,
            path: outputPath,
          })
          manifest.push({
            route,
            viewport: viewport.name,
            file: path.basename(outputPath),
          })
          console.log(`Saved ${outputPath}`)
        }
      } finally {
        await page.close()
        await context.close()
      }
    }

    await fs.writeFile(path.join(outputDir, 'manifest.json'), JSON.stringify(manifest, null, 2))
  } finally {
    await browser.close()
  }
}

await captureScreenshots()
