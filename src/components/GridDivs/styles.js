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
    background: ${colors.blue.cod};
  }

  .red {
    background: ${colors.red.cod};
  }

  .green {
    background: ${colors.green.cod};
  }

  .yellow {
    background: ${colors.yellow.cod};
  }

  .purple {
    background: ${colors.purple.cod};
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
