import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import BookmarkViewer from './components/BookmarkViewer'

console.log('MyPage')

const root = document.createElement('div')
root.id = 'crx-popup-root'
document.body.appendChild(root)

createRoot(root).render(
  <StrictMode>
    <BookmarkViewer />
  </StrictMode>
)

