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
              <ul className="food-section">
                {foods.length == 0 && <p>Cargando...</p>}
                {
                  foods.map((food) => {
                    return <FoodCard key={food.id} id={food.id} imgName={food.imgName} imgFood= {food.imgFood} type={food.type} handleEated={handleEated} />
                  })
                }
              </ul>              
            <h2 id="empty-text">No hay mas comida</h2>
          </div>
}