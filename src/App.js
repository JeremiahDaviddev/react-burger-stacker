import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
import Ingredient from './Ingredient'

const ingredientsStart = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]


function App() {
  const [ingredients, setIngredients] = useState(ingredientsStart)
  const [burgerIngredients, setBurgerIngredients] = useState([])
  console.log(ingredients)


  const addToBurger = (e) => {
    let currentBurger = burgerIngredients
    console.log('111' + currentBurger)
    let newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
    console.log(newIngredient)


    // currentBurger.push(newIngredient)


    setBurgerIngredients([...burgerIngredients, newIngredient])
  }

  const clearBurger = (e) => {
    setBurgerIngredients([])
  }

  
    return (
      <div style={{display: "flex"}}>
        <IngredientList ingredients={ingredients} addToBurger={addToBurger} />
        <BurgerPane burgerIngredients={burgerIngredients} clearBurger={clearBurger} />
      </div>
    )
  }


export default App