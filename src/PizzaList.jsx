import React, { Component } from 'react';

class PizzaList extends Component{

  render() {
    return (
      {this.props.pizzas.map(this._pizza)}
    )
  }

  _pizza = (pizza) => {
    return (<Pizza pizza={pizza}/>)
  }


};

export default PizzaList