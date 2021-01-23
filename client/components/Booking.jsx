import React from 'react';


import DateTextInput from './Calander/DateTextInput.jsx';

import GuestPanel from './Guests/GuestPanel.jsx';

import SVGZoo from './SVGZoo.jsx';


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

    return(

      <div className={Styles["BookingContainer"]}>

        {/* Header  */}
      <div className={Styles['booking-header']}>
        <div className={Styles['header-box']}>
          <div className={Styles['cost-box']}>
            <div className={Styles['old-cost']}>$83</div>
            <div className={Styles['new-cost']}>$69</div>
            <div className={Styles['new-cost-label']}>/night</div>
          </div>
          <div className={Styles['review']}>4.88</div>
        </div>
      </div>



      {/* <!-- Reservation Input --> */}
      <div className={Styles['res-detail-input']}>


        <div className={Styles['date-input']}>


          {/* <!-- Hiddend Calander Div  --> */}
          <div className={Styles['hidden-calander-container']}>
            <div className={Styles['hidden-calander-div']}>

              <div className={Styles['hidden-nights-sum']}>
                <div className={Styles['number-nights']}>5 nights</div>
                <div className={Styles['dates-of-nights']}>Apr 28, 2021 - May 3, 2021</div>
              </div>

              <div className={Styles['hidden-date-input']}>
                <div className={Styles['check-in']}>
                  <div className={Styles['date-label']}> Check In </div>
                  <div className={Styles['date-value']}>01/01/2021</div>
                </div>


                <div className={Styles['check-out']}>
                  <div className={Styles['date-label']}>Check Out</div>
                  <div className={Styles['date-value']}>01/30/2021</div>
                </div>
              </div>

              <div className={Styles["hidden-close-button"]}>
                <button className={Styles["clear-dates"]}>Clear Dates</button>
                <button className={Styles["close-button"]}>Close</button>
              </div>

              </div>

          </div>
          {/* <!-- End Hiddend Calander Div  --> */}



          <DateTextInput raiseDate={this.raiseDate}
          firstMoment={this.state.firstMoment}
          lastMoment={this.state.lastMoment}
          calanderVisable={this.state.calanderVisable}
          toggleCalanderVisable={this.toggleCalanderVisable}/>
          {/* <div className={Styles['check-in']}>
            <div className={Styles['date-label']}> Check In </div>
            <div className={Styles['date-value']}>01/01/2021</div>
          </div>


          <div className={Styles['check-out']}>
            <div className={Styles['date-label']}>Check Out</div>
            <div className={Styles['date-value']}>01/30/2021</div>
          </div> */}



        </div>

        {/* // <!-- Guests Selection  --> */}

        <div className={Styles['guests-psudo-boarder']}></div>
        <div className={Styles['guests']}>

          <div>
          <div className={Styles['guests-label']}>Guests</div>
          <div className={Styles['guests-value']}>2 guests</div>
          </div>

          <div className={Styles['select-guests']}>
            <SVGZoo name='arrowdown'/>
          </div>

        </div>
    </div>

    {/* <!-- Hidden Guests Selection  --> */}
    <span className={Styles['hidden-guest-containter']}>
      <div className={Styles['hidden-guest-div']}>

        <div className={Styles['guest-option']}>
          <div>
            <div className={Styles['guest-label']}>Adults</div>
            <div className={Styles['guest-desc']}>like an old person</div>
          </div>


          <div className={Styles['guest-type-change']}>
            <span className={Styles['guest-btn']}>
              <SVGZoo name='minus' />
            </span>

            <div className={Styles['guest-type-num']}>0</div>

            <div className={Styles['guest-btn']}>
            <SVGZoo name='plus' />
            </div>
          </div>

        </div>


        <div className={Styles['guest-option']}>
          <div>
            <div className={Styles['guest-label']}>Children</div>
            <div className={Styles['guest-desc']}>Ages 2-12</div>
          </div>


          <div className={Styles['guest-type-change']}>
            <span className={Styles['guest-btn']}>
            <SVGZoo name='minus' />
            </span>

            <div className={Styles['guest-type-num']}>0</div>

            <div className={Styles['guest-btn']}>
              <SVGZoo name='plus' />
            </div>
          </div>

        </div>


        <div className={Styles['guest-option']}>
          <div>
            <div className={Styles['guest-label']}>Infants</div>
            <div className={Styles['guest-desc']}>Under 2</div>
          </div>


          <div className={Styles['guest-type-change']}>
            <span className={Styles['guest-btn']}>
              <SVGZoo name='minus' />
            </span>

            <div className={Styles['guest-type-num']}>0</div>

            <div className={Styles['guest-btn']}>
              <SVGZoo name='plus' />
            </div>
          </div>

        </div>

        <div className={Styles['disclaimer']}>
          2 guests maximum. Infants don’t count toward the number of guests.
        </div>

        <div></div>
        <div className={Styles["hidden-close-button"]}>
          <button className={Styles["close-button"]}>Close</button>
        </div>


      </div>
    </span>

      {/* End Of Hidden Guest  */}

    <div className={Styles['reservation-button']}>
        <div className={Styles["res-button"]}>
          <h3>Reserve</h3>
        </div>
        <div className={Styles['disclaimer']}>
          You Wont be Charged Yet
        </div>
    </div>


      {/* Cost Breakdown  */}
    <div className={Styles['cost-breakdown']}>
      <div className={Styles['line-item']}>$69 x 5 nights</div>
      <div>$345</div>
      <div className={Styles['line-item']}>Cleaning fee</div>
      <div>$30</div>
      <div className={Styles['line-item']}>Service fee</div>
      <div>$53</div>
      <div className={Styles['line-item']}>Taxes and Fees</div>
      <div>$64</div>
    </div>

    <div className={Styles['total']}>
        <div className={Styles['total-psudo-boarder']}></div>
        <div className={Styles['total-box']}>
          <div className={Styles['total-label']}>Total</div>
          <div className={Styles['total-amount']}>$492</div>
        </div>
      </div>



      </div>)
  }
}

 export default Booking;