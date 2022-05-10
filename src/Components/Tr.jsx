import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import CheckOut from './CheckOut'
import { deleteGuest, updateStatus } from './Features/guestSlice'
import toast from 'react-hot-toast'
import {MdDelete} from 'react-icons/md'

const TableRow = styled.tr`
.underline{
    text-decoration:line-through;
}
.cursor{
    cursor: not-allowed;
}
`
function Tr({g}) {
    const dispatch = useDispatch()
    const [checkOut, setCheckOut] = useState(true)
    const handleCheckOut = () => {
        setCheckOut(true)
        dispatch(updateStatus({
            ...g, 
            status: checkOut ? 'Out' : 'checked out', 
            timeOut: checkOut ? new Date().toLocaleString(): ''
          }))
        if(checkOut) {
            toast.success(`${g.name} has been signed out successfully`, {
                position: 'bottom-left'
            })
        }
    }

    const handleDelete = () => {
        dispatch(deleteGuest(g))
    }

  return (
    <TableRow>
        <td className={g.status === 'Out'? 'underline' : null}>{g.name}</td>
        <td className={g.status === 'Out'? 'underline' : null}>{g.number}</td>
        <td><b>{g.time}</b></td>
        <td className={g.status === 'Out'? 'underline' : null}>{g.visiting}</td>
        <td >{g.roomNo}</td>
        <td>{g.status}</td> 
        <td><CheckOut g={g} handleCheck={handleCheckOut}/></td>
        <td><b>{g.timeOut}</b></td>
        <td><MdDelete onClick={handleDelete} size='2rem' cursor='pointer' color='#a80193'/></td>
    </TableRow>
  )
}

export default Tr