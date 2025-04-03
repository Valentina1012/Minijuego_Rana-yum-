import "../styles/foodSection.css"
import { FoodCard } from './FoodCard.jsx'
import flan from '../img/flan.png'
import tacos from '../img/tacos.png'
import pizza from '../img/pizza.png'
import ensalada from '../img/ensalada.png'


export function FoodSection({ handleEated }) {

    return <div>
            <div className='food-section'>
              <FoodCard id='card-1' imgName="Flan" imgFood= {flan} type="Dulce" handleEated={handleEated} />
              <FoodCard id='card-2' imgName="Tacos" imgFood= {tacos} type="Picante" handleEated={handleEated} />
              <FoodCard id='card-3' imgName="Pizza" imgFood= {pizza} type="Salado" handleEated={handleEated} />
              <FoodCard id='card-4' imgName="Ensalada" imgFood= {ensalada} type="Agrio" handleEated={handleEated} />
            </div>
            <h2 id="empty-text">No hay mas comida</h2>
          </div>
}