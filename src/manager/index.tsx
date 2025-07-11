import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. consoleにテキストを出力
console.log('MyPage')

const root = document.createElement('div')
root.id = 'crx-popup-root'
document.body.appendChild(root)

createRoot(root).render(
  <StrictMode>
    <h1>Manager page</h1>
  </StrictMode>
)

