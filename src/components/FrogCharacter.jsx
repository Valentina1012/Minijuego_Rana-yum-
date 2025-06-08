import '../styles/frogCharacter.css'
import { frogHungry } from '../img/index'

export function FrogCharacter() {

    return <div className='rana-section' style={{display: 'flex'}}>
              <img id='img-rana' className='img-rana' src={frogHungry} alt="dibujo de una rana de frente" />
            </div>
}
