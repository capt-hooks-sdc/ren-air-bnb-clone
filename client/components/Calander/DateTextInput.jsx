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

    render () {
      var hidden;
      if (this.props.calanderVisable) {
        hidden = (<CalenderPicker firstMoment={this.props.firstMoment}
          lastMoment={this.props.lastMoment}
          raiseDate={this.props.raiseDate}
          toggleCalanderVisable={this.props.toggleCalanderVisable}
          handleTextInput = {this.props.handleTextInput}/>)
      }

      return (
        <div className={Styles['date-input']}>

          {hidden}

          <div className={Styles['check-in']} onClick={this.props.toggleCalanderVisable}>
            <div className={Styles['date-label']}> Check In </div>
            <div className={Styles['date-value']}>{this.props.firstMoment ? this.props.firstMoment.format('MM/DD/YY') : 'MM/DD/YY'}</div>
          </div>


          <div className={Styles['check-out']} onClick={this.props.toggleCalanderVisable}>
            <div className={Styles['date-label']}>Check Out</div>
            <div className={Styles['date-value']}>{this.props.lastMoment ? this.props.lastMoment.format('MM/DD/YY') : 'MM/DD/YY'}</div>
          </div>
        </div>
        )
      }
 }

 export default DateTextInput;