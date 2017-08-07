import React, { Component } from 'react';
import logo from './logo.svg';
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
      this.setState({lat:crd.latitude,
        lon:crd.longitude});
      fetch(`https://floating-castle-83222.herokuapp.com/food/${crd.latitude}/${crd.longitude}`, {credentials: 'include', mode: 'cors', 'Access-Control-Allow-Credentials': true })
        .then((pizzas) => {
          this.setState({pizzas})
        })
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success.bind(this), error, options)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <PizzaList pizzas={this.state.pizzas}/>
      </div>
    );
  }
}

export default App;
