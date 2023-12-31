import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADD_TO_LIST, CHANGE_STYLE } from './Constant/TicketConstant';

class ListLeftTicket extends Component {
  renderTable = () => {
    return this.props.ticketArr.map((item, index) => {
      return (
        <tr key={index} className='tr-left'>
          <td>
            <button className="btn ">{item.hang}</button>
          </td>
          <td className='text-white'>
            <button style={{ backgroundColor: item.danhSachGhe[0].daDat == true && item.danhSachGhe[0].gia == 0 ? "#ffc601" : item.danhSachGhe[0].daDat == true ? "green" : "white" }} onClick={() => { this.props.handleChangeStyle(item.danhSachGhe[0].soGhe) }}
              className="btn">
              <a onClick={() => { this.props.handleAddToList(item.danhSachGhe[0]) }}
                href="#" type='button'>{item.danhSachGhe[0].soGhe}
              </a>
            </button>
          </td>
          <td className='text-white'>
            <button style={{ backgroundColor: item.danhSachGhe[1].daDat == true && item.danhSachGhe[1].gia == 0 ? "#ffc601" : item.danhSachGhe[1].daDat == true ? "green" : "white" }} onClick={() => { this.props.handleChangeStyle(item.danhSachGhe[1].soGhe) }}
              className="btn">
              <a onClick={() => { this.props.handleAddToList(item.danhSachGhe[1]) }}
                href="#" type='button'>{item.danhSachGhe[1].soGhe}
              </a>
            </button>
          </td>
          <td className='text-white'>
            <button style={{ backgroundColor: item.danhSachGhe[2].daDat == true && item.danhSachGhe[2].gia == 0 ? "#ffc601" : item.danhSachGhe[2].daDat == true ? "green" : "white" }} onClick={() => { this.props.handleChangeStyle(item.danhSachGhe[2].soGhe) }}
              className="btn">
              <a onClick={() => { this.props.handleAddToList(item.danhSachGhe[2]) }}
                href="#" type='button'>{item.danhSachGhe[2].soGhe}
              </a>
            </button>
          </td>
          <td className='text-white'>
            <button style={{ backgroundColor: item.danhSachGhe[3].daDat == true && item.danhSachGhe[3].gia == 0 ? "#ffc601" : item.danhSachGhe[3].daDat == true ? "green" : "white" }} onClick={() => { this.props.handleChangeStyle(item.danhSachGhe[3].soGhe) }}
              className="btn">
              <a onClick={() => { this.props.handleAddToList(item.danhSachGhe[3]) }}
                href="#" type='button'>{item.danhSachGhe[3].soGhe}</a>
            </button>
          </td>
          <td className='text-white'>
            <button style={{ backgroundColor: item.danhSachGhe[4].daDat == true && item.danhSachGhe[4].gia == 0 ? "#ffc601" : item.danhSachGhe[4].daDat == true ? "green" : "white" }} onClick={() => { this.props.handleChangeStyle(item.danhSachGhe[4].soGhe) }}
              className="btn">
              <a onClick={() => { this.props.handleAddToList(item.danhSachGhe[4]) }}
                href="#" type='button'>{item.danhSachGhe[4].soGhe}</a>
            </button>
          </td>
          <td className='text-white'>
            <button style={{ backgroundColor: item.danhSachGhe[5].daDat == true && item.danhSachGhe[5].gia == 0 ? "#ffc601" : item.danhSachGhe[5].daDat == true ? "green" : "white" }} onClick={() => { this.props.handleChangeStyle(item.danhSachGhe[5].soGhe) }}
              className="btn">
              <a onClick={() => { this.props.handleAddToList(item.danhSachGhe[5]) }}
                href="#" type='button'>{item.danhSachGhe[5].soGhe}</a>
            </button>
          </td>
          <td className='text-white'>
            <button style={{ backgroundColor: item.danhSachGhe[6].daDat == true && item.danhSachGhe[6].gia == 0 ? "#ffc601" : item.danhSachGhe[6].daDat == true ? "green" : "white" }} onClick={() => { this.props.handleChangeStyle(item.danhSachGhe[6].soGhe) }}
              className="btn">
              <a onClick={() => { this.props.handleAddToList(item.danhSachGhe[6]) }}
                href="#" type='button'>{item.danhSachGhe[6].soGhe}</a>
            </button>
          </td>
          <td className='text-white'>
            <button style={{ backgroundColor: item.danhSachGhe[7].daDat == true && item.danhSachGhe[7].gia == 0 ? "#ffc601" : item.danhSachGhe[7].daDat == true ? "green" : "white" }} onClick={() => { this.props.handleChangeStyle(item.danhSachGhe[7].soGhe) }}
              className="btn">
              <a onClick={() => { this.props.handleAddToList(item.danhSachGhe[7]) }}
                href="#" type='button'>{item.danhSachGhe[7].soGhe}</a>
            </button>
          </td>
          <td className='text-white'>
            <button style={{ backgroundColor: item.danhSachGhe[8].daDat == true && item.danhSachGhe[8].gia == 0 ? "#ffc601" : item.danhSachGhe[8].daDat == true ? "green" : "white" }} onClick={() => { this.props.handleChangeStyle(item.danhSachGhe[8].soGhe) }}
              className="btn">
              <a onClick={() => { this.props.handleAddToList(item.danhSachGhe[8]) }}
                href="#" type='button'>{item.danhSachGhe[8].soGhe}</a>
            </button>
          </td>
          <td className='text-white'>
            <button style={{ backgroundColor: item.danhSachGhe[9].daDat == true && item.danhSachGhe[9].gia == 0 ? "#ffc601" : item.danhSachGhe[9].daDat == true ? "green" : "white" }} onClick={() => { this.props.handleChangeStyle(item.danhSachGhe[9].soGhe) }}
              className="btn">
              <a onClick={() => { this.props.handleAddToList(item.danhSachGhe[9]) }}
                href="#" type='button'>{item.danhSachGhe[9].soGhe}</a>
            </button>
          </td>
          <td className='text-white'>
            <button style={{pointerEvents : item.danhSachGhe[10].gia == 0 ?  "none" : "" , backgroundColor: item.danhSachGhe[10].daDat == true && item.danhSachGhe[10].gia == 0 ? "#ffc601" : item.danhSachGhe[10].daDat == true ? "green" : "white" }} onClick={() => { this.props.handleChangeStyle(item.danhSachGhe[10].soGhe) }}
              className="btn">
              <a style={{pointerEvents : item.danhSachGhe[10].gia == 0 ? "none" : "" }}
              onClick={() => { this.props.handleAddToList(item.danhSachGhe[10]) }}
                href="#" type='button'>{item.danhSachGhe[10].soGhe}</a>
            </button>
          </td>
          <td className='text-white'>
            <button style={{pointerEvents : item.danhSachGhe[10].gia == 0 ?  "none" : "" , backgroundColor: item.danhSachGhe[11].daDat == true && item.danhSachGhe[11].gia == 0 ? "#ffc601" : item.danhSachGhe[11].daDat == true ? "green" : "white" }} onClick={() => { this.props.handleChangeStyle(item.danhSachGhe[11].soGhe) }}
              className="btn">
              <a style={{pointerEvents : item.danhSachGhe[10].gia == 0 ? "none" : "" }}
              onClick={() => { this.props.handleAddToList(item.danhSachGhe[11]) }}
                href="#" type='button'>{item.danhSachGhe[11].soGhe}</a>
            </button>
          </td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className='col-8 py-3'>
        <h3 className='text-warning font-weight-bolder'>ĐẶT VÉ XEM PHIM CYPERLANE.VN</h3>
        <h4 className='text-white'>Màn hình</h4>
        <div style={{
          borderBottom: "25px solid #fe9f5f",
          borderLeft: "25px solid transparent",
          borderRight: "25px solid transparent",
          height: "0",
          width: "90%",
          margin: "auto",
        }}
        ></div>
        <div style={{
          width: "90%",
          borderBottom: "1px solid rgb(254, 159, 95)",
          margin: "auto",
          boxShadow: "-2px 6px 13px 5px white"
        }}
        ></div>
        <table className='m-auto'>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    ticketArr: state.ticketReducer.ticketArr,
    seletecTicket: state.ticketReducer.seletecTicket
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddToList: (ticket) => {
      let action = {
        type: ADD_TO_LIST,
        payload: ticket
      }
      dispatch(action)
    },
    handleChangeStyle: (ticket) => {
      let action = {
        type: CHANGE_STYLE,
        payload: ticket
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListLeftTicket)
