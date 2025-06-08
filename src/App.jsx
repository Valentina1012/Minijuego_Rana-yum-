import { useState, useEffect } from 'react'
import './App.css'
import { FoodSection } from './components/FoodSection.jsx'
import { FrogCharacter } from './components/FrogCharacter.jsx'
import { RefreshButton } from './components/RefreshButton.jsx'
import { frogEating1,  frogEating2, frogEating3, frogHappy, frogDisgust, frogVeryHappy } from './img/index'
import './styles/presentacion.css'


function App() {
  const [frogHunger, changeFrogHunger] = useState(4)
  const [finalEated, setFinalEated] = useState(false)
  let ranaImgs = [frogEating1, frogEating2, frogEating3]
  let numImg = 0
  const foodIsYummy = (food) => food.getAttribute('data-isyummy') == 'true'
  const foodsList = document.getElementsByClassName('food-section')
  const handleHunger = (food) => foodIsYummy(food) ? changeFrogHunger(frogHunger-1) : changeFrogHunger(frogHunger+1)



  useEffect(()=> {
    let divEndGame = document.getElementById("endGame")
    let imgRana = document.getElementById("img-rana")

    if(finalEated) {
      let timeoutID3 = window.setTimeout(()=> {
        if(frogHunger == 0) {
          divEndGame.textContent = '¡Ganaste! 😄✨'
          divEndGame.style.backgroundColor = '#50d1ee'
          imgRana.setAttribute("src", frogVeryHappy)
        } else{
          divEndGame.textContent = 'Perdiste el juego 😥'
          divEndGame.style.backgroundColor = '#ee5050'
        } 
        window.clearTimeout(timeoutID3)
      }, '3000')
    }
    
  }, [frogHunger, finalEated])


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
        setFinalEated(true)
        document.getElementById('empty-text').style.display = 'block'
      }
  }

  return (
    
    <>
      <div className='app-container'>
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
