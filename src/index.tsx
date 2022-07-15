import { createRoot } from 'react-dom/client'
import React from 'react'
import { VRCanvas, Hands, DefaultXRControllers } from '@react-three/xr'
import './styles.css'

// Oculus Browser with #webxr-hands flag enabled
function App() {
  return (
    <VRCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <DefaultXRControllers />
      <Hands />
    </VRCanvas>
  )
}

//@ts-ignore
const root = createRoot(document.getElementById('root'))
root.render(<App />)
