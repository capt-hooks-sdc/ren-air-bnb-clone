import React from 'react';
import ReactDOM from 'react-dom';

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
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state.type, this.state.value);
    }




    render () {

      return (
      <div className={Styles['check-out']}>
        <div className={Styles['date-label']}>Check Out</div>
        <div className={Styles['date-value']}>01/30/2021</div>
      </div>
        )
      }
 }

 export default PickerDateTextInput;