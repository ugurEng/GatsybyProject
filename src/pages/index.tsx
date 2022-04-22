import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/gatsby-browser"
import Layout from "../components/layout"
import LastRecipes from "../components/lastrecipes"
import Seo from "../components/seo"
import 'flowbite';
import { useState, } from 'react';


interface IState{
  image: string
  description: string,
  price:number|string
}


function IndexPage() {

const [recipes, setrecipes] = useState<IState[]>([
  {
    image: 'https://i.ibb.co/SvkwTdw/asd.png',
    description: 'Portobello Baked Eggs with avocado&bread',
    price:"£8"
  },
  {
    image: 'https://i.ibb.co/SvkwTdw/asd.png',
    description: 'Summery salmon beetroow&spicy mix', 
    price:"£15"
  },
  {
    image: 'https://i.ibb.co/SvkwTdw/asd.png' ,
    description: 'Backed Avocado Egg with herbs',
    price:"£8"
  }
])
return (
  <Layout>
    <Seo title="Home" />
    <div>
      <div className="row asd">
        <div className="aboutwidh about-content-backround">
          <div className="about-content">
            <div className="text1">
              <h4 className=" text-4xl font-bold">You deserve better</h4>
            </div>
            <div className="text2">
              <p className="text-2xl ">Consider this a</p>
              <p className="text-2xl ">taste information</p>
            </div>
            <button className="bg-green-400 text-black font-bold py-2 px-4 rounded">
              {" "}
              Learn More
            </button>
          </div>
        </div>
        <div className="aboutimage col-lg-6">
          <div className="about-img">
            <img
              src="https://i.ibb.co/rvQQWLS/tailwind.png"
              className="img-fluid w-100 rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <LastRecipes recipes={recipes} />
  </Layout>
)
}
export default IndexPage
