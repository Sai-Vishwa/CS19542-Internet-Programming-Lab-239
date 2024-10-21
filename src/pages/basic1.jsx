import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function BasicOne(){
    return (
        <>
        <Canvas>
        <OrbitControls />
            <mesh>
                <circleGeometry />
                <meshBasicMaterial color={'blue'}/>
            </mesh>
        </Canvas>
        </>
    );
}

export default BasicOne;