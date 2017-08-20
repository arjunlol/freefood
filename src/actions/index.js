export const updatePizza = (pizzas) => {
  return {
    type: 'UPDATE_PIZZA',
    pizzas
  }
}

export const updateBeer = (beers) => {
  return {
    type: 'UPDATE_BEER',
    beers
  }
}

export const setFoodFilter = (filter) => {
  return {
    type: 'TOGGLE_FOOD',
    filter
  }
}