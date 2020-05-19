import styled from 'styled-components'

const SynthSettings = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  overflow: scroll;
  font-size: 150%;
  text-shadow: -1px -1px 0 #A9A9A9, 1px -1px 0 #A9A9A9, -1px 1px 0 #A9A9A9, 1px 1px 0 #A9A9A9;
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none;
  }
`
export default SynthSettings
