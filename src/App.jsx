import { useState, useEffect } from 'react'
import './App.css'
import { FoodSection } from './components/FoodSection.jsx'
import { FrogCharacter } from './components/FrogCharacter.jsx'
import { RefreshButton } from './components/RefreshButton.jsx'
import frogEating1 from './img/froggy-proyectv2-eating0.png'
import frogEating2 from './img/froggy-proyectv2-eating.png'
import frogEating3 from './img/froggy-proyectv2-eating2.png'
import frogHappy from './img/froggy-proyect-happy.png'
import frogDisgust from './img/froggy-disgust.png'
import frogVeryHappy from './img/frog-veryHappy.png'
import './styles/presentacion.css'


function App() {
  const [frogHunger, changeFrogHunger] = useState(4)
  const [finalEated, setFinalEated] = useState(false)
  let ranaImgs = [frogEating1, frogEating2, frogEating3]
  let numImg = 0
  let animating = false
  const foodIsYummy = (food) => food.getAttribute('data-isyummy') == 'true'
  const foodsList = document.getElementsByClassName('food-section')
  const handleHunger = (food) => foodIsYummy(food) ? changeFrogHunger(frogHunger => frogHunger-1): changeFrogHunger(frogHunger => frogHunger+1)



  useEffect(()=> {
    let divEndGame = document.getElementById("endGame")
    let imgRana = document.getElementById("img-rana")

    if(finalEated) {
      let timeoutID3 = window.setTimeout(()=> {
        if(frogHunger == 0) {
          divEndGame.textContent = '¡Ganaste! 😄✨'
          imgRana.setAttribute("src", frogVeryHappy)
        } else {
          divEndGame.classList.remove('winStyle')
          divEndGame.classList.add('loseStyle')
          divEndGame.textContent = 'Perdiste el juego 😥'
        } 
        window.clearTimeout(timeoutID3)
      }, '2000')
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
          animating=false
          return
        }
        animating = true
        imgRana.setAttribute("src", ranaImgs[numImg])

        if(numImg < 3) {
          numImg++
        }
      }, 600)
  }




  const handleFrogEat = (e) => {
    if(animating) {
      document.getElementById('no-eating').style.display = 'block'
      let timeoutID1 = window.setTimeout(()=> {
        document.getElementById('no-eating').style.display = 'none'
        window.clearTimeout(timeoutID1)
      }, '2500')
      return  
    } else {
      const foodCard = e.target.closest('.food-card')
      foodCard.remove()
      animationFrogEating(foodCard)
      let timeoutID2 = window.setTimeout(() => {
        if (foodsList[0].childNodes.length >= 1) {
          handleHunger(foodCard)
          window.clearTimeout(timeoutID2);
        } else {
          setFinalEated(true)
          handleHunger(foodCard)
          document.getElementById('empty-text').style.display = 'block'
        }
      }, '4000')
    }
  }
  return (
    
    <>
      <div className='app-container'>
        <div className='presentacion'>
          <h3 className='indicacion'>Dale de comer a la rana</h3>
          <h1 className='principal title'>RANA</h1>
          <h2 className='secondary title'>Yum!</h2>
        </div>
        
        <FrogCharacter />
        <FoodSection handleEated={(e) => handleFrogEat(e)} />
        <div className="winStyle" id="endGame"></div>
        <p className='hunger-level'><span>Nivel de hambre: {frogHunger}</span></p>
        <div className='frame'><img src="https://i.postimg.cc/7PdQTqsy/yellow-frame.png" alt="Marco amarillo para el borde del juego" /></div>
       
      <div className='btn-section'><RefreshButton /></div>
      </div>
    </>
  )
}

export default App
