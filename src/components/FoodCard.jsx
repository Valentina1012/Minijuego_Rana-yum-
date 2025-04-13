import '../styles/foodCard.css'

export function FoodCard({ imgName, imgFood, type, handleEated, id, isYummy}) {


    return <div onClick={handleEated} className='food-card' id={id} data-isyummy={`${isYummy}`}>
            <h3 className='food-title'>{imgName}</h3>
            <img className="img-food" src={`${imgFood}`} alt={`Comida ${type}`}/>
            <span className="food-type">{type}</span>
        </div>

}