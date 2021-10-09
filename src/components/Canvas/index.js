import React, { useRef } from 'react'
import { Container, Grid, Cell } from './styles'

function Canvas({
  cantColumns,
  colors = [],
  currentColor,
  onContextMenu,
  setIsContextOpen,
  isContextOpen
}) {
  const isPressed = useRef(false)
  const isPainting = useRef(false)

  const cantRows = useRef(
    Math.floor(window.innerHeight / (window.innerWidth / cantColumns))
  )

  const isPainted = id => {
    const cell = document.getElementById(id)

    if (cell.classList.length > 2) {
      return true
    } else {
      return false
    }
  }

  const paintCell = id => {
    const cell = document.getElementById(id)
    if (!isPainting.current) {
      colors.forEach(color => {
        if (cell.classList.contains(color.name)) {
          cell.classList.remove(color.name)
          return
        }
      })
    } else {
      cell.className += ` ${currentColor}`
    }
  }

  const handlePressed = e => {
    if (e.type === 'mousedown' && e.button !== 2) {
      if (isPainted(e.target.id)) {
        isPainting.current = false
      } else {
        isPainting.current = true
      }
      if (isContextOpen) {
        setIsContextOpen(false)
      } else {
        paintCell(e.target.id)
      }
      isPressed.current = true
    } else {
      isPressed.current = false
    }
  }

  const handleEnter = e => {
    if (isPressed.current) {
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
            onContextMenu={e => onContextMenu(e, i)}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default Canvas
