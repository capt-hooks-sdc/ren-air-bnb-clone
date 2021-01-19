import React from 'react';

import CalendarPicker from './Calander/CalenderPicker.jsx';
import DateTextInput from './Calander/DateTextInput.jsx';

import Guests from './Guests/GuestPanel.jsx';

import moment from 'moment'


class Booking extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      type: this.props.type,
      value: '',
      firstMoment: null,
      lastMoment: null,
      firstTextValue: "",
      lastTextValue: "",
      totalGuests: 0,
      calanderVisable: false
    }

    this.handleTextInput = this.handleTextInput.bind(this);
    this.raiseDate = this.raiseDate.bind(this);
    this.toggleCalanderVisable = this.toggleCalanderVisable.bind(this);
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
    * @param {date object}   [date] a moment object if a date exsists or '' to clear it out;
    * @return {void}
    *
    * @sideEffect Set the state of the cmponet by updating either firstmoment or LastMoment
    */

    var dateDate = date === '' ? null : date;
    var dateText = date === '' ? '' : date.format('MM/DD/YYYY');

    if (type === 'checkIn-book_it') {
      this.setState({
        firstMoment: dateDate,
        firstTextValue: dateText
      });
    } else {
      this.setState({
        lastMoment: dateDate,
        lastTextValue: dateText,
        calanderVisable: false /// Remove the calnder from view
      });
    }

  } // End raiseDate

  toggleCalanderVisable (visible) {
    // debugger;
    this.setState({
      calanderVisable: visible
    })
  }

  render () {

    var calanderDiv = (<div></div>)
    if (this.state.calanderVisable) {
      calanderDiv = (        <div id='calander-picker'>
      <CalendarPicker firstMoment={this.state.firstMoment}
      lastMoment={this.state.lastMoment}
      raiseDate={this.raiseDate}
      toggleCalanderVisable={this.toggleCalanderVisable}/>
      </div>)
    }

    return(
      <div id="booking-container">
        <div className='item-booking-header'>
        Booking
        </div>

        <div id='item-start-date'>
          <DateTextInput type="checkIn-book_it" onSubmit={this.handleTextInput} value={this.state.firstTextValue} toggleCalanderVisable={this.toggleCalanderVisable}/>
        </div>

        <div id='item-end-date'>
        <DateTextInput type="checkOut-book_it" onSubmit={this.handleTextInput} value={this.state.lastTextValue} toggleCalanderVisable={this.toggleCalanderVisable}/>
        </div>

        {calanderDiv}

      </div>)
  }
}

 export default Booking;