import styled from 'styled-components'
import Key from './Key'

const BlackKey = styled(Key)`
    position: absolute;
    width: 6%;
    height: 60%;
    background: #000;
    color: #eee;
    top: 0;
    z-index: 3;
    left: ${props => props.theme.offset};
`

export default BlackKey
