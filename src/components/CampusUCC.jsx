import { React, useState, Suspense }  from 'react';
import svgSpoon from "../assets/spoon.svg"
import fotoKnife from "../assets/knife.png"

import Casa from "../assets/Casa"
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';

const AboutUs = () => (
<div className="mt-20 flex flex-col items-center">
  <div className="flex flex-row items-center justify-between w-full max-w-6xl">
    <div className="flex-1 text-center">
      <h1 className="text-4xl text-black">Campus UCC</h1>
      <img src={svgSpoon} alt="about_spoon" className="my-4 mx-auto" />
      <p className="text-lg text-black">
      Explorá el avance de la construcción de la Universidad Católica de Córdoba dentro de Ayres de La Antonia a través de este modelo 3D interactivo. Podés visualizar cómo se va materializando este espacio educativo único y estar al tanto del progreso de las obras. ¡Descubrí el futuro campus mientras toma forma!
      </p>
      <button type="button" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Know More</button>
    </div>
    <div className="flex-shrink-0 mx-8 sm:h-[250px] sm:w-[400px] lg:h-[500px] lg:w-[800px]">
      <Canvas camera={{zoom: 1, position: [-70,30,80]}}>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Casa />
        </Suspense>
      </Canvas>
    </div>
  </div>
</div>

);

export default AboutUs;