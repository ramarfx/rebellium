import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Logos from './models/Logos' // Pastikan path ini sesuai dengan lokasi file Model.tsx Anda
import { Suspense } from 'react'

function Logo() {
    return (
        <Canvas className="pt-10 h-[500px] w-[500px] md:h-[350px] md:w-[600px]"
            camera={{ position: [0, 0, 82] }}>
            <Suspense>
                <Logos />
                <Environment preset="sunset" />
            </Suspense>
            <OrbitControls enableZoom={ false } autoRotate = {true} autoRotateSpeed={5} />
        </Canvas>
    )
}

export default Logo