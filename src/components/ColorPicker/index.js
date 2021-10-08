import React from 'react'
import { Container, Color } from './styles'

function ColorPicker({ setColor, colors = [] }) {
  const handleClick = e => {
    setColor(e.target.id)
  }

  return (
    <Container>
      {colors.map(color => (
        <Color
          onClick={handleClick}
          key={color.name}
          cod={color.cod}
          id={color.name}
        />
      ))}
    </Container>
  )
}

export default ColorPicker
