import React, { Component } from 'react';
import { CollapsibleItem, Row, Col, Divider } from 'react-materialize'
require('datejs');

class Pizza extends Component{

  render() {
    return (
      <CollapsibleItem header={this.props.pizza.name} icon='local_pizza'>
        <Row>
          <Col s={8}>
            <span dangerouslySetInnerHTML={{__html:this.props.pizza.description}}></span>
          </Col>
          <Col s={4}>
            {this._findDate(this.props.pizza.time)}
            <Divider/>
            {this.props.pizza.venue.address_1}
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

export default Pizza