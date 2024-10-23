import { useState } from "react";
import Banner from "./componentes/Banner";
import Header from "./componentes/Header";
import OurRecipe from "./componentes/OurRecipe";
import Recipes from "./componentes/Recipes";
import Sidebar from "./componentes/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPrepareRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addRecipeQueue = (recipe) => {
    const isExists = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );

    if (!isExists) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Recipe already added in the queue");
    }
  };
  const handleRemove = (id) => {
    const deletedRecipes = recipeQueue.find(
      (recipe) => recipe.recipe_id === id
    );


    const UpdatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(UpdatedQueue);
    setPrepareRecipe([...preparedRecipe, deletedRecipes]);
  };

  const calculateTimeAndCalories = (time, calorie) =>{
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calorie)
  }

  return (
    <div>
      <div className="text-center">
        <Header></Header>
        <Banner></Banner>
        <OurRecipe></OurRecipe>
      </div>

      {/* Recipes Card Section  */}
      <section className="flex flex-col md:flex-row gap-6  max-w-7xl mx-auto">
        {/* Card Section */}
        <Recipes addRecipeQueue={addRecipeQueue}></Recipes>
        {/* Side Bar */}
        <Sidebar
        totalCalories={totalCalories}
        totalTime={totalTime}
        calculateTimeAndCalories={calculateTimeAndCalories}
          handleRemove={handleRemove}
          recipeQueue={recipeQueue}
          preparedRecipe={preparedRecipe}
        >
          {" "}
        </Sidebar>
      </section>
    </div>
  );
};

export default App;
