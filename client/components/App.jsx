import React from 'react';

import LogdingHeader from './LogdingHeader.jsx';
import LodgingDetails from './LodgingDetails.jsx';
import LodgingFeatures from './LodgingFeatures.jsx';
import LodgingDescription from './LodgingDescription.jsx';

import Booking from './Booking.jsx';





class App extends React.Component {
  constructor () {
    super()
  }

  render() {
    return (
      <div id='page-layout'>
        <div id='lodging-dis-zone'>
        <LogdingHeader />
        <LodgingDetails />
        <LodgingFeatures />
        <LodgingDescription />
        </div>
        <div id='booking-zone'>
        <Booking />
        </div>
      </div>
    )
  }
}

export default App;
