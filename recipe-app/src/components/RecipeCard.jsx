import React from "react";

const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
       
<div className="card" id='card'>
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
                id='card-image'
            />
            <div className="card-body" id='card-body'>
                <span className="category" id='category'>{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="/">Instructions</a>
            </div>
        </div>
        
        
    )
};

export default RecipeCard;