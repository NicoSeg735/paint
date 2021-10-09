import { useState, useRef } from 'react'

import Canvas from './components/Canvas'
import ContextMenu from './components/ContextMenu'

import colors from './components/data/colors'

function App() {
  const [currentColor, setCurrentColor] = useState(colors[0].name)
  const [isContextOpen, setIsContextOpen] = useState(false)
  const [currentCell, setCurrentCell] = useState(null)
  const contextCoord = useRef({ x: 0, y: 0 })

  const handleContextMenu = (e, id) => {
    e.preventDefault()

    const layoutWidth =
      document.getElementById('contextMenu').offsetWidth === 0
        ? 312
        : document.getElementById('contextMenu').offsetWidth

    const layoutHeight =
      document.getElementById('contextMenu').offsetHeight === 0
        ? 72
        : document.getElementById('contextMenu').offsetHeight

    let newX = e.clientX
    let newY = e.clientY

    if (window.innerWidth < newX + layoutWidth) {
      newX = newX - (newX + layoutWidth - window.innerWidth + 15)
    }

    if (window.innerHeight < newY + layoutHeight) {
      newY = newY - (newY + layoutHeight - window.innerHeight + 15)
    }

    contextCoord.current = {
      x: newX,
      y: newY
    }

    setCurrentCell(id)
    setIsContextOpen(true)
  }

  return (
    <div>
      <ContextMenu
        x={contextCoord.current.x}
        y={contextCoord.current.y}
        colors={colors}
        currentCell={currentCell}
        currentColor={currentColor}
        setColor={setCurrentColor}
        isContextOpen={isContextOpen}
        setIsContextOpen={setIsContextOpen}
      />
      <Canvas
        cantColumns={100}
        colors={colors}
        currentColor={currentColor}
        onContextMenu={handleContextMenu}
        isContextOpen={isContextOpen}
        setIsContextOpen={setIsContextOpen}
      />
    </div>
  )
}

export default App
