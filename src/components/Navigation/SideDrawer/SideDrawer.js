import React from 'react';
import Logo from "../../Logo/Logo"
import classes from './SideDrawer.css';
import navigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = props => {
  
    return (
        <div className={classes.SideDrawer}>
            <Logo height="10%"/>
            <nav>
                <navigationItems/>
            </nav>
        </div>
    );
};

export default SideDrawer;