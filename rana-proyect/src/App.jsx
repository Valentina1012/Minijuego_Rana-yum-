import { useState } from 'react'
import './App.css'
import { FoodSection } from './components/FoodSection.jsx'
import { FrogCharacter } from './components/FrogCharacter.jsx'
import rana from './img/frog-buddyv2.png'
import frogEating1 from './img/froggy-proyectv2-eating0.png'
import frogEating2 from './img/froggy-proyectv2-eating.png'
import frogEating3 from './img/froggy-proyectv2-eating2.png'
import frogHappy from './img/froggy-proyect-happy.png'
import frogVeryHappy from './img/frog-veryHappy.png'
import marco from './img/yellow-frame.png'
import './styles/presentacion.css'



function App() {
  const [frogHunger, changeFrogHunger] = useState(3)
  let ranaImgs = [frogEating1, frogEating2, frogEating3, frogHappy]
  let numImg = 0

  const animationFrogEating = () => {
    let imgRana = document.getElementById("img-rana")
    let start = Date.now();

    let timer =  setInterval(function() {
      let timePassed = Date.now() - start;
      if (timePassed >= 4000) {
        clearInterval(timer)
        return
      }

      if(numImg < 4) {
        numImg++
      } else {
        numImg = 0
      }
      
      imgRana.setAttribute("src", ranaImgs[numImg])
    }, 1000)
  }

  const handleFrogEat = (e) => {
    let imgRana = document.getElementById("img-rana")
    e.target.closest('.food-card').remove()
    animationFrogEating()
    setTimeout(() => {
      if (frogHunger == 3) {
        changeFrogHunger(levelOfHunger => levelOfHunger-1)
        imgRana.setAttribute("src", rana)
      } else if(frogHunger == 2) {
        changeFrogHunger(levelOfHunger => levelOfHunger-1)
        imgRana.setAttribute("src", rana)
      } else if (frogHunger == 1) {
        changeFrogHunger(levelOfHunger => levelOfHunger-1)
        imgRana.setAttribute("src", rana)
      } else {
        imgRana.setAttribute("src", frogVeryHappy)
      }
    }, '5000')
  }

  return (
    <>
      <div>
        <div className='frame'><img src={marco} alt="Marco amarillo para el borde del juego" /></div>
        <div className='presentacion'>
          <h3 className='indicacion'>Dale de comer a la rana</h3>
          <h1 className='principal title'>RANA</h1>
          <h2 className='secondary title'>Yum!</h2>
        </div>
        
        <FrogCharacter />
        <FoodSection handleEated={(e) => handleFrogEat(e)} />
      </div>
    </>
  )
}

export default App
