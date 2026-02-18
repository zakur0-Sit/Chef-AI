import { useState } from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { generateRecipe } from "../ai";

function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");

    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    async function handleGetRecipe(){
        const recipeMarkdown = await generateRecipe(ingredients);
        setRecipe(recipeMarkdown);
    }

    return (

        <main>
            <form action={handleSubmit} className="flex align-center justify-center gap-4 mt-10">
                <input name="ingredient" type="text" placeholder="e.g. oregano" className="border border-gray-300 rounded-md p-2 w-1/3"/>
                <button type="submit" className="bg-black text-white rounded-md px-6 cursor-pointer">+ Add ingredient</button>
            </form>

            <IngredientsList ingredients={ingredients} handleGetRecipe={handleGetRecipe} />

            {recipe && <Recipe recipe={recipe} />}

        </main> 
    )
}

export default Main;