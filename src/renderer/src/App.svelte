<script lang="ts">
  import electronLogo from './assets/electron.svg'
  import './tailwind.css'

  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
</script>

<h1 class="text-4xl font-black mb-2">Convert ProRes to HAP</h1>

<div class="mb-10">
  <input type="text" class="input" placeholder="Input folder" />
</div>

<img alt="logo" class="w-32" src={electronLogo} />

<div class="mt-10"></div>
<input type="text" class="input" placeholder="Output folder" />
