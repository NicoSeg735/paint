import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eaeaea;
  overflow: hidden;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(100, 1fr);
`

export const Cell = styled.div`
  width: 100%;
  background: white;
  border: 0.1px solid #ccc;

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
