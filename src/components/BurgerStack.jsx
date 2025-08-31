// `src/components/BurgerStack.jsx`
import Ingredient from "./Ingredient";
const BurgerStack = (props) => {
    const { stack, onRemove } = props
    return (

        <div>
            <h2>Your Burger</h2>
            {stack.length === 0 ? ( <p> NO Burger </p> ) :(
            <ul>
                    {
                        stack.map((item, index) => (
                            <Ingredient
                                key={index}
                                ingredient={item}
                                onClick={() => onRemove(index)}
                                action="remove"
                            />
                        ))
                    }
            </ul>
            )}
        </div>
    )
};

export default BurgerStack;