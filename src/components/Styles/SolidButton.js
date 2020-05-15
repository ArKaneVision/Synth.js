import styled from 'styled-components'

const SolidButton = styled.button`
  border-color: ${props => props.primaryColor};
  border-radius: 7px;
  border-width: 2px;
  background-color: ${props => props.primaryColor};
  color: white;

  transition: color .2s linear, background-color .2s linear;
  &:hover {
    background-color: ${props => props.secondaryColor};
    border-color: ${props => props.secondaryColor};
    color: ${props => props.primaryColor};
  }
`

export default SolidButton
