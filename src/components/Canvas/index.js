import React, { useRef } from 'react'
import { Container, Grid, Cell } from './styles'

function Canvas({ currentColor }) {
  const cantColumns = 100

  const cantRows = useRef(
    Math.floor(window.innerHeight / (window.innerWidth / cantColumns))
  )

  const handleClick = e => {
    const cell = document.getElementById(e.target.id)
    cell.className += ` ${currentColor}`
  }

  return (
    <Container>
      <Grid cantColumns={cantColumns}>
        {[...Array(cantColumns * cantRows.current)].map((x, i) => (
          <Cell key={i} id={i} onClick={handleClick} />
        ))}
      </Grid>
    </Container>
  )
}

export default Canvas
