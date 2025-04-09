import '../styles/frogCharacter.css'

export function FrogCharacter() {

    return <div className='rana-section' style={{display: 'flex'}}>
              <img id='img-rana' className='img-rana' src="https://i.postimg.cc/xCqNQ3YL/frog-buddyv2.png" alt="dibujo de una rana de frente" width={500}/>
              <p id='no-eating'><strong>¡Cof-cof!</strong> No puedo comer más de una comida al mismo tiempo</p>
            </div>
}
