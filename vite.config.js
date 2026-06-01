import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isVercel = Boolean(process.env.VERCEL)
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages'

export default defineConfig({
  base: isGitHubPages && !isVercel ? '/CardioAI-Mini-project-/' : '/',
  plugins: [react()],
})
