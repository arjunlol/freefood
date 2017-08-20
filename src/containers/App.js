import React, { Component } from 'react';
import FoodList from './FoodList.jsx';
import '../styles/App.css';
import { connect } from 'react-redux';
import * as Actions from '../actions/index';
import { bindActionCreators } from 'redux';

class App extends Component {

  componentWillMount() {
    let lat = 43.6401590;
    let lon = -79.3776580;

    fetch(`https://floating-castle-83222.herokuapp.com/food/pizza/${lat}/${lon}`, {credentials: 'include', mode: 'cors', 'Access-Control-Allow-Credentials': true })
      .then((response) => response.json())
      .then((pizzas) => {
        this.props.actions.updatePizza(pizzas)
      })

    fetch(`https://floating-castle-83222.herokuapp.com/food/beer/${lat}/${lon}`, {credentials: 'include', mode: 'cors', 'Access-Control-Allow-Credentials': true })
      .then((response) => response.json())
      .then((beers) => {
        this.props.actions.updateBeer(beers)
      })

    console.log(this.props)
  }

  render() {
    return (
        <div>
          <div>
            <button onClick={() => this.props.actions.setFoodFilter('pizza')}>PIZZA</button>
            <button onClick={() => this.props.actions.setFoodFilter('beer')}>BEER</button>
          </div>
          <div>
            <FoodList foods={this.props.filter === 'pizza' ? this.props.pizzas: this.props.beers}/>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filter: state.food.filter,
    pizzas: state.food.pizzas,
    beers: state.food.beers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
