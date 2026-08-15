import process from 'node:process'
import { spawn } from 'node:child_process'

const port = process.env.COPILOT_PORT ?? '3100'
const child = spawn('npx', ['next', 'dev', '--hostname', '0.0.0.0', '--port', port, '--turbopack'], {
  stdio: 'inherit',
  env: process.env,
})

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }

  process.exit(code ?? 1)
})
