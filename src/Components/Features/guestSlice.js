import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast'



const initialState = {
    guestList : localStorage.getItem('guestList') ? JSON.parse(localStorage.getItem('guestList')) : [],
    totalGuest : localStorage.getItem('totalGuest') ? JSON.parse(localStorage.getItem('totalGuest')) : 0, 
    signedInGuest: localStorage.getItem('signedInGuest')? JSON.parse(localStorage.getItem('signedInGuest')) : 0,
    signedOutGuest: localStorage.getItem('signedOutGuest')? JSON.parse(localStorage.getItem('signedOutGuest')) : 0,
    filterStatus : 'all',

}
export const guest_slice = createSlice({
 name: "guest",
 initialState,
 reducers:{
    addGuest: (state, action) => {
        state.guestList.push(action.payload)

        // const checkPhoneExist = state.guestList.filter((guest) => 
        //     guest.number  === action.payload.number ? guest : null
        // )

        // if(checkPhoneExist.length > 0){
        //     return toast.error(`This Phone Number already exist on our Visitors log`)
        // }

        localStorage.setItem("guestList", JSON.stringify(state.guestList))
        
        state.totalGuest = state.guestList.length


        localStorage.setItem('totalGuest', JSON.stringify(state.totalGuest))

        state.signedInGuest = state.totalGuest - state.signedOutGuest
        localStorage.setItem('signedInGuest', JSON.stringify(state.signedInGuest))
        
    },
    updateStatus : (state, action) => {
            const guestList = localStorage.getItem('guestList')
            if(guestList) {
                const guestListArr = JSON.parse(guestList)

                guestListArr.forEach((td, index) => {
                    if(td.id === action.payload.id){
                        td.status = action.payload.status
                        td.timeOut = action.payload.timeOut
                    }
                })
                localStorage.setItem('guestList', JSON.stringify(guestListArr))
                state.guestList = guestListArr
                const analytics = guestListArr.filter((item) =>{
                    if(item.status === 'Out'){
                        return item
                    }
                    return null
                })
                state.signedOutGuest = analytics.length
                localStorage.setItem('signedOutGuest', JSON.stringify(state.signedOutGuest))

                state.signedInGuest = state.totalGuest - state.signedOutGuest
                localStorage.setItem('signedInGuest', JSON.stringify(state.signedInGuest))
            }
    },
    deleteGuest : (state,action) => {
        const newGuestList = state.guestList.filter((items) => items.id !== action.payload.id)
        state.guestList = newGuestList
        toast.error(` ${action.payload.name} has been deleted from visitors log`, {
            position: 'bottom-left'
        })
        localStorage.setItem('guestList', JSON.stringify(state.guestList))
        state.totalGuest = state.guestList.length
        localStorage.setItem('totalGuest', JSON.stringify(state.guestList.length))

        const analytics = newGuestList.filter((item) =>{
            if(item.status === 'Out'){
                return item
            }
            return null
        })
        state.signedOutGuest = analytics.length
        localStorage.setItem('signedOutGuest', JSON.stringify(state.signedOutGuest))

        state.signedInGuest = state.totalGuest - state.signedOutGuest
        localStorage.setItem('signedInGuest', JSON.stringify(state.signedInGuest))
    },
    filterTodo: (state, action) => {
        state.filterStatus = action.payload
    }
}
})


export const {addGuest, updateStatus, deleteGuest, filterTodo} = guest_slice.actions

export default guest_slice.reducer