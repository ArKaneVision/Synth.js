import styled from 'styled-components'

const LibraryContainer = styled.div`
    background-color: #353A40;
    overflow-y: scroll;
    border-bottom: solid;
    width: 100%;
    height: 65%;
    &::-webkit-scrollbar {
      display: none;
    }
    & {
      -ms-overflow-style: none;
    }
`
export default LibraryContainer
