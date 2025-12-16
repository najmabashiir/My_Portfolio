import React, { useRef, useState, Suspense, lazy } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const StarsLazy = lazy(() => import('./Hero3DStars'));
const ParticlesLazy = lazy(() => import('./Hero3DParticles'));

// Use 'any' cast to bypass missing JSX definitions for R3F elements
const Points = 'points' as any;
const BufferGeometry = 'bufferGeometry' as any;
const BufferAttribute = 'bufferAttribute' as any;
const PointsMaterial = 'pointsMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const DirectionalLight = 'directionalLight' as any;
const PointLight = 'pointLight' as any;
const Color = 'color' as any;

// Procedural 3D Mesh Component
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Scale on hover
      const targetScale = hovered ? 2.2 : 1.8;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
      <MeshDistortMaterial
        color={hovered ? "#22d3ee" : "#0891b2"} // Cyan-400 to Cyan-600
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.4}
        metalness={0.8}
      />
    </Sphere>
  );
};

// Particles moved to a lazy-loaded module (Hero3DParticles)

const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Color attach="background" args={['#020617']} />
        <AmbientLight intensity={0.5} />
        <DirectionalLight position={[10, 10, 5]} intensity={1} />
        <PointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <AnimatedSphere />
        </Float>
        
        <Suspense fallback={null}>
          <ParticlesLazy />
          <StarsLazy />
        </Suspense>
        
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Hero3D;