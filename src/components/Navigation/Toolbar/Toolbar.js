import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import classes from './Toolbar.module.scss'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Stepper from '../Stepper/Stepper'
import Aux from '../../../hoc/_Aux/_Aux'
import * as actions from '../../../store/actions/index'

const Toolbar = () => {
  let history = useHistory()
  const dispatch = useDispatch()

  const logoClickedHandler = () => {
    dispatch(actions.updateCurrentStep({ id: 'templateSelector'}))
    history.push("/")
  }

  return (
    <Aux>
      <header className={classes.Toolbar}>
        <div className={classes.Container}>
          <div className={classes.Logo}>
            <Logo clicked={logoClickedHandler} />
          </div>
          <div className={classes.Stepper}>
            <Stepper builderStep={1} totalBuilderSteps={1} />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </header>
    </Aux>
  )
}

export default Toolbar