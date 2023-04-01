import React, { useState } from "react";
import Search from "../../components/search";
import RecipeItem from "../../components/recipe-item";

import "./style.css";

const Homepage = () => {
  //loaading state
  const [loadingState, setLoadingState] = useState(false);
  //recipe
  const [recipe, setRecipe] = useState([]);
  //favorite state
  const [favorites,setFavorites]=useState("")

  //passing data from child to parent
  const getDataFromSearch = (getData) => {
    console.log(getData);

    //calling the api
    async function getRecipes() {
      const apiResponse = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=dcaa266771354af8b6ed01360743c687&query=${getData}`
      );
      const result = await apiResponse.json();
      setLoadingState(true);

      const { results } = result;
      //after getting result from api
      if (results && results.length > 0) {
        setLoadingState(false);
        setRecipe(results);
      }
      console.log(result);
    }
    getRecipes();
  };

  // adding to favorites 
  const addTofavorites = (getCurrRecipeItem) => {
    let cpyFavorites=[...favorites]
    const index=cpyFavorites.findIndex(item=>item.id===getCurrRecipeItem.id)
    console.log(index);
    if(index===-1){
      cpyFavorites.push(getCurrRecipeItem);
      setFavorites(cpyFavorites);
      //save the favourites in loacla storage
      localStorage.setItem('favorites',JSON.stringify(cpyFavorites))
    }else{
      alert("Item is already present in Favotites")
    }
  };

  return (
    <div className="Homepage">
      <Search getDataFromSearch={getDataFromSearch} />

      {/* show loading state */}
      {loadingState && <div className="loading"> Loading 🔃</div>}
      {/* map through all the recipes */}
      <div className="items">
        {recipe && recipe.length > 0
          ? recipe.map((item) => (
              <RecipeItem
                addTofavorites={()=>addTofavorites(item)}
                id={item.id}
                image={item.image}
                title={item.title}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Homepage;
