import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGuest } from './Features/guestSlice'
import {v4 as uuid} from 'uuid'
import toast from 'react-hot-toast'

const Pop = styled.form`
    width: 100%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 30;
    gap: 2%;
    input{
        width: 80%;
        height: 8vh;
        margin-top: .4%;
        padding-left: 2%;
        border-radius: 5px;
        border: 1px solid black;
        &:focus{
            outline: none;
        }
    }
    .sel{
        width: 80%;
        height: 8vh;
        background: white;
        padding-left: 2%;
        border-radius: 5px;
        border: 1px solid black;
        &:focus{
            outline: none;
        }
    }
`

function MyVerticallyCenteredModal(props) {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [room, setRoom] = useState('')
    const [visiting, setVisiting] = useState('')
    const [address, setAdress] = useState('')
    const [status, setStatus] = useState('')



    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(room > 200){
          toast.error('max room exceeded, maximum available room is 200')
          return
        }
        if(name !== '' && number !== '' && address !== '' && visiting !== '' && status !== '') {
          dispatch(addGuest({
            id: uuid(),
            name: name,
            number: number,
            visiting: visiting,
            address: address,
            status: status,
            roomNo: room,
            time :  new Date().toLocaleString(),
            timeOut: status === 'Outgoing' ? new Date().toLocaleString(): 'Visitor is signed in'
        }))
        toast.success('Visitor Has been Logged in successfully')
        }
        else{
          toast.error(`All visitor's information must be filled correctly`)
          return
      }

      setName('')
      setNumber('')
      setVisiting('')
      setAdress('')
      setStatus('')
      setRoom('')
        
        props.setModalShow(false);

    }
    return (
      <Modal 
      {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter Visitor's details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='mod'>
          <Pop action="" onSubmit={handleSubmit}>
            <input type="text"  value={name} id="" placeholder="guest name" onChange={(e)=>setName(e.target.value)} />
            <input type="number"  value={number} id="" placeholder="phone number" onChange={(e)=>setNumber(e.target.value)} />
            <input type="text"  value={address} id="" placeholder="guest address" onChange={(e)=>setAdress(e.target.value)} />
            <input type="text"  value={visiting} id="" placeholder="who are you visiting" onChange={(e)=>setVisiting(e.target.value)} />
            <input type="number"  value={room} id="" placeholder="Enter room number" onChange={(e)=>setRoom(e.target.value)} />
            <select className='sel' value={status} id="" onChange={(e)=>setStatus(e.target.value)}>
              <option value="">--select status--</option>
              <option value="In">Sign In</option>
              <option value="Out"></option>
            </select>
          <Modal.Footer>
          <Button variant="success" type='submit'>Done</Button>
          <Button onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
          </Pop>
        </Modal.Body>
        
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal