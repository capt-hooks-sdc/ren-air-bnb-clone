import React from 'react';

import CalendarPicker from './Calander/CalenderPicker.jsx';
import DateTextInput from './Calander/DateTextInput.jsx';

import moment from 'moment'


class Booking extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      type: this.props.type,
      value: '',
      firstMoment: null,
      lastMoment: null
    }

    this.handleTextInput = this.handleTextInput.bind(this);
    this.raiseDate = this.raiseDate.bind(this);
  }

  handleTextInput (type, date) {
    console.log(`${type} ${date}`);

    /// Test if in format of valud date
    if (date.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
      console.log('It\'s Date');

      var date = moment(new Date(date));

      this.raiseDate(type, date);

    }

  } // End handleTextInput

  raiseDate (type, date) {
    /**
    * Sets the date in the calanders from the text inputs or clicking on the calander
    *
    * @param {string}   type Either  checkIn-book_it or
    * @param {date object}   [date] a moment object
    * @return {void}
    *
    * @sideEffect Set the state of the cmponet by updating either firstmoment or LastMoment
    */


    if (type === 'checkIn-book_it') {

      this.setState({
        firstMoment: date
      });

    } else {
      this.setState({
        lastMoment: date
      });
    }

  } // End raiseDate

  render () {
      return(
      <div>
        Booking
        <DateTextInput type="checkIn-book_it" onSubmit={this.handleTextInput}/>
        <DateTextInput type="checkOut-book_it" onSubmit={this.handleTextInput}/>
        <CalendarPicker firstMoment={this.state.firstMoment}
        lastMoment={this.state.lastMoment}
        raiseDate={this.raiseDate}/>
      </div>)
  }
}

 export default Booking;