import React from "react";
import moment from 'moment'

import GuestTypePanel from './GuestTypePanel.jsx';
import Styles from './styles/GuestPanel.module.css';
import SVGZoo from '../SVGZoo.jsx';


class GuestPanel extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {

    if (this.props.guestVisable) {

      return (
        <span className={Styles['hidden-guest-containter']}>
        <div className={Styles['hidden-guest-div']}>

          <div className={Styles['guest-option']}>
            <div>
              <div className={Styles['guest-label']}>Adults</div>
              <div className={Styles['guest-desc']}>like an old person</div>
            </div>


            <div className={Styles['guest-type-change']}>
              <span className={Styles['guest-btn']}>
                <SVGZoo name='minus' />
              </span>

              <div className={Styles['guest-type-num']}>0</div>

              <div className={Styles['guest-btn']}>
              <SVGZoo name='plus' />
              </div>
            </div>

          </div>


          <div className={Styles['guest-option']}>
            <div>
              <div className={Styles['guest-label']}>Children</div>
              <div className={Styles['guest-desc']}>Ages 2-12</div>
            </div>


            <div className={Styles['guest-type-change']}>
              <span className={Styles['guest-btn']}>
              <SVGZoo name='minus' />
              </span>

              <div className={Styles['guest-type-num']}>0</div>

              <div className={Styles['guest-btn']}>
                <SVGZoo name='plus' />
              </div>
            </div>

          </div>


          <div className={Styles['guest-option']}>
            <div>
              <div className={Styles['guest-label']}>Infants</div>
              <div className={Styles['guest-desc']}>Under 2</div>
            </div>


            <div className={Styles['guest-type-change']}>
              <span className={Styles['guest-btn']}>
                <SVGZoo name='minus' />
              </span>

              <div className={Styles['guest-type-num']}>0</div>

              <div className={Styles['guest-btn']}>
                <SVGZoo name='plus' />
              </div>
            </div>

          </div>

          <div className={Styles['disclaimer']}>
            2 guests maximum. Infants don’t count toward the number of guests.
          </div>

          <div></div>
          <div className={Styles["hidden-close-button"]}>
            <button className={Styles["close-button"]}>Close</button>
          </div>


        </div>
      </span>

      )

    }
    else {
      return ('');

    }

  }

}

export default GuestPanel;

