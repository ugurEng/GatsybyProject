import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/lastrecipes.css"

interface IProps {
  recipes: Array<{
    image: string
    description: string
    price: number|string
  }>
}

const LastRecipes = ({ recipes }: IProps) => {
  console.log(recipes)
  return (

    <div >  
   
   <div> 
   <h1 className="recipetext">Last Recipes</h1>
   </div>
    <div className="flex justify-center">
      {recipes.map(person => (
       <div className="flex">
           <div><img className="rounded-full" src={person.image}/></div>
           <div className="recipecard shadow-sm">
             <p>{person.description}</p>
             <div className="flex justify-between">
             <h6 className="mb-0">{person.price}</h6>
             <img className="rounded-full mb-0" src="https://i.ibb.co/KxD00SB/asd2.png" alt=""/>
            </div>
            </div>           
       </div>
        
      ))}
    </div>
  </div>
  )
}

export default LastRecipes
