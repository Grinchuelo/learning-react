import { useEffect, useState } from "react"
import { Button } from '/src/components/Button.jsx'

function App() {
  const [enableEffect, setEnableEffect] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const btnText = enableEffect
    ? 'Dejar de seguir cursor'
    : 'Seguir cursor'

  const styles = enableEffect
    ? {
      display: 'block'
    }
    : {
      display: 'none'
    }

  useEffect(() => {
    if (!enableEffect) return

    const handleMove = (event) => {
      const { x, y } = event
      setPosition({ x, y })
    }
    
    window.addEventListener('pointermove', handleMove)

    // Cleanup se ejecuta cuando el componente se desmonta 
    // o cuando cambian las dependencias (en este caso, enableEffect)
    return () => {
      window.removeEventListener('pointermove', handleMove)
    } 
    
  }, [enableEffect])

  return (
    <main>
      <div style={{
        width: '40px',
        height: '40px',
        position: 'absolute',
        left: -20,
        top: -20,
        backgroundColor: '#fff',
        opacity: 0.2,
        borderRadius: '40px',
        pointerEvents: 'none',
        transform: `translate(${position.x}px, ${position.y}px)`,
        ...styles
      }} /> 
      <h3>Proyecto 3</h3>

      <Button setEnableEffect={setEnableEffect}>{btnText}</Button>
    </main>
  )
}

export default App
