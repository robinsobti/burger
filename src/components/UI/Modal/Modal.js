import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

const Modal = props => {
    return (
    <Aux>
        <Backdrop show={props.show} backdropClicked={props.backdropClicked}></Backdrop>
        <div className={classes.Modal} style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>
                {props.children}
                <Button type="Success" clicked={props.orderClicked}>Order</Button>
                <Button type="Danger" clicked={props.backdropClicked}>Cancel</Button>
            </div>
            </Aux>
            );
};

export default Modal;