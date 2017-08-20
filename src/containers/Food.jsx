import React, { Component } from 'react';
import { CollapsibleItem, Row, Col, Divider } from 'react-materialize'
import Map from './Map.jsx';
require('datejs');

class Food extends Component{

  render() {
    return (
      <CollapsibleItem header={this.props.food.name} icon='local_pizza'>
        <Row>
          <Col s={8}>
            <span dangerouslySetInnerHTML={{__html:this.props.food.description}}></span>
          </Col>
          <Col s={4}>
            {this._findDate(this.props.food.time)}
            <Divider/>
            {this.props.food.venue.address_1}
            <Map/>
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