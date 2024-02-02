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
</script>

<h1 class="text-4xl font-black mb-2">Convert ProRes to HAP</h1>

<div class="mb-10 flex flex-col items-center">
  <!-- <input type="text" class="input text-black" placeholder="Input folder" value={inputFolder} /> -->
  <p>Input: {inputFolder}</p>
  <div>
    <button class="btn btn-primary" on:click={setInFolder}>Pick folder</button>
  </div>
</div>

<button class="btn btn-success">Convert</button>
<!-- <img alt="logo" class="w-32" src={electronLogo} /> -->

<div class="mt-10 flex flex-col items-center">
  <!-- <input type="text" class="input text-black" placeholder="Output folder" value={outputFolder} /> -->
  <p>Output: {outputFolder}</p>
  <div>
    <button class="btn btn-primary" on:click={setOutputFolder}>Pick folder</button>
  </div>
</div>
