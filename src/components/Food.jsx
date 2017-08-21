import React, { Component } from 'react';
import { CollapsibleItem, Row, Col, Divider } from 'react-materialize'
require('datejs');


class Food extends Component{

  render() {
    //change icon based on filter state (pizza or beer)
    let filter = this.props.filter === 'pizza' ? 'local_pizza' : 'local_bar';

    return (
      <CollapsibleItem header={this.props.food.name} icon={filter}>
        <Row>
          <Col s={8}>
            <span dangerouslySetInnerHTML={{__html:this.props.food.description}}></span>
          </Col>
          <Col s={4}>
            {this._findDate(this.props.food.time)}
            <Divider/>
            {this.props.food.venue.address_1}
          </Col>
        </Row>
      </CollapsibleItem>
    )
  }

  _findDate = (date) => {
    let d = new Date(date);
    return d.toLocaleString();
  }
};

export default Food