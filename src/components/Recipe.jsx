import Markdown from "react-markdown";

export default function Recipe(props){
    return(
        <section>
            <h2 className="text-2xl font-bold mt-10 ml-8">Your recipe:</h2>
            
            <div className="bg-[#edece7] rounded-lg p-10 mt-10 mx-8">
                <Markdown>{props.recipe}</Markdown>
            </div>
        </section>
    )
}