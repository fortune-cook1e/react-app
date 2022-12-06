import {
  OrbitControls,
  PerspectiveCamera,
  TrackballControls,
  Environment,
  useDepthBuffer,
  SpotLight,
  Plane
} from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Button } from 'antd'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Camera, Mesh, TextureLoader } from 'three'

const IMGS = {
  earth:
    'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226065264-0-earth.jpg',
  sun: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226063598-0-sun.jpg',
  mars: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226074601-0-mars.jpg',
  star: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226433498-0-stars.jpg'
}

function MeshCmp() {
  const meshRef = useRef<Mesh>(null)
  const colorMap = useLoader(TextureLoader, IMGS.earth)
  const depthBuffer = useDepthBuffer({ size: 256 })

  // useFrame((state, delta, xrFrame) => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.x += 0.05
  //   }
  // })

  return (
    <mesh ref={meshRef}>
      <SpotLight
        penumbra={0.5}
        depthBuffer={depthBuffer}
        position={[3, 2, 0]}
        intensity={0.5}
        angle={0.5}
        color='#0EEC82'
        castShadow
      />
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.5}
        minDistance={2}
        maxDistance={10}
      />
      <PerspectiveCamera
        near={0.01} //
        far={50}
        position={[1, 3, 1]}
        makeDefault
        fov={60}
      />
      <Environment preset='sunset' />
      <mesh position-y={0.5} castShadow>
        <boxGeometry />
        <meshPhongMaterial />
      </mesh>

      <Plane receiveShadow rotation-x={-Math.PI / 2} args={[100, 100]}>
        <meshPhongMaterial />
      </Plane>
    </mesh>
  )
}

const BasicDemo = (): JSX.Element => {
  const [visible, setVisible] = useState(true)

  const cameraRef = useRef<Camera>(null)

  return (
    <section>
      <p>this is basic demo</p>
      <Button onClick={() => setVisible(!visible)}>toggle</Button>
      <Canvas style={{ width: '100%', height: '600px' }}>
        <MeshCmp />
      </Canvas>
    </section>
  )
}

export default BasicDemo
