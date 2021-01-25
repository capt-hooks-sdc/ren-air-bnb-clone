import React from "react";

import Styles from './styles/CalenderDay.module.css';


class CalendarDay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      classes: "cal-day",
      reserved: this.props.reserved,
      selected: this.props.selected,
      bwselected: this.props.bwselected,
    }



    this.onClick = this.props.clickHandler.bind(this);
    this.dayClickHandler = this.dayClickHandler.bind(this);

  }

  dayClickHandler() {

    this.onClick(this.props.day, this.props.month);

  }



  render () {
    // let classStr = this.state.classes;
    let classStr = 'calday';

    let specialStr = '';
    if (this.props.selected) {
      specialStr += "selected";
    } else if (this.props.bwselected) {
      specialStr += "bwselected";
    }
    if (this.state.reserved) {
      specialStr += "reserved";
    }

    console.log(specialStr)

    return (
      <td className={`${Styles[specialStr]} ${Styles[classStr]}`} onClick={this.dayClickHandler}>{
        this.props.day}
      </td>
    )
  }

}

export default CalendarDay;


// Resource https://programmingwithmosh.com/react/build-a-react-calendar-component-from-scratch/