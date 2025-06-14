import { useState } from 'react'
import './App.css'
import { FrogCharacter, FoodSection, RefreshButton, Counter } from './components'
import { frogEating1,  frogEating2, frogEating3, frogHappy, frogDisgust } from './img/index'
import './styles/presentacion.css'


function App() {
  const [frogHunger, changeFrogHunger] = useState(4)
  let ranaImgs = [frogEating1, frogEating2, frogEating3]
  let numImg = 0
  const foodIsYummy = (food) => food.getAttribute('data-isyummy') == 'true'
  const foodsList = document.getElementsByClassName('food-section')
  const handleHunger = (food) => foodIsYummy(food) ? changeFrogHunger(frogHunger-1) : changeFrogHunger(frogHunger+1)


  const changeHumor = (img, food) => {
    if(foodIsYummy(food)) {
      img.setAttribute("src", frogHappy)
    } else {
      img.setAttribute("src", frogDisgust)
    }
  }

  const animationFrogEating = (food) => {
    let imgRana = document.getElementById("img-rana")
    let start = Date.now();

      let timer =  setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed > 2000) {
          clearInterval(timer)
          changeHumor(imgRana, food)
          numImg = 0
          return
        }
        imgRana.setAttribute("src", ranaImgs[numImg])

        if(numImg < 3) {
          numImg++
        }
      }, 600)
  }


  const handleFrogEat = (e) => {
      const foodCard = e.target.closest('.food-card')
      foodCard.remove()
      handleHunger(foodCard)
      animationFrogEating(foodCard)

      if(foodsList[0].childNodes.length < 1) {
        document.getElementById('empty-text').style.display = 'block'
      }
  }

  return (
    
    <>
      <div className='app-container'>
        <Counter initialSeconds={60} hunger={frogHunger}/>
        <div className='presentacion'>
          <h3 className='indicacion'>Dale de comer a la rana</h3>
          <div className='title'><h1 className='principal title'>RANA</h1>
          <h2 className='secondary title'>Yum!</h2></div>
        </div>
        
        <FrogCharacter />
        <FoodSection handleEated={(e) => handleFrogEat(e)} />
        <div id="endGame"></div>
        <p className='hunger-level'><span>Nivel de hambre: {frogHunger}</span></p>
       
      <div className='btn-section'><RefreshButton /></div>
      </div>
    </>
  )
}

export default App
