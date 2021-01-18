import React from 'react';

import Calendar from './Calendar.jsx';


class CalenderPicker extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   firstMoment: null,
    //   lastMoment: null
    // }
}


  render() {
    return(
      <div>
        CalenderPicker
        <Calendar firstMoment={this.props.firstMoment}
        lastMoment={this.props.lastMoment}
        raiseDate={this.props.raiseDate}
        />
      </div>)
  }

 }

 export default CalenderPicker;