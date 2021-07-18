import { resolve } from 'path';

export default {
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, '..', 'server', 'public')
  }
}