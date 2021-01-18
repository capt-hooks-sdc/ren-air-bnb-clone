import React from "react";
import moment from 'moment'

import CalendarDay from './CalendarDay.jsx';


class Calendar extends React.Component {
  constructor(props) {
    super(props)

    let timeData = props.momObj || moment();
    this.state = {
      momObj: timeData,
      // firstMoment: this.props.firstMoment,
      // lastMoment: this.props.lastMoment,

    }

    this.prepHeaderRender = this.prepHeaderRender.bind(this);
    this.prepDaysRender = this.prepDaysRender.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  prepHeaderRender() {
    // Get month day headers
    let dayLabels = moment.weekdaysShort()

    // Add in our header row
    dayLabels = dayLabels.map((day) => {
      return (
        <th key={day} className="week-day">
          {day.slice(0,2)}
        </th>)
    });

    return(dayLabels);
  }

  createCell (i, currentMounth, isblank = false) {


    let value = isblank ? "" : i.toString();
    let prefix = isblank ? "b" + i : "d";

    /// Set some defaults
    let reservedBool = false;
    let selectedBool = false;
    let bwselectedBool = false;

    /// Check if this guy is selected
    if (this.props.firstMoment && value === this.props.firstMoment.format("D") && currentMounth === this.props.firstMoment.format("M")) {
      selectedBool = true;
    } else if (this.props.lastMoment && value === this.props.lastMoment.format("D") && currentMounth === this.props.lastMoment.format("M")) {
      selectedBool = true;
    }
    /// Check if this day is between two selected dates
    else if (this.props.firstMoment && this.props.lastMoment && value.length) {

      if (moment(`${currentMounth} ${i}, ${2021}`).isBetween(this.props.firstMoment, this.props.lastMoment)) {
        bwselectedBool = true;
      }
    }

    return (<CalendarDay
      key = {prefix + value}
      day={value}
      month={currentMounth}
      clickHandler={this.handleClick}
      reserved={reservedBool}
      selected={selectedBool}
      bwselected={bwselectedBool}
      />)
  }


  prepDaysRender () {
    let today = this.state.momObj;

    /// Get current Mouth
    let currentMounth = today.format('M');
    // Get first day of month
    let firstDayNum = today.startOf("month").format("d");
    // Get number od days in the Month
    let daysInMonth = today.daysInMonth()

    // Calulcate the number of rows / cells we will need
    let numRows = Math.ceil((parseInt(firstDayNum) + daysInMonth) / 7);

    let allRows = [];
    let thisRow = [];

    // Pad the front of the list
    for (var i = 1; i < firstDayNum; i++) {
      // thisRow.push(<CalendarDay key = {'b'+ i} day={null} month={null}
      // clickHandler={this.handleClick}/>)
      thisRow.push(this.createCell(i, currentMounth, true));
    }

    for (var i = 1; i <= numRows * 7; i++) {
      if (i > daysInMonth) {

        thisRow.push(this.createCell(i, currentMounth, true));

      } else {

      thisRow.push(this.createCell(i, currentMounth, false));
      }

      if (thisRow.length === 7) {
        // allRows.push(thisRow);
        allRows.push(thisRow)
        thisRow = [];
      }

    }



    return (allRows);

  }

  handleClick(day, month) {
    console.log(`You click ${day}!`);
    /// Calulate if this is a valid start of trip or end of trip day

    /// If no dates selectrd, drop start
    if (!this.props.firstMoment) {

      var temp = moment(new Date(2021, parseInt(month) - 1, day))

      var date = new Date(2021, parseInt(month) - 1, day);
      date = moment(date);
      // this.setState({
      //   firstMoment: moment(new Date(2021, parseInt(month) - 1, day))
      // })

      /// Raise the state to the bookings component
      this.props.raiseDate('checkIn-book_it', date)

    /// If we have a first date but not a last
    } else if (this.props.firstMoment && (!this.props.lastMoment)) {
      // And this data is after the previous one

      // let proposed = `${month} ${day}, ${2021}`;
      let proposed = new Date(2021, parseInt(month) - 1, day)
      proposed = moment(proposed)

      /// If the propsed day is after the last day of the trip
      if (this.props.firstMoment.diff(proposed) < 0 ) {

        this.props.raiseDate('checkOut-book_it', proposed)
      }


    }


  }

  render () {

    console.log('In Calander Render');

    let header = this. prepHeaderRender();
    let allRows = this.prepDaysRender();

    let tableHeader = <tr>{header}</tr> ;

    let currentMounth = this.state.momObj.format('MMMM')
    let currentYear= this.state.momObj.format('YYYY')


    let tableData = allRows.map ((row, i) =>
      {return <tr key={'' + i}>{row}</tr>})

    return (
      <div className="cal-box">
        <div>
          <h3>{currentMounth} {currentYear}</h3>
        </div>
        <table>
          <tbody>
            {tableHeader}
            {tableData}
        </tbody>
        </table>

      </div>
    )
  }

}

export default Calendar;


// Resource https://programmingwithmosh.com/react/build-a-react-calendar-component-from-scratch/