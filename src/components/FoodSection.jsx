import "../styles/foodSection.css"
import {FoodCard}  from './index.js'
import { get } from '../services/get.js'
import { useEffect, useState } from "react"
import { loading } from '../img/index'

export default function FoodSection({ handleEated }) {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    get()
    .then(d => {
      setFoods(d)})
  }, [])

    return <div className="food-container" id="foodList-container">
              {foods.length == 0 && <div className="food-loading"><p>Cargando comidas</p><img src={loading} alt="gif rueda de carga"/></div>} 

                <ul className="food-section">
                  
                  {
                    foods.map((food) => {
                      return <FoodCard key={food.id} id={food.id} imgName={food.imgName} imgFood= {food.imgFood} type={food.type} isYummy={food.isYummy} handleEated={handleEated} />
                    })
                  }
                </ul>   
                <h2 id="empty-text">No hay mas comida</h2>
          </div>
}