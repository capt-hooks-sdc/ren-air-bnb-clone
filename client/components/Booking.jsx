import React from 'react';

import CalendarPicker from './Calander/CalenderPicker.jsx';
import DateTextInput from './Calander/DateTextInput.jsx';


class Booking extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      type: this.props.type,
      value: ''
    }

    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput (type, date) {
    console.log(`${type} ${date}`);

    /// Test if in format of valud date
    if (date.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
      console.log('It\'s Date');

      debugger;
    }

  }

  render () {
      return(
      <div>
        Booking
        <DateTextInput type="checkIn-book_it" onSubmit={this.handleTextInput}/>
        <DateTextInput type="checkOut-book_it" onSubmit={this.handleTextInput}/>
        <CalendarPicker/>
      </div>)
  }
}

 export default Booking;