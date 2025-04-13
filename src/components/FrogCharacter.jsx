import '../styles/frogCharacter.css'
import frogHungry from '../img/frog-buddyv2.png'

export function FrogCharacter() {

    return <div className='rana-section' style={{display: 'flex'}}>
              <img id='img-rana' className='img-rana' src={frogHungry} alt="dibujo de una rana de frente" />
              <p id='no-eating'><strong>¡Cof-cof!</strong> No puedo comer más de una comida al mismo tiempo</p>
            </div>
}
