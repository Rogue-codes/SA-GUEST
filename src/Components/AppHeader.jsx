import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { filterTodo } from './Features/guestSlice';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

const Heder = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: space-between;
    padding: 3%;
    align-items: center;
    select{
      width: 20%;
      height: 6vh;
      padding-left: 2%;
      /* color: #fff; */
      font-size: 1.2vw;
      background-color:${props => props.bgc};  
    }
`
const Btn = styled.button`
  padding: 1% 3%;
  font-size: 1.5vw;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: #fff;
  background: ${props => props.bg};
`
function AppHeader({black}) {
  const dispatch = useDispatch()

  const filter = useSelector(state => state.guest.filterStatus)

  const [filterValue, setFilterValue] = useState(filter)
  
  const handleFilter = (e) =>{
    setFilterValue(e.target.value)
    dispatch(filterTodo(
      e.target.value
    ))
  }

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Heder>
      <Btn bg={black ? 'blue' : '#a80193' } onClick={() => setModalShow(true)}>Add a Guest</Btn>
      <select bgc={black ? 'blue' : '#a80193' } value={filterValue} onChange={handleFilter}>
        <option value="all">All</option>
        <option value="In">Signed in</option>
        <option value="Out">Signed out</option>
      </select>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </Heder>
  )
}

export default AppHeader