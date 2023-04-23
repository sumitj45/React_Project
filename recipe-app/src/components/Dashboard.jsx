import { useState,useEffect } from 'react';
import React from 'react'
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function Dashboard() {

    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    
    // search for the recipe
    const searchRecipes = async () => {
      setIsLoading(true);
      const url = searchApi + query
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals);
      setIsLoading(false);
    };
  
    useEffect(() => {
      searchRecipes()
    }, []);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      searchRecipes();
    }
  
  return (
  


<div className="container" id='container'>
      <h2>Search Your Fav Food Recipes</h2>

      {/* passing props to searrchBar */}
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        />
      <div className="recipes" id='recipes'>
        {/* if met condition then map the  data and pass the perops to recipeCard comp */}
        {recipes ? recipes.map(recipe => (
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
             />
             )) : "No Result Found."}
      </div>
    </div>

  )
}

export default Dashboard