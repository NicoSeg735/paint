import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background: #eaeaea;
  border: 0.1px solid #ccc;
`

export const Color = styled.div`
  background-color: ${props => props.cod};
  height: 50px;
  width: 50px;
`
