import React from 'react' 
import { arc } from 'd3'
import BackgroundCircle from './components/BackgroundCircle'

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

const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthWidth + mouthRadius)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3 / 2);

  const App = () => (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}> 

             <BackgroundCircle />   

       <circle cx={- eyeOffSetX}
               cy={- eyeOffSetY}
               r={eyeRadius}
               stroke="black"
               strokeWidth="10" />
             <circle cx={eyeOffSetX}
              cy={- eyeOffSetY}
              r={eyeRadius}
              stroke="black"
              strokeWidth="10" />
     
           <path d={mouthArc()} />
         </g>
     </svg>
     )

export default App;
