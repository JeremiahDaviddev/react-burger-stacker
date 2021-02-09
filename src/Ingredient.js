

function Ingredient(props)  {
     {
        return (
            <li style={{backgroundColor: props.color}} key={props.key}>
                {props.ingredient}
            </li>
        )
    }
}

export default Ingredient