import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import "../index.css"

const Model = () => {
  // Load the GLB file
  const { scene, animations } = useGLTF('/robot_playground.glb');
  // Load the animations using the useAnimations hook
  const { actions } = useAnimations(animations, scene);

  // Play the animation once the model is loaded
  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  return <primitive object={scene} />;
};

const GLBViewer = () => {
  return (
    <Canvas>
      {/* OrbitControls allow you to rotate around the model */}
      <OrbitControls />

      {/* Add some basic lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Suspense is used for loading the model */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default GLBViewer;
