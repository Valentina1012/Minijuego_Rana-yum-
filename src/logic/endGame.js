import { frogVeryHappy } from '../img'

export default function EndGame(frogHunger) {
    let divEndGame = document.getElementById("endGame")
    let imgRana = document.getElementById("img-rana")
    let foodSection = document.getElementById('foodList-container')

    let timeoutID3 = window.setTimeout(()=> {
        foodSection.style.display = 'none'
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
