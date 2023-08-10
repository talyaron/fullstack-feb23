import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// -re-proj 
//  -src 
//   -script 
//    -maps 
//     -dist 
//      -maps.js
//     -maps.ts 
//    -model 
//     -dist 
//      -rockClass.js
//     -rockClass.ts 
//   -view 
//    -index.html
//   -main.ts 
//  -index.html 
//  I want that the maps.ts and the rockClass.ts will be connected to each other, I want to use class from rockClass.ts to maps.ts
//  and an array from maps.ts to rockClass.ts