import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AFrameRenderer, Marker } from 'react-web-ar'
import {Entity} from 'aframe-react';
import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene} from 'react-aframe-ar';

// <a-text
//   position="0 1 0"
//   wrap-count="20"
//   color='red'
//   align= "center"
//   width= "6"
//   value= "Hello World!"
//   rotation="45 90 180"
//   >
// </a-text>


function App() {
  return (
    <div>
      <AFrameRenderer inherent={true}>
        <Marker parameters={{ preset: 'custom', type: 'pattern', patternUrl: 'pattern-Fridge.patt'}}>
          <Entity
            obj-model='obj: fridge.obj; mtl: fridge.mtl;'
            scale={{x: 0.75, y: 0.75, z: 0.75}}
            />
        </Marker>
        <Marker parameters={{ preset: 'custom', type: 'pattern', patternUrl: 'pattern-Microwave.patt'}}>
          <Entity
            obj-model='obj: mircowave.obj; mtl: mircowave.mtl;'
            scale={{x: 0.75, y: 0.75, z: 0.75}}
            />
        </Marker>
        <Marker parameters={{ preset: 'custom', type: 'pattern', patternUrl: 'pattern-Oven.patt'}}>
          <Entity
            obj-model='obj: alacena.obj; mtl: alacena.mtl;'
            scale={{x: 0.75, y: 0.75, z: 0.75}}
            />
        </Marker>
        <Marker parameters={{ preset: 'custom', type: 'pattern', patternUrl: 'pattern-Cupboard.patt'}}>
          <Entity
            obj-model='obj: horno.obj; mtl: horno.mtl;'
            scale={{x: 0.75, y: 0.75, z: 0.75}}
            />
        </Marker>
      </AFrameRenderer>
    </div>
  );
}

export default App;
