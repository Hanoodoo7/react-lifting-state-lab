// src/components/IngredientList.jsx
import Ingredient from "./Ingredient";
  const IngredientList = (props) => {
    const { ingredient, onAdd } =props
    return (
      <div>
        <h2>Avilable Ingredients</h2>
        <ul>
          {ingredient.map((item , index) => (
            <Ingredient
            key={index}
            ingredient={item}
            onClick={() => onAdd(item)}
            action="add"
            /> 
          ))}
        </ul>
      </div>
    );
  }

export default IngredientList;