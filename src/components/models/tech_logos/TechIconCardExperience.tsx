import { Environment, Float, OrbitControls, useGLTF, useFBX } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, Suspense } from "react";
import * as THREE from "three";
import type { TechStack } from '../../../constants';

interface TechIconCardExperienceProps {
  model: TechStack;
}

// Componente de Erro
const ErrorFallback = ({ modelName }: { modelName: string }) => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-red-400">Erro ao carregar: {modelName}</div>
  </div>
);

// Componente para modelo GLB/GLTF
const GLTFModel: React.FC<{ model: TechStack }> = ({ model }) => {
  const gltf = useGLTF(model.path);
  // Clona a cena para evitar conflitos quando o mesmo modelo é usado várias vezes
  const scene = gltf.scene.clone();

  useEffect(() => {
    if (model.name === "Interactive Developer" && scene) {
      scene.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
          if (child.name === "Object_5") {
            (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
      <group scale={[1, 1, 1]} rotation={[0, 0, 0]}>
        <primitive object={scene} />
      </group>
    </Float>
  );
};

// Componente para modelo FBX
const FBXModel: React.FC<{ model: TechStack }> = ({ model }) => {
  const fbx = useFBX(model.path);
  // Clona o modelo para evitar conflitos quando o mesmo modelo é usado várias vezes
  const clonedFbx = fbx.clone();

  useEffect(() => {
    if (model.name === "Interactive Developer" && clonedFbx) {
      clonedFbx.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
          if (child.name === "Object_5") {
            (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [clonedFbx, model.name]);

  return (
    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
      <group scale={[1, 1, 1]} rotation={[0, 0, 0]}>
        <primitive object={clonedFbx} />
      </group>
    </Float>
  );
};

const TechIconCardExperience: React.FC<TechIconCardExperienceProps> = ({ model }) => {
  // Detecta se é .fbx ou .glb/.gltf
  const isFBX = model.path.toLowerCase().endsWith('.fbx');
  
  // Verifica se o arquivo existe (básico)
  if (!model.path || model.path.trim() === '') {
    return <ErrorFallback modelName={model.name} />;
  }

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      <Suspense fallback={null}>
        {isFBX ? (
          <FBXModel model={model} />
        ) : (
          <GLTFModel model={model} />
        )}
      </Suspense>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
