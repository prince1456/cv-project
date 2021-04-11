import React from 'react'
import { IoChevronBack } from 'react-icons/io5';

import CheckoutPage from '../../components/CheckoutPage/CheckoutPage'
import DownloadPage from '../../components/DownloadPage/DownloadPage'
import Button from '../../components/UI/Button/Button'
import Aux from '../../hoc/_Aux/_Aux'
import classes from './Checkout.module.scss'

const Checkout = (props) => (
  <Aux>
    <div className={classes.Checkout}>
      <div className={classes.Wrapper}>
        <DownloadPage />
        <CheckoutPage />
      </div>
      <div style={{ width: '10%' }}>
        <Button btnType="Primary" clicked={() => props.history.goBack()}><IoChevronBack /> Back</Button>
      </div>
    </div>
  </Aux>
)

export default Checkout