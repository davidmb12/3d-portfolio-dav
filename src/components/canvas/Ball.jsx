import { Canvas } from '@react-three/fiber'
import React,{Suspense} from 'react'
import {
  Decal,Float,OrbitControls, Preload,useTexture
} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  
  return (
    <>
    </>
  )
}

export default Ball