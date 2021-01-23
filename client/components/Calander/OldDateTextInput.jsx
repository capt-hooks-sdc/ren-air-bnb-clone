import React from 'react';
import ReactDOM from 'react-dom';

import Styles from './styles/DateTextInput.module.css';

class DateTextInput extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      type: this.props.type,
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      return (
        <form onSubmit={this.handleSubmit} ref="dateimput" onClick={() => {this.props.toggleCalanderVisable(true)}}>

          <label className={Styles.bookingLabel}>

            {this.state.type === 'checkIn-book_it' ? 'CHECK-IN' : 'CHECKOUT'}
            <input className={Styles["date-imput"]} id={this.state.type} placeholder="Add date" type="text" placeholder='MM/DD/YYYY' onChange={this.handleChange} value={this.state.value.length > 0 ? this.state.value : this.props.value} />
          </label>
        </form >
        )
      }
 }

 export default DateTextInput;