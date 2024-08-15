import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import ModelView from '../ModelView/ModelView'
import {yellowImg}  from '../../utils'
import * as THREE from 'three'
import { Canvas} from '@react-three/fiber';



const Model = () => {

  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title :'iPhone 15 pro in Natural Titanium',
    color :['#8F8A81', '#FFE7B9', '#6F6C64'],
    img :yellowImg
  })
  //camera control
  const cameraControlSmall =useRef();
  const cameraControlLarge = useRef();

 // model control
  const small =useRef(new THREE.Group());
  const large =useRef(new THREE.Group());


  const [smallRotation, setSmallRotation] = useState(0)
  const [largeRotation, setLargeRotation] = useState(0)

  useGSAP(()=>{
    gsap.to('#heading',{y:0,opacity:1})
  },[])
  return (
    <section className='common-padding'>
    <div className='screen-max-width'>

      <h1  id='heading' className='section-heading'>Take a look Closer...</h1>
      <div className='flex flex-col items-center mt-5'>
        <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative ' >
          <ModelView   
          index={1}
          groupref={small}
          gsapType="view1"
          controlref={cameraControlSmall}
          setRotationState={setSmallRotation}
          item={model}
          size={size}          
          />
          <ModelView   
          index={2}
          groupref={large}
          gsapType="view2"
          controlref={cameraControlLarge}
          setRotationState={setLargeRotation}
          item={model}
          size={size}          
          />

         <Canvas className="h-full w-full"
         style={{overflow:'hidden', top:0 ,bottom:0, left:0, right:0}}
         eventSource={document.getElementById('root')}
         >
          {/* <View.Port/> */}
         </Canvas>
        </div>
        <div className='mx-auto h-full'>
          <p>{model.title}</p>
        </div>
      </div>
 
      
    </div>
    </section>
  )
}

export default Model
