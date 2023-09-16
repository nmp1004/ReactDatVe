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
            console.log(cloneList);
            return {...state , seletecTicket: cloneList}
        }
        case CHANGE_STYLE : {
           console.log(payload);
        }
        default : {
            return state
        }
    }
 }
