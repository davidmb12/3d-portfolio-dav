import React, { useEffect } from 'react'
import { Canvas } from "@react-three/fiber";
import {CanvasLoader} from "../Loader"
const Computers = () => {
  return (
    <div>Computers</div>
  )
}
const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("max-width: 500px");

    //Set the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);

    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    //Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop = 'demand'
      shadows
      dpr = {[1,2]}
      camera = {{position:[20,3,5],fov: 25}}
      gl = {{preserveDrawingBuffer: true}}
    >
      <Suspense fallback = {<CanvasLoader/>}
    </Canvas>
  )
}
export default Computers