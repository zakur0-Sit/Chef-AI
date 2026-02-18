export default function IngredientsList(props){

    function renderIngredients() {
        return props.ingredients.map((ingredient,key) =>
            <li key={key} className="border border-gray-800 bg-gray-100 p-1 rounded w-2/5 text-center">{ingredient}</li>
        )
    }
    
    return(
        <section>
            <h2 className="text-2xl font-bold mt-10 ml-8">Ingredients on hand:</h2>
            <ul className="flex flex-col items-center justify-center gap-4 mt-10">
                {renderIngredients()}
            </ul>

            {props.ingredients.length > 3 ?  <div className="flex  items-center justify-around my-10 mx-8 p-10 gap-4 bg-[#edece7] rounded-lg sticky bottom-4">
                <div>
                    <h3 className="my-3 text-lg font-semibold">Ready for a recipe?</h3>
                    <p>Generate a recipe for your list of ingredients.</p>
                </div>
                <button onClick={props.handleGetRecipe} className="bg-[#c1624f] text-white rounded-md px-4 py-2 cursor-pointer">Get a recipe</button>
            </div> : null}
            
        </section>
    )
}