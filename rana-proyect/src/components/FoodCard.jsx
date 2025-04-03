import '../styles/foodCard.css'

export function FoodCard({ imgName, imgFood, type, handleEated, id}) {


    return <div className='food-card' id={id}>
            <h3 className='food-title'>{imgName}</h3>
            <img onClick={handleEated}  className="img-food" src={`${imgFood}`} alt={`Comida ${type}`} width={200}/>
            <span className="food-type">{type}</span>
        </div>

}