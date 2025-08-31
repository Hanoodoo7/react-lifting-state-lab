const Ingredient = (props) =>{
    const { ingredient , onClick , action } = props

    return(
        <li
        style={{ backgroundColor: ingredient.color }}
        >
            <span>{ingredient.name}</span>
            <button onClick={onClick}>
                {action === "add" ? "+" : "X"}
            </button>
        </li>
    )
}

export default Ingredient