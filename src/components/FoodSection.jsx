import "../styles/foodSection.css"
import { FoodCard } from './FoodCard.jsx'
import { get } from '../services/get.js'
import { useEffect, useState } from "react"

export function FoodSection({ handleEated }) {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    get()
    .then(d => {
      setFoods(d)})
  }, [])

    return <div>
              {foods.length == 0 && <p>Cargando...</p>}
              <ul id='foods-list' className="food-section">
                
                {
                  foods.map((food) => {
                    return <FoodCard key={food.id} id={food.id} imgName={food.imgName} imgFood= {food.imgFood} type={food.type} isYummy={food.isYummy} handleEated={handleEated} />
                  })
                }
              </ul>    
            <h2 id="empty-text">No hay mas comida</h2>
          </div>
}