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

<div class="flex flex-col items-center">
  <p>Input:</p>
  <div class="max-w-lg overflow-x-auto overflow-y-hidden whitespace-nowrap p-2 pb-4 mb-2">
    <p class="break-words">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a
        href="#"
        class="text-blue-500 hover:text-blue-700 underline"
        on:click|preventDefault={() => {
          window.electronAPI.selectDirectory().then((dir) => {
            if (dir) inputFolder = dir
          })
        }}
      >
        {inputFolder || 'Click to select input folder'}
      </a>
    </p>
  </div>
</div>
<div class="mt-4 flex flex-col items-center">
  <p>Output:</p>
  <div class="max-w-lg overflow-x-auto overflow-y-hidden whitespace-nowrap p-2 pb-4 mb-2">
    <p class="break-words">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a
        href="#"
        class="text-blue-500 hover:text-blue-700 underline"
        on:click|preventDefault={() => {
          window.electronAPI.selectDirectory().then((dir) => {
            if (dir) outputFolder = dir
          })
        }}
      >
        {outputFolder || 'Click to select output folder'}
      </a>
    </p>
  </div>
</div>

{#if inputFolder.length > 0 && outputFolder.length > 0}
  <button class="mt-8 btn btn-success" on:click={convert}>Convert</button>
{:else}
  <button class="mt-8 btn" on:click={convert} disabled={true}>Convert</button>
{/if}
