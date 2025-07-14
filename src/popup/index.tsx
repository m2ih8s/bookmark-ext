import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. consoleにテキストを出力
console.log('Hello Popup')

const root = document.createElement('div')
root.id = 'crx-popup-root'
document.body.appendChild(root)

createRoot(root).render(
  <StrictMode>
    <h1>Hey Popup!</h1>
    <a href="/page/index.html"> link </a>
  </StrictMode>
)

