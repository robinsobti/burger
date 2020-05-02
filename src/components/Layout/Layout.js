import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


const layout = props => (
    <Aux>
        <SideDrawer/>
        <Toolbar/>
    <BurgerBuilder className={classes.Content}></BurgerBuilder>
    {/* <main className={classes.Content}> */}
    {/* {props.children} */}
    {/* </main> */}
    </Aux>
);

export default layout;