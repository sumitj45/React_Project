import React from "react"
import './style.css'

const RecipeItem=(props)=>{
    const{id,image,title,addToFavorites}=props;

console.log(props,"item")
    return(
        <div key={id} className="recipe-item"> 
        <div className="">
            <img src={image} alt="img of recipe"/>
        </div>
        <p>{title}</p>

<button>Add to Favourite</button>
        </div>
    )
}

export default RecipeItem