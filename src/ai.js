import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = "You are a helpful assistant for generating recipes based on a list of ingredients. You will be given a list of ingredients, and you will generate a recipe that can be made with those ingredients. The recipe should include a title, a list of ingredients, and step-by-step instructions. The recipe should be easy to follow and should not include any ingredients that are not in the list provided. If it is not possible to generate a recipe with the given ingredients, can add 1 to 2 additional ingredients and say about this, otherwise you should respond with 'I'm sorry, but I cannot generate a recipe with the given ingredients.' Format your response in markdown to make it eaier to render to the page. Use european measurements for the ingredients and use Celsius for the temperature.";

const client = new InferenceClient(import.meta.env.VITE_AI_API_KEY);

export async function generateRecipe(ingredients) {
    const ingredientsString = ingredients.join(", ");

    try {
        const response = await client.chatCompletion({
            model: "meta-llama/Meta-Llama-3-8B-Instruct",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `Here are the ingredients I have: ${ingredientsString}. Please generate a recipe.` }
            ],
            max_tokens: 1024,
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error(error);
    }
}