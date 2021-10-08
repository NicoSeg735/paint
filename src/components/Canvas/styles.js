import styled from 'styled-components'
import colors from '../data/colors'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eaeaea;
  overflow: hidden;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cantColumns || 10}, 1fr);

  .blue {
    background: ${colors[0].cod};
  }

  .red {
    background: ${colors[1].cod};
  }

  .green {
    background: ${colors[2].cod};
  }

  .yellow {
    background: ${colors[3].cod};
  }

  .purple {
    background: ${colors[4].cod};
  }
`

export const Cell = styled.div`
  width: 100%;
  background: white;
  box-sizing: border-box;
  border: 0.1px solid #ccc;
  border-width: 0 0.1px 0.1px 0;

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
