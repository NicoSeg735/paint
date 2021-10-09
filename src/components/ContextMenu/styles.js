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

  animation: fadeIn 0.2s;
  -webkit-animation: fadeIn 0.2s;
  -moz-animation: fadeIn 0.2s;
  -o-animation: fadeIn 0.2s;
  -ms-animation: fadeIn 0.2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
