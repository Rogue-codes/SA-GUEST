import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Tr from './Tr'

const Tab = styled.div`
    width: 100%;
    min-height: auto;
    table{
        width: 100%;
        border-collapse: collapse;
        position: relative;
        th{
            height: 8vh;
            font-family: 'PT Serif', serif;
            color: white;
            background: #a80193;
        }
        td{
            height: 10vh;
            padding-left: 1%;
            text-align: center;
            font-family: 'PT Serif', serif;
        }
        tr{
            text-align: center;
            border-bottom: 1px solid #ddd;
            &:nth-child(even) {
                background-color: lightgrey;
            }
            .but{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 4%;
            }
        }
        .null{
            width: 100%;
            text-align: center;
            position: absolute;
            font-family: 'PT Serif', serif;
            top: 250%;
            font-size: 2vw;
            color: #a80193;
        }
    }
`
function Table({searchVal}) {
    const guest = useSelector((state)=> state.guest.guestList)
    
    const filterTodo = useSelector((state)=>state.guest.filterStatus)

   const sortedGuest = [...guest]

    sortedGuest.sort((a,b)=> new Date(b.time) - new Date(a.time))

    const filterGuestList = sortedGuest.filter((item)=>{
        if(filterTodo === 'all'){
          return true
        }
        return item.status === filterTodo
    } )

  
  return (
    <Tab>
        <table>
        <thead>
                <tr>
                    <th>NAME</th>
                    <th>PHONE</th>
                    <th>TIME-IN</th>  
                    <th>VISITING</th>
                    <th>Room No_</th>
                    <th>STATUS</th>
                    <th>SIGN OUT</th>
                    <th>TIME-OUT</th>
                    <th>OPERATIONS</th>
                </tr>
            </thead>

            <tbody>
                    {
                       filterGuestList && filterGuestList.length > 0 ?
                       filterGuestList.filter( (val) => {
                        if(searchVal === ''){
                            return val
                        }else if(val.name.toLowerCase().includes(searchVal.toLowerCase())){
                            return val
                        }return null
                    }).map((g)=>
                        <Tr key={g.id} g={g} /> 
                       ): ('No guest currently')
                    }

            </tbody>
        </table>
    </Tab>
  )
}

export default Table