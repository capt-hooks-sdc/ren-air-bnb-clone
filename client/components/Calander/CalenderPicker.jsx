import React from 'react';
import moment from 'moment'
import Calendar from './Calendar.jsx';
import PickerDateTextInput from './PickerDateTextInput.jsx';

import Styles from './styles/CalenderPicker.module.css';



class CalenderPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstMonth: null,
      secondMonth: null
    }

    this.shiftMonths = this.shiftMonths.bind(this);
    this.calculateDetails = this.calculateDetails.bind(this);
}

componentWillMount () {

  var currentMouth = moment();
  var nextMouth = moment().add(1, 'months')

  this.setState({
    firstMonth: currentMouth,
    secondMonth:  nextMouth
  })
}

  shiftMonths(direction) {
    // debugger;
    if (direction === 'right') {
      var newFirst = this.state.firstMonth.clone().add(1, 'months')
      var nextMouth = newFirst.clone().add(1, 'months')
    } else {
      var newFirst = this.state.firstMonth.clone().subtract(1, 'months')
      var nextMouth = newFirst.clone().add(1, 'months')
    }

    this.setState({
      firstMonth: newFirst,
      secondMonth:  nextMouth
    })

  }

  calculateDetails () {

    var nights = 0;
    var hrCheckIn = '';
    var hrCheckOut = '';


    if (this.props.firstMoment && this.props.lastMoment) {
      var nights = this.props.lastMoment.diff(this.props.firstMoment, 'days')
      var hrCheckIn = this.props.firstMoment.format("MMM Do YY");
      var hrCheckOut = this.props.lastMoment.format("MMM Do YY");

    }

    return {nights, hrCheckIn, hrCheckOut}
  }

  render() {
    console.log('In Render');
    console.log(this.props.firstMoment)
    console.log(this.props.LastMoment)


    let staySummary = this.calculateDetails();


    return(

      <div className={Styles['hidden-calander-container']} >
      <div className={Styles['hidden-calander-div']}>

        <div className={Styles['hidden-nights-sum']}>
          <div className={Styles['number-nights']}>{staySummary.nights} nights</div>
          <div className={Styles['dates-of-nights']}>{staySummary.hrCheckIn} - {staySummary.hrCheckOut}</div>
        </div>

        <div className={Styles['hidden-date-input']}>



        <PickerDateTextInput value={this.props.firstMoment }
        onSubmit={this.props.raiseDate}
        type={'checkIn-book_it'}
        handleTextInput = {this.props.handleTextInput}/>

        <PickerDateTextInput value={this.props.lastMoment}
        onSubmit={this.props.raiseDate}
        type={'checkOut-book_it'}
        handleTextInput = {this.props.handleTextInput}/>

        </div>

        {/* // Original Calander */}


          <div id={Styles['calender-prev']}>
          <button onClick={() => {this.shiftMonths('left')}}>Left</button>
            <Calendar firstMoment={this.props.firstMoment}
            lastMoment={this.props.lastMoment}
            raiseDate={this.props.raiseDate}
            momObj={this.state.firstMonth}
            toggleCalanderVisable={this.props.toggleCalanderVisable}
            />
          </div>

          <div id={Styles['calender-post']}>
          <button onClick={() => {this.shiftMonths('right')}}>Right</button>
            <Calendar firstMoment={this.props.firstMoment}
            lastMoment={this.props.lastMoment}
            raiseDate={this.props.raiseDate}
            momObj={this.state.secondMonth}
            toggleCalanderVisable={this.props.toggleCalanderVisable}
            />
          </div>


        <div className={Styles["hidden-close-button"]}>
          <button className={Styles["clear-dates"]}>Clear Dates</button>
          <button className={Styles["close-button"]} onClick={() => {this.props.toggleCalanderVisable(false)}}>Close</button>
        </div>

        </div>

    </div>



      )
  }

 }

 export default CalenderPicker;