import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    padding: 2% 5%;
    border-radius: 5px;
    border: none;
    color: #fff;
    background: #a80193;
`
function CheckOut({g,handleCheck}) {
  return (
    <Btn  className={g.status === 'Out'? 'cursor' : null} type='button' onClick={handleCheck}>{g.status === 'Outgoing' ? 'Check in' : 'CheckOut'}</Btn>
  )
}

export default CheckOut