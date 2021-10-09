import React from 'react'
import { Container, Color } from './styles'

function ContextMenu({
  x,
  y,
  colors = [],
  currentColor,
  currentCell,
  setColor,
  isContextOpen,
  setIsContextOpen
}) {
  const handleClick = e => {
    setColor(e.target.id)
    setIsContextOpen(false)

    const cell = document.getElementById(currentCell)

    colors.forEach(color => {
      if (cell.classList.contains(color.name)) {
        cell.classList.remove(color.name)
        return
      }
    })

    cell.className += ` ${e.target.id}`
  }

  return (
    <Container
      x={x + 'px'}
      y={y + 'px'}
      id='contextMenu'
      isContextOpen={isContextOpen}
    >
      {colors.map(color => (
        <Color
          onClick={handleClick}
          key={color.name}
          cod={color.cod}
          id={color.name}
          current={color.name === currentColor ? true : false}
        />
      ))}
    </Container>
  )
}

export default ContextMenu
