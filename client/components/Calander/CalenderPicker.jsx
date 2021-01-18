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
}

componentWillMount () {

  var currentMouth = moment();
  var nextMouth = moment().add(1, 'months')

  this.setState({
    firstMonth: currentMouth,
    secondMonth:  nextMouth
  })
}

  render() {

    return(
      <span>
        CalenderPicker
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
      </span>)
  }

 }

 export default CalenderPicker;