import React, { Component } from 'react'
import ListLeftTicket from './ListLeftTicket'
import ListRightTicket from './ListRightTicket'


export default class Ex_Ticker extends Component {
  render() {
    return (
      <div>
        <div className="row m-0">
            <ListLeftTicket/>
            <ListRightTicket/>
        </div>
      </div>
    )
  }
}
