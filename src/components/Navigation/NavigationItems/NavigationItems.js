import React from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        {/* <NavigationItem link="/contact" exact>Contact</NavigationItem> */}
    </ul>
);

export default NavigationItems;