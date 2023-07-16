// import './style.css'
import './dist/style.css'
import './dist/welcome.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="music">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-tn01B8yJ9k?rel=0&autoplay=1"
    title="YouTube video player" rameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
</div>

<span id="pointer"></span>

<main>
<h1>Welcome to Terra Survival</h1>
<p>Earth is under attack! <br/>  <br/> save the planet by moving with the keyboard A W S D <br/>  <br/> You are humanity last hope.</p>
<a class="play" href="./canvas.html">Play</a>
</main>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
