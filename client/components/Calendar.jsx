import React from "react";
import moment from 'moment'

import CalendarDay from './CalendarDay.jsx';


class Calendar extends React.Component {
  constructor(props) {
    super(props)

    let timeData = props.momObj || moment();
    this.state = {
      momObj: timeData,

      firstMoment: null,
      firstDaySelected: null,
      firstMonthSelected: null,
      firstYearSelected: 2021,

      lastDaySelected: null,
      lastMonthSelected: null,
      lastYearSelected: 2021,
      lastMoment: null,


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


    let value = isblank ? "" : i;
    let prefix = isblank ? "b" + i : "d";

    /// Set some defaults
    let reservedBool = false;
    let selectedBool = false;
    let bwselectedBool = false;



    /// Check if this guy is selected
    if (i === this.state.firstDaySelected && currentMounth === this.state.firstMonthSelected ) {
      selectedBool = true;
    } else if (i === this.state.lastDaySelected && currentMounth === this.state.lastMonthSelected ) {
      selectedBool = true;
    }
    /// Check if this day is between two selected dates
    else if (this.state.firstMoment && this.state.lastMoment) {

      if (moment(`${currentMounth} ${i}, ${2021}`).isBetween(this.state.firstMoment, this.state.lastMoment)) {
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
    if (!this.state.firstDaySelected && !this.state.lastDaySelected) {

      console.log(`${this.state.firstYearSelected}`)
      console.log(`${month}`)
      console.log(`${day}`)

      this.setState({
        firstDaySelected: day,
        firstMonthSelected: month,
        firstMoment: moment(new Date(this.state.firstYearSelected, parseInt(month) - 1, day))
      })
      /// If we have a first date but not a last
    } else if (this.state.firstDaySelected && (!this.state.lastDaySelected && ! this.state.lastMonthSelected)) {
      // And this data is after the previous one

      // let first = `${this.state.firstMonthSelected} ${this.state.firstDaySelected}, ${this.state.firstYearSelected}`;

      let proposed = `${month} ${day}, ${2021}`;

      // first = moment(first)
      proposed = moment(proposed)

      /// If the propsed day is after the last day of the trip
      if (this.state.firstMoment.diff(proposed) < 0 ) {
        this.setState({
          lastDaySelected: day,
          lastMonthSelected: month,
          lastMoment: proposed
        })
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