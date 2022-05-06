import React from 'react'

const height= 500
const strokeWidth = 10
const centerY = height / 2

const BackgroundCircle = () => {
  return (
    <circle
          r={centerY - strokeWidth / 2 } fill="yellow" stroke="black"
          strokeWidth={strokeWidth} />
  )
}

export default BackgroundCircle