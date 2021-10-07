import React, { useRef, useEffect } from 'react'
import { Container } from './style'

function Canvas() {
  let flag

  let prevX,
    currX,
    prevY,
    currY = 0

  let dot_flag = false

  let x = 'black'
  let y = 2

  const canvasRef = useRef()
  const contextRef = useRef()
  const widthRef = useRef()
  const heightRef = useRef()

  useEffect(() => {
    const init = () => {
      contextRef.current = canvasRef.current.getContext('2d')
      widthRef.current = canvasRef.current.width
      heightRef.current = canvasRef.current.height

      canvasRef.current.addEventListener(
        'mousemove',
        function (e) {
          findxy('move', e)
        },
        false
      )
      canvasRef.current.addEventListener(
        'mousedown',
        function (e) {
          findxy('down', e)
        },
        false
      )
      canvasRef.current.addEventListener(
        'mouseup',
        function (e) {
          findxy('up', e)
        },
        false
      )
      canvasRef.current.addEventListener(
        'mouseout',
        function (e) {
          findxy('out', e)
        },
        false
      )
    }
    init()
  }, [])

  function draw() {
    contextRef.current.beginPath()
    contextRef.current.moveTo(prevX, prevY)
    contextRef.current.lineTo(currX, currY)
    contextRef.current.strokeStyle = x
    contextRef.current.lineWidth = y
    contextRef.current.stroke()
    contextRef.current.closePath()
  }

  const findxy = (res, e) => {
    if (res === 'down') {
      prevX = currX
      prevY = currY
      currX = e.clientX - canvasRef.current.offsetLeft
      currY = e.clientY - canvasRef.current.offsetTop

      flag = true
      dot_flag = true
      if (dot_flag) {
        contextRef.current.beginPath()
        contextRef.current.fillStyle = x
        contextRef.current.fillRect(currX, currY, 2, 2)
        contextRef.current.closePath()
        dot_flag = false
      }
    }
    if (res === 'up' || res === 'out') {
      flag = false
    }
    if (res === 'move') {
      if (flag) {
        prevX = currX
        prevY = currY
        currX = e.clientX - canvasRef.current.offsetLeft
        currY = e.clientY - canvasRef.current.offsetTop
        draw()
      }
    }
  }

  return (
    <Container>
      <canvas
        ref={canvasRef}
        width='500'
        height='500'
        style={{ border: '1px solid #000000' }}
      ></canvas>
    </Container>
  )
}

export default Canvas
