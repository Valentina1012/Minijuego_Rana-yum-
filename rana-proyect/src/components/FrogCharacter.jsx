import '../styles/frogCharacter.css'
import ranaConHambre from '../img/frog-buddyv2.png'


export function FrogCharacter() {

    return <div className='rana-section' style={{display: 'flex'}}>
              <img id='img-rana' className='img-rana' src={ranaConHambre} alt="dibujo de una rana de frente" width={500}/>
            </div>
}
