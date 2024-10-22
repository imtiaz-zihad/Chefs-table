import { useState } from "react"
import Banner from "./componentes/Banner"
import Header from "./componentes/Header"
import OurRecipe from "./componentes/OurRecipe"
import Recipes from "./componentes/Recipes"
import Sidebar from "./componentes/Sidebar"

const App = () =>{

  const [recipeQueue, setRecipeQueue] = useState([]);

  const addRecipeQueue = (recipe) =>{

    const isExists = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)

    if (!isExists) {
      setRecipeQueue([...recipeQueue ,recipe])
    }else{
      alert('Recipe already added in the queue')
    }

   
  }
  console.log(recipeQueue);
  

  return <div>
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
      <Sidebar recipeQueue={recipeQueue}> </Sidebar>
    </section>

  </div>
}

export default App
