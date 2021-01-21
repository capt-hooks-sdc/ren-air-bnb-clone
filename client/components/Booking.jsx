import React from 'react';

import CalendarPicker from './Calander/CalenderPicker.jsx';
import DateTextInput from './Calander/DateTextInput.jsx';

import GuestPanel from './Guests/GuestPanel.jsx';

import Styles from './topStyles/Booking.module.css';

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
      Adults: 0,
      Children: 0,
      Infants: 0,
      calanderVisable: false
    }

    this.handleTextInput = this.handleTextInput.bind(this);
    this.raiseDate = this.raiseDate.bind(this);
    this.toggleCalanderVisable = this.toggleCalanderVisable.bind(this);
    this.incGuests = this.incGuests.bind(this);
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

  incGuests (type, number) {
    console.log('in Ince Guests ');

    if ((this.state[type] === 0 && number > 0) || this.state[type] > 0) {
      var guestType = this.state[type] + number;

      var totalGuests = this.state.totalGuests + number;

      this.setState({
        totalGuests: totalGuests,
        [type] : guestType
      })

    }

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
        {/* _13vog1a */}
        <div id={Styles.bookingHeader}>
        {/* _xqcexm */}
          <div id={Styles.bookingHeaderPrice}> $68 </div>
          {/* _krjbj */}
          <span>Booking 68$</span>
        </div>

        {/* _p03egf */}
        <div id={Styles.resInputContainer}>
          {/* _e296pg */}
          <div id={Styles.resInput}>

            <div id={Styles.DateInputsBoxFlex}>
              <div id={Styles.DateInputsBoxInner}>
                <div id={Styles.StartDateBox}>
                  {/* <DateTextInput type="checkIn-book_it" onSubmit={this.handleTextInput} value={this.state.firstTextValue} toggleCalanderVisable={this.toggleCalanderVisable}/> */}
                  hello
                </div>

                <div id={Styles.EndDateBox}>
                  world
                {/* <DateTextInput type="checkOut-book_it" onSubmit={this.handleTextInput} value={this.state.lastTextValue} toggleCalanderVisable={this.toggleCalanderVisable}/> */}
                </div>

              </div>
              <div id={Styles.DateInputsBoxInnerAfterBoarder}></div>

            </div>

            {/* {calanderDiv} */}

            <div id={Styles.GuestNumBoxFlex}>
            <div id={Styles.GuestNumBoxBorderTop}></div>
              <div id={Styles.GuestNumBox}>
                Guests: {this.state.totalGuests}
                {/* <GuestPanel incGuests={this.incGuests} Adults={this.state.Adults} Children={this.state.Children} Infants={this.state.Infants}/> */}
              </div>
              <div id={Styles.GuestNumBoxBorderUnder}></div>
            </div>
            </div>


            {/* End Reservation Details Input */}
            <div id={Styles.reserverButtonBox}>
              <button id={Styles.reserveButton}>
                <span id={Styles.reserveButtonSpan1}>
                  <span id={Styles.reserveButtonSpan2}>
                  </span>
                </span>
                <span id={Styles.reserveButtonSpan3}>Reserve </span>
              </button>
            </div>




        </div>
      </div>)
  }
}

 export default Booking;