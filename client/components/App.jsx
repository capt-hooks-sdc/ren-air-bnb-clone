import React from 'react';

import LodgingDetails from './LodgingDetails.jsx';
import LodgingDescription from './LodgingDescription.jsx';

import Booking from './Booking.jsx';


import Styles from './topStyles/App.module.css';




class App extends React.Component {
  constructor () {
    super()
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
        <Booking />
        </div>
        <div>
        <LodgingDescription />
        </div>

      </div>

    )
  }
}

export default App;
