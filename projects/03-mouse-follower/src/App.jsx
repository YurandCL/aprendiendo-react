import { useEffect, useState } from 'react'
import './App.css'
import { FollowMouse } from './components/FollowMouse'

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
      <FollowMouse enabled={enabled} />
      <button onClick={()=>setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
