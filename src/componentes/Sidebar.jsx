const Sidebar = ({recipeQueue}) => {
  return (
    <div className="md:w-1/3">
      <h1>Want To Cook : {recipeQueue.length}</h1>
    </div>
  );
};

export default Sidebar;
