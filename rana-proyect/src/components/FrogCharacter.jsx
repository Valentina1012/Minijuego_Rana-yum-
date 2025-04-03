import '../styles/frogCharacter.css'
import rana from '../img/frog-buddyv2.png'


export function FrogCharacter() {

    return <div className='rana-section' style={{display: 'flex'}}>
              <img id='img-rana' className='img-rana' src={rana} alt="dibujo de una rana de frente" width={500}/>
            </div>
}
