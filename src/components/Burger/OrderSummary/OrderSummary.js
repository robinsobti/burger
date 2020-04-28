import React from 'react';
import Aux from '../../../hoc/Aux';

const OrderSummary = props => {
    const ingredients = Object.keys(props.ingredients)
    .map(igkey=><li style={{textTransform: "capitalize"}} key={igkey}>{igkey}: {props.ingredients[igkey]}</li>);
    return (
        <Aux>
            <p>Your burger is having the following ingredients:</p>
            <ul>
            {ingredients}
            <br/>
                <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            </ul>
        </Aux>);
    };

export default OrderSummary;