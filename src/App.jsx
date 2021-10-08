import { useState } from 'react'

import ColorPicker from './components/ColorPicker'
import Canvas from './components/Canvas'

import colors from './components/data/colors'

function App() {
  const [currentColor, setCurrentColor] = useState(colors[0].name)

  return (
    <div>
      <ColorPicker setColor={setCurrentColor} colors={colors} />
      <Canvas currentColor={currentColor} colors={colors} />
    </div>
  )
}

export default App
