import React, { Component } from 'react'
import { connect } from 'react-redux'
import { REMOVE_TICKET } from './Constant/TicketConstant'

class ListRightTicket extends Component {
  renderDiv = (name, color) => {
    return (
      <div style={{
        display: "flex",
        alignItems: "end",
        marginBottom: "10px"
      }}>
        <div style={{
          width: "35px",
          height: "35px",
          backgroundColor: `${color}`,
          borderRadius: "5px",
          border: "1px solid #ffc601"
        }}
        ></div>
        <h5 className='text-white font-weight-bolder text-left m-0'>{name}</h5>
      </div>
    )
  }

  calculatePricetotal = () => { 
    let priceToTal = 0;
    this.props.seletecTicket.forEach((item) => { 
      priceToTal += item.gia * item.soLuong
     })
     return priceToTal
   }
   calculateTickettotal = () => { 
    let ticketToTal = 0;
    this.props.seletecTicket.forEach((item) => { 
        ticketToTal += item.soLuong
     })
     return ticketToTal
   }
  renderPriceTableTicket = () => { 
    let subTotal = this.calculatePricetotal()
    return (
      <div>{subTotal == 0 ? "" : `${subTotal}`}</div>
    )
   }
  renderTicketTable = () => { 
    let ticketToTal = this.calculateTickettotal()
    return (
      <div>{ticketToTal == 0 ? "" : `${ticketToTal}`}</div>
    )
   }
  renderTicketSeletedTable = () => { 
    let contentTr = ""
    this.props.seletecTicket.forEach((item,index) => { 
      if (index < (this.props.seletecTicket.length - 1 )) {
        contentTr += item.soGhe + ","
      } else {
        contentTr += item.soGhe + " "
        }
     })
    return (
      <div style={{margin:"0", display:"inline-block", wordWrap:"break-word",width:"130px"}}>{contentTr}</div>
    )
   }
  render() {
    return (
      <div className='col-4'>
        <h3 className='text-white font-weight-bolder mb-5'>DANH SÁCH GHẾ BẠN CHỌN</h3>
        {this.renderDiv("Ghế đã đặt", "#ffc601")}
        {this.renderDiv("Ghế đang chọn", "#6dee6d")}
        {this.renderDiv("Ghế chưa đặt", "white")}
        <table className='table  table-bordered'>
          <thead>
            <tr className='text-white text-left'>
              <th>Số Ghế</th>
              <th>Giá</th>
              <th>Số vé</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>
          <tr className='text-white'>
              <td>{this.renderTicketSeletedTable()}</td>
              <td>{this.renderPriceTableTicket()}</td>
              <td>{this.renderTicketTable()}</td>
              <td>
                <button onClick={() => { this.props.handleRemove(this.props.ticketArr) }}
                className="btn btn-danger">Delete</button>
              </td>
            </tr> 
          </tbody>
          <tfoot>
              <tr className='text-white '>
                <td className='text-white font-weight-bolder text-left'>Tổng tiền</td>
                <td className='font-weight-bolder'>{this.renderPriceTableTicket()}</td>
                <td className='font-weight-bolder'>{this.renderTicketTable()}</td>
                <td></td>
              </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    ticketArr : state.ticketReducer.ticketArr,
    seletecTicket: state.ticketReducer.seletecTicket
  }
}

let mapDispatchToProps = (dispatch) => { 
  return {
    handleRemove : (ticket) => { 
      let action = {
        type : REMOVE_TICKET,
        payload : ticket
      }
      dispatch(action)
     }
  }
 }

export default connect(mapStateToProps,mapDispatchToProps)(ListRightTicket)