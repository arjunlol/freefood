import React, { Component } from 'react';
import FoodList from '../components/FoodList.jsx';
import '../styles/App.css';
import { connect } from 'react-redux';
import * as Actions from '../actions/index';
import { bindActionCreators } from 'redux';
import { Button, Icon, ProgressBar } from 'react-materialize';

class App extends Component {

  componentWillMount() {
    let lat = 43.6401590;
    let lon = -79.3776580;

    fetch(`https://floating-castle-83222.herokuapp.com/food/pizza/${lat}/${lon}`, {credentials: 'include', mode: 'cors', 'Access-Control-Allow-Credentials': true })
      .then((response) => response.json())
      .then((pizzas) => {
        this.props.actions.updatePizza(pizzas);
        //stay on loading filter until default pizza view loads
        this.props.actions.setFoodFilter('pizza');
      })

    fetch(`https://floating-castle-83222.herokuapp.com/food/beer/${lat}/${lon}`, {credentials: 'include', mode: 'cors', 'Access-Control-Allow-Credentials': true })
      .then((response) => response.json())
      .then((beers) => {
        this.props.actions.updateBeer(beers);
      })
  }

  render() {
    // if pizza list not fetched, display loading bar
    if(this.props.filter === 'loading') {
      return (
        <ProgressBar />
      );
    } else {
      return (
        <div>
            <Button onClick={() => this.props.actions.setFoodFilter('pizza')}>PIZZA <Icon left>local_pizza</Icon></Button>
            <Button onClick={() => this.props.actions.setFoodFilter('beer')}>BEER <Icon left>local_bar</Icon></Button>
          <div>
            <FoodList foods={this.props.filter === 'pizza' ? this.props.pizzas: this.props.beers}/>
          </div>
        </div>
      );
    }

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
