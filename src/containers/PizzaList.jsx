import React, { Component } from 'react';
import Pizza from './Pizza.jsx';
import { Collapsible } from 'react-materialize';

class PizzaList extends Component{

  render() {
    return (
      <Collapsible popout>
        {this.props.pizzas.map(this._pizza)}
      </Collapsible>
    )
  }

  _pizza = (pizza) => {
    return (<Pizza pizza={pizza}/>)
  }


};

export default PizzaList