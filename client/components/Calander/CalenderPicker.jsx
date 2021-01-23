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

  render() {
    console.log('In Render');
    return(

      <div className={Styles['hidden-calander-container']} >
      <div className={Styles['hidden-calander-div']}>

        <div className={Styles['hidden-nights-sum']}>
          <div className={Styles['number-nights']}>5 nights</div>
          <div className={Styles['dates-of-nights']}>Apr 28, 2021 - May 3, 2021</div>
        </div>

        <div className={Styles['hidden-date-input']}>
{/*
          <div className={Styles['check-in']}>
            <div className={Styles['date-label']}> Check In </div>
            <div className={Styles['date-value']}>01/01/2021</div>
          </div>

          <div className={Styles['check-out']}>
            <div className={Styles['date-label']}>Check Out</div>
            <div className={Styles['date-value']}>01/30/2021</div>
          </div> */}


        <PickerDateTextInput />
        <PickerDateTextInput />

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
          <button className={Styles["close-button"]}>Close</button>
        </div>

        </div>

    </div>



      )
  }

 }

 export default CalenderPicker;