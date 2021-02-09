  

import Ingredient from './Ingredient'


function BurgerStack(props) {
    
        // call .map on our passed props array
        // console.log('!!!!!' ,  props.burgerIngredients.burgerIngredients[0])
        let burgerIngredients = props.burgerIngredients.map((item, index) => (
            <Ingredient ingredient={item.name} color={item.color} key={`keyB${index}`} />
        ))

        return (
            <ul>
                {burgerIngredients.reverse()}
            </ul>
        )
    }


export default BurgerStack