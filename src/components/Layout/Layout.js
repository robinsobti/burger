import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Burger from '../Burger/Burger';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

const layout = props => (
    <Aux>
    <div>Toolbar, Sidebar, side-drawer</div>
    <BurgerBuilder></BurgerBuilder>
    {/* <main className={classes.Content}> */}
    {/* {props.children} */}
    {/* </main> */}
    </Aux>
);

export default layout;