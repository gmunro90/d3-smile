import React from 'react'
const width = 960 
const height= 500
const strokeWidth = 10
const centerX = width / 2
const centerY = height / 2
const eyeOffSetX = 90
const eyeOffSetY = 100
const eyeRadius = 40
const mouthWidth = 20
const mouthRadius = 140


const BackgroundCircle = (props) => {
  return ( 

    <svg width={width} height={height}>
      
    <circle
    r={centerY - strokeWidth / 2 } fill="yellow" stroke="black"
      stroke-width={strokeWidth} />
     </svg>
     
    )
}

export default BackgroundCircle