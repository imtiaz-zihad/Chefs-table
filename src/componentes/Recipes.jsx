import { useEffect, useState } from "react";

const Recipes = ({addRecipeQueue}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);



  return (
    <div className="md:w-2/3 ">
      <div className=" rounded-lg mt-11  grid grid-cols-1 lg:grid-cols-2  gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.recipe_id} className="card bg-base-100  border-2 p-4">
            <figure>
              <img
                className="rounded-lg md:h-52 w-full"
                src={recipe.recipe_image}
                alt={recipe.name || "Recipe Image"}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{recipe.recipe_name}</h2>
              <p className="text-gray-400">{recipe.short_description || "Recipe Description"}</p>
              <h3 className="text-xl">Ingredients: {recipe.ingredients.length}</h3>
             <ul className="ml-8">
                {recipe.ingredients.map((item,idx) => <li className="list-disc text-gray-600" key={idx}>{item}</li>)}
             </ul>
             <div className="flex gap-4">
                <div className="flex gap-2">
                    <p><i className="fa-regular fa-clock"></i></p>
                    <h3>{recipe.preparing_time} minutes</h3>
                </div>
                <div className="flex gap-2">
                    <p><i className="fa-solid fa-fire"></i></p>
                    <h3>{recipe.calories} calories</h3>
                </div>
             </div>
              <div className="w-3/5">
                <button
                onClick={() => addRecipeQueue(recipe)}
                className="btn bg-green-400  mt-5  px-8 rounded-3xl text-black border-none">Want to Cook</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
