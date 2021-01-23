import React from 'react';
import ReactDOM from 'react-dom';

import Styles from './styles/DateTextInput.module.css';

class DateTextInput extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      type: this.props.type,
      value: '',
      datePickerVisable:false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openDatePicker = this.openDatePicker.bind(this);
  }

    handleChange(event) {
      console.log('In Handle Change');
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state.type, this.state.value);
    }

    openDatePicker() {
      var nextState = this.state.datePickerVisable ? false : true;
      console.log(nextState);

      this.setState({
        datePickerVisable: nextState
      })
    }



    render () {
      var hidden;
      if (this.state.datePickerVisable) {
        hidden = (

          <div className={Styles['hidden-calander-container']} >
            <div className={Styles['hidden-calander-div']}>

              <div className={Styles['hidden-nights-sum']}>
                <div className={Styles['number-nights']}>5 nights</div>
                <div className={Styles['dates-of-nights']}>Apr 28, 2021 - May 3, 2021</div>
              </div>

              <div className={Styles['hidden-date-input']}>
                <div className={Styles['check-in']}>
                  <div className={Styles['date-label']}> Check In </div>
                  <div className={Styles['date-value']}>01/01/2021</div>
                </div>


                <div className={Styles['check-out']}>
                  <div className={Styles['date-label']}>Check Out</div>
                  <div className={Styles['date-value']}>01/30/2021</div>
                </div>
              </div>

              <div className={Styles["hidden-close-button"]}>
                <button className={Styles["clear-dates"]}>Clear Dates</button>
                <button className={Styles["close-button"]}>Close</button>
              </div>

              </div>

          </div>



        )
      }

      return (
        <div className={Styles['date-input']}>

          {hidden}




          <div className={Styles['check-in']} onClick={this.openDatePicker}>
            <div className={Styles['date-label']}> Check In </div>
            <div className={Styles['date-value']}>01/01/2021</div>
          </div>


          <div className={Styles['check-out']} onClick={this.openDatePicker}>
            <div className={Styles['date-label']}>Check Out</div>
            <div className={Styles['date-value']}>01/30/2021</div>
          </div>
        </div>
        )
      }
 }

 export default DateTextInput;