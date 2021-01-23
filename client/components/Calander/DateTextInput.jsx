import React from 'react';
import ReactDOM from 'react-dom';

import Styles from './styles/DateTextInput.module.css';

import CalenderPicker from './CalenderPicker.jsx'

class DateTextInput extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      type: this.props.type,
      value: '',
      // datePickerVisable:false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.openDatePicker = this.openDatePicker.bind(this);
  }

    handleChange(event) {
      console.log('In Handle Change');
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state.type, this.state.value);
    }

    // openDatePicker() {
    //   var nextState = this.state.datePickerVisable ? false : true;
    //   this.setState({
    //     datePickerVisable: nextState
    //   })
    // }



    render () {
      var hidden;
      if (this.props.calanderVisable) {
        // hidden = <CalenderPicker raiseDate={this.props.raiseDate}/>

        hidden = (<CalenderPicker firstMoment={this.props.firstMoment}
          lastMoment={this.props.lastMoment}
          raiseDate={this.props.raiseDate}
          toggleCalanderVisable={this.props.toggleCalanderVisable}/>)
      }

      return (
        <div className={Styles['date-input']}>

          {hidden}

          <div className={Styles['check-in']} onClick={this.props.toggleCalanderVisable}>
            <div className={Styles['date-label']}> Check In </div>
            <div className={Styles['date-value']}>01/01/2021</div>
          </div>


          <div className={Styles['check-out']} onClick={this.props.toggleCalanderVisable}>
            <div className={Styles['date-label']}>Check Out</div>
            <div className={Styles['date-value']}>01/30/2021</div>
          </div>
        </div>
        )
      }
 }

 export default DateTextInput;