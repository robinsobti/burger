import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import classes from './BurgerBuilder.css';

const prices = {
    salad: 0.5,
    bacon: 1,
    cheese: 0.7,
    meat: 1.3
}

class BurgerBuilder extends Component {
state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 5,
        purchasable: false,
        purchasing: false
   }

   updatePurchasable(ingredients){
       const keys = Object.keys(ingredients);
       const sum = keys.map(key=>ingredients[key]).reduce((sum, el)=>sum+el, 0);
       this.setState({
           purchasable: sum>0
       });
   }

   orderNowHandler = () => {
       this.setState({purchasing: true});
   }

   addIngredient = (type) => {
        let quantity = this.state.ingredients[type] + 1;
        let newIngredients = {...this.state.ingredients};
        newIngredients[type] = quantity;
        let price = this.state.totalPrice + prices[type];
        this.updatePurchasable(newIngredients);
        this.setState({
            ingredients: newIngredients,
            totalPrice: price
        });
   }

   removeIngredient = (type) => {
    let quantity = this.state.ingredients[type] - 1;
    if(quantity<0){
        return;
    }
    let newIngredients = {...this.state.ingredients};
    newIngredients[type] = quantity;
    let price = this.state.totalPrice - prices[type];
    this.updatePurchasable(newIngredients);
    this.setState({
        ingredients: newIngredients,
        totalPrice: price
    });
  }

  backdropClickedHandler = () => {
        this.setState({
            purchasing: false
        });
  }

  orderClickedHandler = () => {
      alert('Order clicked!');
  }

    render() {
        const disabled = {...this.state.ingredients};
        for(let type in disabled){
            disabled[type] = disabled[type]<=0;
        }
        return (
            <Aux className={classes.BurgerBuilder}>
                <Burger ingredients = {this.state.ingredients}/>
                <Modal show={this.state.purchasing} backdropClicked={this.backdropClickedHandler} orderClicked={this.orderClickedHandler}>
                    <OrderSummary ingredients = {this.state.ingredients} price={this.state.totalPrice}> </OrderSummary>
                </Modal>
                <BuildControls ingredientAdded = {this.addIngredient} 
                ingredientRemoved = {this.removeIngredient} 
                price={this.state.totalPrice.toFixed(2)}
                disabled = {disabled}
                purchasable = {this.state.purchasable}
                orderNowClickHandler={this.orderNowHandler}/>
            </Aux>
        );

    }
}

export default BurgerBuilder;