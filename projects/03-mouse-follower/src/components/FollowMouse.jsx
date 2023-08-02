import { useEffect, useState } from 'react';

export function FollowMouse({enabled}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('useEffect', enabled);
    const handleMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
      console.log({ clientX, clientY });
    }
    if (enabled) { window.addEventListener('pointermove', handleMove) }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  return enabled && (
    <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  )
}