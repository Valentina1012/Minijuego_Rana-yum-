import { useState } from 'react'
import './App.css'
import { FoodSection } from './components/FoodSection.jsx'
import { FrogCharacter } from './components/FrogCharacter.jsx'
import { RefreshButton } from './components/RefreshButton.jsx'
import froggySerious from './img/froggy-serious.png'
import frogEating1 from './img/froggy-proyectv2-eating0.png'
import frogEating2 from './img/froggy-proyectv2-eating.png'
import frogEating3 from './img/froggy-proyectv2-eating2.png'
import frogHappy from './img/froggy-proyect-happy.png'
import frogVeryHappy from './img/frog-veryHappy.png'
import marco from './img/yellow-frame.png'
import './styles/presentacion.css'



function App() {
  const [frogHunger, changeFrogHunger] = useState(4)
  let ranaImgs = [frogEating1, frogEating2, frogEating3, frogHappy]
  let numImg = 0

  const animationFrogEating = () => {
    let imgRana = document.getElementById("img-rana")
    let start = Date.now();

    let timer =  setInterval(function() {
      let timePassed = Date.now() - start;
      if (timePassed >= 3600) {
        clearInterval(timer)
        imgRana.setAttribute("src", froggySerious)
        return
      }

      if(numImg < 4) {
        numImg++
      } else {
        numImg = 0
      }
      
      imgRana.setAttribute("src", ranaImgs[numImg])
    }, 900)
  }

  const handleFrogEat = (e) => {
    let imgRana = document.getElementById("img-rana")
    e.target.closest('.food-card').remove()
    animationFrogEating()
    let timeoutID = window.setTimeout(() => {
      if (frogHunger > 1) {
        changeFrogHunger(levelOfHunger => levelOfHunger-1)
      } else if (frogHunger == 1) {
        changeFrogHunger(levelOfHunger => levelOfHunger-1)
        window.clearTimeout(timeoutID);
        document.getElementById('empty-text').style.display = 'block'
        imgRana.setAttribute("src", frogVeryHappy)
      }
    }, '5000')
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
        <p className='hunger-level'><span>Nivel de hambre: {frogHunger}</span></p>
        <div className='frame'><img src={marco} alt="Marco amarillo para el borde del juego" /></div>
      </div> 
      <div className='btn-section'><RefreshButton /></div>
      
    </>
  )
}

export default App
