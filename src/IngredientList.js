
import Ingredient from './Ingredient'

function IngredientList(props) {
  
        // take array of props and use .map
        let ingredientComponents = props.ingredients.map((item, index) => (
            <li onClick={(e) => props.addToBurger(e)}>
                <Ingredient addToBurger={props.addToBurger} ingredient={item.name} color={item.color} key={`key${index}`} />
            </li>
            ))

        return (
            <ul>
                {ingredientComponents}
            </ul>
        )
    }


export default IngredientList