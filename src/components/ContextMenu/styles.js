import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  left: ${props => props.x};
  top: ${props => props.y};
  display: ${props => (props.isContextOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  background: #eaeaea;
  border: 0.1px solid #ccc;
`

export const Color = styled.div`
  background-color: ${props => props.cod};
  border-radius: 5px;
  box-sizing: border-box;
  border: ${props => (props.current ? `3px solid rgba(0, 0, 0, 0.3)` : `none`)};
  height: 50px;
  width: 50px;
  cursor: pointer;

  &:hover {
    border: 3px solid rgba(256, 256, 256, 0.3);
  }
`
