import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';

import Dial from './components/Dial';
import { setDimensions, setMouseCoordinates, setMouseDown } from './redux/clientSlice';

function App() {

  const dispatch = useDispatch();

  const handleMouseDown = useCallback( mouseDownEvent => {
    dispatch( setMouseCoordinates( { x: mouseDownEvent.clientX, y: mouseDownEvent.clientY } ) );
    dispatch( setMouseDown( true ) );
  }, [ dispatch ] );

  const handleMouseUp = useCallback( () => dispatch( setMouseDown( false ) ), [ dispatch ] );

  const handleMouseMove = useCallback( mouseMoveEvent => dispatch( setMouseCoordinates( { x: mouseMoveEvent.clientX, y: mouseMoveEvent.clientY } ) ), [ dispatch ] );
  
  const handleResize = useCallback( resizeEvent => dispatch( setDimensions( { height: resizeEvent.target.innerHeight, width: resizeEvent.target.innerWidth } ) ), [ dispatch ] );

  useEffect( () => {
    window.addEventListener( "mousedown", handleMouseDown );
    window.addEventListener( "mousemove", handleMouseMove );
    window.addEventListener( "mouseup", handleMouseUp );
    window.addEventListener( "resize", handleResize );
    return () => {
      window.removeEventListener( "mousedown", handleMouseDown );
      window.removeEventListener( "mousemove", handleMouseMove );
      window.removeEventListener( "mouseup", handleMouseUp );
      window.removeEventListener( "resize", handleResize );
    };
  }, [ handleMouseDown, handleMouseMove, handleMouseUp, handleResize ] );

  return (
    <div>
      <Dial />
    </div>
  );

}

export default App;
