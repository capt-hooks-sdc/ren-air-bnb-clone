import React from "react";
import moment from 'moment'

import GuestTypePanel from './GuestTypePanel.jsx';


class GuestPanel extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
      <div >
        <GuestTypePanel guestType={'Adults'} guestDiscription={''} number={this.props.Adults} incGuests={this.props.incGuests}/>
        <GuestTypePanel guestType={'Children'} guestDiscription={'Ages 2-12'} number={this.props.Children} incGuests={this.props.incGuests}/>
        <GuestTypePanel guestType={'Infants'} guestDiscription={'Under 2'} number={this.props.Infants} incGuests={this.props.incGuests}/>
      </div>
    )
  }

}

export default GuestPanel;

