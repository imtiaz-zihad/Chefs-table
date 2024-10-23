const Sidebar = ({ recipeQueue, handleRemove, preparedRecipe,calculateTimeAndCalories, totalCalories, totalTime }) => {
  return (
    <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
      {/* Want to cook */}
      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto mt-3 pb-4 font-semibold text-2xl text-gray-800 text-center">
          Want to cook: {recipeQueue.length}
        </h2>
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <button
                  onClick={() => {
                    
                  
                    handleRemove(recipe.recipe_id)
                    calculateTimeAndCalories(recipe.preparing_time,recipe.calories)
                  
                  }}
                  className="btn bg-green-400  mt-5 px-2 py-1 m-2  rounded-3xl text-black border-none"
                >
                  Preparing
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Currently cook */}
      <div className="overflow-x-auto mt-8">
        <h2 className="border-b-2 mx-auto mt-3 pb-4 font-semibold text-2xl text-gray-800 text-center">
          Currently Cooking: {preparedRecipe.length}
        </h2>
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              
            </tr>
          </thead>
          <tbody className="border-b-2">
            {preparedRecipe.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                
              </tr>
              
            ))}
            <tr>
            <th>{}</th>
                <td></td>
                <td>Total time ={totalTime}</td>
                <td>Total Calories={totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
