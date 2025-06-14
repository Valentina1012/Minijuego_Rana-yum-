import { useState, useEffect } from 'react';
import '../styles/counter.css'
import endGame from '../logic/endGame'

export default function Counter({ initialSeconds, hunger }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);


    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const secsLeft = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${secsLeft.toString().padStart(2, '0')}`;
  };

  return (
    <div className='counter'>
      <p className='countdown'>Tiempo restante <span>{formatTime(seconds)}</span></p>
      {seconds <= 0 && 
        <>
          <p className='timeoff'>¡Se acabó el tiempo!</p>
          {endGame(hunger)}
        </>}
    </div>
  );
};
