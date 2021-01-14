import React from "react";
import moment from 'moment'



class Calendar extends React.Component {


  prepRender () {
    console.log('hi');

    // Get month day headers
    let dayLabels = moment.weekdaysShort()

    let today = moment();

    /// Get current Mouth
    let currentMounth = today.format('MMMM');
    // Get first day of month
    let firstDayNum = today.startOf("month").format("d");
    // Get number od days in the Month
    let daysInMonth = today.daysInMonth()

    // Calulcate the number of rows / cells we will need
    let numRows = Math.ceil((parseInt(firstDayNum) + daysInMonth) / 7);



    let allRows = [];
    let thisRow = [];

    // Add in our header row
    dayLabels = dayLabels.map((day) => {return <td key={day}> {day}</td>});

    allRows.push(dayLabels);

    // Pad the front of the list
    for (var i = 1; i < firstDayNum; i++) {
      thisRow.push(<td></td>)
    }

    for (var i = 1; i <= numRows * 7; i++) {
      if (i > daysInMonth) {
        thisRow.push(<td></td>)
      } else {
        thisRow.push(<td>{i}</td>)
      }

      if (thisRow.length === 7) {
        // allRows.push(thisRow);
        allRows.push(thisRow)
        thisRow = [];
      }

    }



    return (allRows);

  }

  render () {


    let allRows = this.prepRender();

    let tableData = allRows.map ((row) =>
      {return <tr>{row}</tr>})

    return (
      <div>
        <table>
        {tableData}
        </table>

      </div>
    )
  }

}

export default Calendar;


// Resource https://programmingwithmosh.com/react/build-a-react-calendar-component-from-scratch/