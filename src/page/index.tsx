import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Main from './Main.tsx'

const root = document.createElement('div')
root.id = 'crx-popup-root'
document.body.appendChild(root)

createRoot(root).render(
  <StrictMode>
    <Main />
  </StrictMode>
)

