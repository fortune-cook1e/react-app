import { OrbitControls, PerspectiveCamera, TrackballControls } from '@react-three/drei'
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

  useFrame((state, delta, xrFrame) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.05
    }
  })
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial map={colorMap} />
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
      <Canvas>
        <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} />
        <OrbitControls />
        <pointLight position={[10, 10, 10]} />
        <MeshCmp />
      </Canvas>
    </section>
  )
}

export default BasicDemo
