import React from 'react';

import SVGZoo from './SVGZoo.jsx';
import Styles from './topStyles/Header.module.css';


function Header() {

  return(
  <div className={Styles['header-pandel']}>
    <img className={Styles['header-logo']} src = 'https://cdn.onlinewebfonts.com/svg/img_431018.png' width="26" height="26"/>
    <svg className={Styles['svg-box']} height="30" width="200">
      <text fontFamily='Roboto' fontSize='22px' x="0" y="15" fill="black">scarebnb</text>
    </svg>
  </div>)
 }

 export default Header;