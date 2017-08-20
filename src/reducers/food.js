//set default view of pizza nearby
const initialState = {
  filter: 'loading',
  beers: [],
  pizzas: []
}

const food = (state = initialState, action) => {
  switch(action.type) {
      case 'TOGGLE_FOOD':
        return {
          ...state,
          filter: action.filter
        }
      case 'UPDATE_BEER':
        return {
          ...state,
          beers: action.beers
        }
      case 'UPDATE_PIZZA':
        return {
          ...state,
          pizzas: action.pizzas
        }
      default:
        return state
  }
}

export default food