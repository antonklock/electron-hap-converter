<script lang="ts">
  // import electronLogo from './assets/electron.svg'
  import './tailwind.css'

  let inputFolder: string = ''
  let outputFolder: string = ''

  const setInFolder = async (): Promise<void> => {
    const dir = await window.electronAPI.selectDirectory()
    inputFolder = dir
  }
  const setOutputFolder = async (): Promise<void> => {
    const dir = await window.electronAPI.selectDirectory()
    outputFolder = dir
  }

  const convert = async (): Promise<void> => {
    await window.electronAPI.convertToHap(inputFolder, outputFolder)
  }
</script>

<h1 class="text-4xl font-black mb-2">Convert ProRes to HAP</h1>

<div class="mb-10 flex flex-col items-center">
  <p>Input: {inputFolder}</p>
  <div>
    <button class="btn btn-primary" on:click={setInFolder}>Pick folder</button>
  </div>
</div>

{#if inputFolder.length > 0 && outputFolder.length > 0}
  <button class="btn btn-success" on:click={convert}>Convert</button>
{:else}
  <button class="btn" on:click={convert} disabled={true}>Convert</button>
{/if}

<div class="mt-10 flex flex-col items-center">
  <p>Output: {outputFolder}</p>
  <div>
    <button class="btn btn-primary" on:click={setOutputFolder}>Pick folder</button>
  </div>
</div>
