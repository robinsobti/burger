import React from 'react';
import logoUrl from '../../assets/images/Logo.png';
import classes from './Logo.css';

const Logo = props => {
    return <div className={classes.Logo} style={{height: props.height}}>
            <img src={logoUrl} className={classes}></img>
        </div>
}

export default Logo;