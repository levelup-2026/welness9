import { execFileSync } from 'node:child_process';
import chromium from '@sparticuz/chromium';

const executablePath = await chromium.executablePath();

execFileSync('npm', ['run', 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    CI: 'false',
    PUPPETEER_EXECUTABLE_PATH: executablePath,
  },
});
