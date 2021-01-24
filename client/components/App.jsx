import React from 'react';
import axios from 'axios';

import LodgingDetails from './LodgingDetails.jsx';
import LodgingDescription from './LodgingDescription.jsx';

import Booking from './Booking.jsx';


import Styles from './topStyles/App.module.css';




class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      oldPrice: 87,
      price: 0,
      cleaningFee: 30,
      serviceFee: 53,
      taxesFees: 64,
      hostName: ''
    }

    this.getLodgingData = this.getLodgingData.bind(this);
  }

  getLodgingData (id = 1000, cb) {

    let config = {
      method: 'get',
      url: 'lodge/?id=1000',
      headers: { }
    };

    axios(config)
    .then(function (response) {
      console.log('in then');
      cb(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  componentDidMount () {

    this.getLodgingData(1000, (data) => {
      console.log(data);
      this.setState({
        price: data[0].price,
        oldPrice:  87,
        cleaningFee:  30,
        serviceFee:  53,
        taxesFees:  64,
        hostName: data[0].name
      })
    });
  }

  render() {
    return (
      <div className={Styles['infomation']}>
        {/* Info */}

        <div className={Styles['info']}>
        <LodgingDetails />

        </div>

        {/* Booking */}

        <div className={Styles['booking']}>
        <Booking
          oldPrice ={this.state.oldPrice}
          price ={this.state.price}
          cleaningFee ={this.state.cleaningFee}
          serviceFee ={this.state.serviceFee}
          taxesFees ={this.state.taxesFees}
          hostName ={this.state.hostName}
          />
        </div>
        <div>
        {/* <LodgingDescription /> */}
        </div>

      </div>

    )
  }
}

export default App;
