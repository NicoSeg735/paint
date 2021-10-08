import React, { useRef } from 'react'
import { Container, Grid, Cell } from './styles'

function Canvas({ currentColor, colors = [] }) {
  const cantColumns = 100

  // const [isPainting, setIsPainting] = useState(false)
  const isPainting = useRef(false)

  const cantRows = useRef(
    Math.floor(window.innerHeight / (window.innerWidth / cantColumns))
  )

  const paintCell = id => {
    let isPainted = false

    const cell = document.getElementById(id)

    if (!cell.classList.contains(currentColor)) {
      colors.forEach(color => {
        if (cell.classList.contains(color.name)) {
          isPainted = true
          cell.classList.replace(color.name, currentColor)
          return
        }
      })
      if (!isPainted) {
        cell.className += ` ${currentColor}`
      }
    }
  }

  const handlePressed = e => {
    if (e.type === 'mousedown') {
      paintCell(e.target.id)
      isPainting.current = true
    } else {
      isPainting.current = false
    }
  }

  const handleEnter = e => {
    if (isPainting.current) {
      paintCell(e.target.id)
    }
  }

  const handleDrag = e => {
    e.preventDefault()
  }

  return (
    <Container>
      <Grid cantColumns={cantColumns}>
        {[...Array(cantColumns * cantRows.current)].map((x, i) => (
          <Cell
            key={i}
            id={i}
            onMouseDown={handlePressed}
            onMouseUp={handlePressed}
            onMouseEnter={handleEnter}
            onDragStart={handleDrag}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default Canvas
