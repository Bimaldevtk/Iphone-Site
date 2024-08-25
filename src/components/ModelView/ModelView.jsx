import React, { Suspense } from 'react';
import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import Lights from '../Lights/Lights';
import Iphone from '../Iphone/Iphone';
import * as THREE from 'three';
import Loader from '../Loader/Loader';

const ModelView = ({ index, groupref, gsapType, controlref, setRotationState, item, size }) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`w-full h-full absolute ${index === 2 ? '-right-[100%]' : ''}`}
  >
  
      <ambientLight intensity={5} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlref}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlref.current.getAzimuthAngle())}
      />

      <group ref={groupref}>
        <Suspense fallback={<Loader/> }>
          <Iphone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} 
          item={item}
          size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
