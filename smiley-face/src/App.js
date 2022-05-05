import React from 'react' 
import ReactDOM from 'react-dom'
import { arc } from 'd3'

const width = 960 
const height= 500

const centerX = width / 2
const centerY = height / 2
const strokeWidth = 10
const eyeOffSetX = 90
const eyeOffSetY = 100
const eyeRadius = 40
const mouthWidth = 20
const mouthRadius = 140

const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthWidth + mouthRadius)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3/2);


function App() {
  return (
    <div className="App">
     <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}> 
        
        <circle
        r={centerY - strokeWidth / 2 } fill="yellow" stroke="black"
          stroke-width={strokeWidth} />


        <circle cx={- eyeOffSetX}
          cy={- eyeOffSetY}
          r={eyeRadius}
          stroke="black"
        	stroke-width="10" />
        <circle cx={eyeOffSetX}
         cy={- eyeOffSetY}
         r={eyeRadius}
         stroke="black"
         stroke-width="10" />

      <path d={mouthArc()} />
    </g>
</svg>
    </div>
  );
}

export default App;
