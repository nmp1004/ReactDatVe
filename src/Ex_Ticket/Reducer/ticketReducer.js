import { ADD_TO_LIST, CHANGE_STYLE } from "../Constant/TicketConstant";
import { ticketArr } from "../dataTicket";

const initialSate = {
    ticketArr : ticketArr,
    seletecTicket :  [],
}

export let ticketReducer = (state = initialSate, {type , payload}) => { 
    switch(type) {
        case ADD_TO_LIST: {
            let cloneList = [...state.seletecTicket];
            let index = cloneList.findIndex((item) => { 
                return item.soGhe == payload.soGhe
             })
            if (index == -1) {
                let newTicket = {...payload, soLuong: 1, daDat : true}
                cloneList.push(newTicket)
            }   else {
                cloneList.forEach((item,index) => { 
                    if (item.soGhe == payload.soGhe) {
                        cloneList.splice(index,1)
                    }
                 })
            }
            return {...state , seletecTicket: cloneList}
        }
        case CHANGE_STYLE : {
            let cloneList = [...state.ticketArr]
            let isCheck = true;
            cloneList.forEach((items) => { 
               items.danhSachGhe.forEach((item,index) => { 
                    if (item.soGhe == payload && item.daDat == true) {
                        isCheck = false
                        item.daDat = false
                    }
                    if (!isCheck) return;
                    if (item.soGhe == payload) {
                        item.daDat = true
                    }
                })
             })
            return {...state , ticketArr: cloneList}
        }
        default : {
            return state
        }
    }
 }
