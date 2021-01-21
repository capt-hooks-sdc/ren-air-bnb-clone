import React from 'react';

import LogdingHeader from './LogdingHeader.jsx';
import LodgingDetails from './LodgingDetails.jsx';
import LodgingFeatures from './LodgingFeatures.jsx';
import LodgingDescription from './LodgingDescription.jsx';

import Booking from './Booking.jsx';


import Styles from './App.module.css';




class App extends React.Component {
  constructor () {
    super()
  }

  render() {
    return (
      <div id={Styles['page-layout']}>
        <div id={Styles['lodging-dis-zone']}>
        <LogdingHeader />
        <LodgingDetails />
        <LodgingFeatures />
        <LodgingDescription />
        </div>
        <div className={Styles['right-panel']}>
          <div id={Styles['booking-zone']}>
          <Booking />
          </div>
        </div>


      </div>
    )
  }
}

export default App;
