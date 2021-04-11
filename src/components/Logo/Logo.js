import React from 'react'

import cvvideoLogo from '../../assets/images/logo-black.png'
import classes from './Logo.module.scss'

const Logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }} onClick={props.clicked}>
    {/* <Link to="/" replace> */}
      <img src={cvvideoLogo} alt="PRO CV VIDEO" />
    {/* </Link> */}
  </div>
)

export default Logo