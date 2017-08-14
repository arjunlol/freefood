const foods = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FOOD':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
      default:
        return state
  }
}

export default foods