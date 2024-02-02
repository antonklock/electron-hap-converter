import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    electronAPI: {
      selectDirectory: () => Promise<string | undefined>
      convertToHap: (inputDirectory: string, outputDirectory: string) => Promise<void>
    }
  }
}
