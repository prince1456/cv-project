import React from 'react'

import Aux from '../_Aux/_Aux'
import classes from './Layout.module.scss'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

const Layout = props => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
      {/* <footer>
        Copyright &copy; 2020
      </footer> */}
    </Aux>
  );
};

export default Layout;