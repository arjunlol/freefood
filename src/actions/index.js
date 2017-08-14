let nextFoodId = 0
export const addFood = text => {
  return {
    type: 'ADD_FOOD',
    id: nextFoodId++,
    text
  }
}