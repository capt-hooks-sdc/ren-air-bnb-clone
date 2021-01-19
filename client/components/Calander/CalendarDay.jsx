import React from "react";

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
    // this.setState({
    //   selected: true,
    // })
  }



  render () {
    console.log(`in Day Render: ${this.props.selected}`);

    let classStr = this.state.classes;
    if (this.props.selected) {
      console.log('In Selected');
      classStr += " selected";
    } else if (this.props.bwselected) {
      console.log('In BW Selected');
      classStr += " bwselected";
    }

    if (this.state.reserved) {
      classStr += " reserved";
    }
    return (
      <td className={classStr} onClick={this.dayClickHandler}>{
        this.props.day}
      </td>
    )
  }

}

export default CalendarDay;


// Resource https://programmingwithmosh.com/react/build-a-react-calendar-component-from-scratch/