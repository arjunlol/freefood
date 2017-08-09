import React, { Component } from 'react';
import { CollapsibleItem } from 'react-materialize'

class Pizza extends Component{

  render() {
    return (
      <CollapsibleItem header={this.props.pizza.name} icon='local_pizza'>
        PIZZA GET YOUR PIZZA
      </CollapsibleItem>
    )
  }
};

export default Pizza