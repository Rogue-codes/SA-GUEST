import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    height: 8vh;
    width: 40%;
    margin: 5%;
    margin-left: 3%;
    padding-left: 1%;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:focus{
        outline:none;
    }
`
function Search({searchVal,setSearchVal}) {
  return (
    <Input placeholder="search by name.." value={searchVal} onChange={(e) => setSearchVal(e.target.value)}/>
  )
}

export default Search