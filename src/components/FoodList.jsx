import React, { Component } from 'react';
import Food from './Food.jsx';
import { Collapsible } from 'react-materialize';

class FoodList extends Component{

  render() {
    return (
      <Collapsible popout>
        {this.props.foods.map(this._food)}
      </Collapsible>
    )
  }

  _food = (food) => {
    return (<Food food={food}/>)
  }


};

export default FoodList