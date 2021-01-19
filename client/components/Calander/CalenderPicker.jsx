import React from 'react';
import moment from 'moment'
import Calendar from './Calendar.jsx';


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
      <div>
        CalenderPicker
        <button onClick={() => {this.shiftMonths('left')}}>Left</button>
        <button onClick={() => {this.shiftMonths('right')}}>Right</button>
        <Calendar firstMoment={this.props.firstMoment}
        lastMoment={this.props.lastMoment}
        raiseDate={this.props.raiseDate}
        momObj={this.state.firstMonth}
        />
        <Calendar firstMoment={this.props.firstMoment}
        lastMoment={this.props.lastMoment}
        raiseDate={this.props.raiseDate}
        momObj={this.state.secondMonth}
        />
      </div>)
  }

 }

 export default CalenderPicker;