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
      <div>
        <div >
        <LogdingHeader />
        <LodgingDetails />
        <LodgingFeatures />
        <LodgingDescription />
        </div>
        <div >
        <Booking />
        </div>
      </div>
    )
  }
}

export default App;
