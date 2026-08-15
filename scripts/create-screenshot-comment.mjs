import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const screenshotDir = process.env.SCREENSHOT_DIR ?? '.artifacts/screenshots'
const baseUrl = process.env.SCREENSHOT_BASE_URL
const prNumber = process.env.SCREENSHOT_PR_NUMBER
const sha = process.env.SCREENSHOT_SHA

if (!baseUrl) {
  throw new Error('SCREENSHOT_BASE_URL is required')
}

const manifestPath = path.join(screenshotDir, 'manifest.json')
const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'))
const shortSha = sha ? sha.slice(0, 7) : null
const heading = prNumber ? `## Screenshot preview for PR #${prNumber}` : '## Screenshot preview'
const metadata = shortSha ? `\n\nCommit: \`${shortSha}\`` : ''
const routeSections = [...new Set(manifest.map(({ route }) => route))]
const viewportLabel = {
  desktop: 'Desktop',
  mobile: 'Mobile',
}
const images = routeSections
  .map((route) => {
    const screenshots = manifest.filter((entry) => entry.route === route)
    const variants = screenshots
      .map(({ viewport, file }) => `#### ${viewportLabel[viewport] ?? viewport}\n![${route} ${viewport}](${new URL(file, `${baseUrl}/`).toString()})`)
      .join('\n\n')

    return `### \`${route}\`\n\n${variants}`
  })
  .join('\n\n')

const body = [
  '<!-- copilot-screenshot-preview -->',
  heading + metadata,
  images,
].join('\n\n')

process.stdout.write(body)
