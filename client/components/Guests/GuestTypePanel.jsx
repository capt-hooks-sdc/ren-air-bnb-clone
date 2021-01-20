import React from 'react';


function GuestTypePanel(props) {
  return (<div>
    {props.guestType}
    {props.guestDiscription}
    <button onClick={() => {props.incGuests(props.guestType, -1)}}>-</button>
    {props.number}
    <button onClick={() => {props.incGuests(props.guestType, +1)}}>+</button>
    </div>)
}


export default GuestTypePanel;