import { useCallback, useEffect, useState } from 'react';

import './App.css';
import SecondHandDial from './components/SecondHandDial';

function App() {

  const [ time, setTime ] = useState( new Date() );
  const [ windowDimensions, setWindowDimensions ] = useState( {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight,
  } );

  const handleResize = useCallback( resizeEvent => setWindowDimensions( { height: resizeEvent.target.innerHeight, width: resizeEvent.target.innerWidth } ), [ setWindowDimensions ] );

  const resetTime = () => setTime( new Date() );

  useEffect( () => {
    window.addEventListener( "resize", handleResize );
    const timeInterval = setInterval( resetTime, 1000 );
    return () => {
      window.removeEventListener( "resize", handleResize );
      clearInterval( timeInterval );
    };
  }, [ handleResize ] );

  return (
    <div>
      <SecondHandDial time={ time } dimensions={ windowDimensions } />
    </div>
  );

}

export default App;
