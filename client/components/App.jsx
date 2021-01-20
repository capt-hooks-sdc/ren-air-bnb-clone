import React from 'react';

import LogdingHeader from './LogdingHeader.jsx';
import LodgingDetails from './LodgingDetails.jsx';
import LodgingFeatures from './LodgingFeatures.jsx';
import LodgingDescription from './LodgingDescription.jsx';

import Booking from './Booking.jsx';


import styles from './masterLayout.css';



class App extends React.Component {
  constructor () {
    super()
  }

  render() {
    return (
      <div id={styles['page-layout']}>
        <div id={styles['lodging-dis-zone']}>
        <LogdingHeader />
        <LodgingDetails />
        <LodgingFeatures />
        <LodgingDescription />
        </div>
        <div className={styles['right-panel']}>
          <div id={styles['booking-zone']}>
          <Booking />
          </div>
        </div>


      </div>
    )
  }
}

export default App;
