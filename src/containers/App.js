import React, { Component } from 'react';
import logo from './logo.svg';
import PizzaList from './PizzaList.jsx';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
      lat: null,
      lon: null,
    }
  }

  componentWillMount() {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      let crd = pos.coords;
      fetch(`https://floating-castle-83222.herokuapp.com/food/${crd.latitude}/${crd.longitude}`, {credentials: 'include', mode: 'cors', 'Access-Control-Allow-Credentials': true })
        .then((response) => response.json())
        .then((pizzas) => {
          this.setState({pizzas:pizzas})
        })
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success.bind(this), error, options)
  }

  render() {
    return (
        <div>
          <PizzaList pizzas={this.state.pizzas}/>
        </div>
    );
  }
}

export default App;
