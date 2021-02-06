import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment'

import Styles from './styles/PickerDateTextInput.module.css';


class PickerDateTextInput extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      type: this.props.type,
      value: '',
      datePickerVisable:false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

    handleChange(event) {
      console.log('In Handle Change');

      this.props.handleTextInput(this.state.type, event.target.value)
      this.setState({value: event.target.value});


    }


    handleSubmit(event) {
      event.preventDefault();
      var dateMoment = new Date(this.state.value);
      dateMoment = moment(dateMoment);

      this.props.onSubmit(this.state.type, dateMoment);
    }




    render () {

      var value;

      if (this.state.value.length > 0) {
        value = this.state.value;
      } else if (this.props.value !== null) {
        value = this.props.value.format('MM/DD/YY');
      } else {
        value = ''
      }

      console.log(`date Value ${value}`)

      return (
      <div className={Styles['check-out']}>
        <div className={Styles['date-label']}>Check Out</div>

        <div className={Styles['date-value']}>
          <form onSubmit={this.handleSubmit} ref="dateimput">

            <label>
              <input className={Styles["date-imput-field"]} id={this.state.type}  type="text" placeholder='MM/DD/YYYY' onChange={this.handleChange} value={value} />
            </label>
        </form >

      </div>
      </div>
        )
      }
 }

 export default PickerDateTextInput;