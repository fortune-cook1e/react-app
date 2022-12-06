import {
  OrbitControls,
  Text,
  TrackballControls,
  Image,
  useTexture,
  Stars,
  Html
} from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import randomWord from 'random-words'
import { CSSProperties, FC, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { TextureLoader, Vector3, Mesh, Raycaster } from 'three'

const canvasStyle: CSSProperties = {
  width: '100%',
  height: '700px',
  // background: '#fff'
  background: '#000'
  // background: '#202025'
  // background: 'lightpink'
}

interface ItemProps {
  word: string
  position: Vector3
  type: 'text' | 'image'
}

const IMGS = {
  avatar:
    'https://2g-filebox-daemon-test.oss-cn-shenzhen.aliyuncs.com/14%2FAICARD_PUBLIC%2Ffangzhiadmin_test%2Fgfqjd%2FuserAvatar%2F88e155de5b9adf1db0c6d353be2fe825.jpg',
  earth:
    'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226065264-0-earth.jpg',
  sun: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226063598-0-sun.jpg',
  mars: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226074601-0-mars.jpg',
  star: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226433498-0-stars.jpg'
}

const Item: FC<ItemProps> = ({ word, position, type = 'text' }) => {
  const ref = useRef<any>()
  const groupRef = useRef()
  const texture = useTexture(IMGS.avatar)

  // const colorMap = useLoader(TextureLoader, IMGS.sun)

  const [hovered, setHovered] = useState<boolean>(false)
  const over = (e: any) => {
    e.stopPropagation()
    setHovered(true)
  }
  const out = () => setHovered(false)

  const color = new THREE.Color()
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false
  }

  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [hovered])

  useFrame(({ camera }) => {
    if (ref.current) {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)
      // Animate font color
      ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
    }
  })

  const renderImage = () => {
    return (
      // <mesh ref={ref} position={position}>
      //   <sphereGeometry args={[1, 32, 32]} />
      //   <meshStandardMaterial map={texture} />
      // </mesh>
      <group>
        <Image
          ref={ref}
          texture={texture}
          scale={4}
          position={position}
          onPointerOver={over}
          onPointerOut={out}
          onClick={() => console.log('clicked')}
        >
          {/* {hovered ? <Html distanceFactor={100}>hagagaga</Html> : null} */}
        </Image>
      </group>
    )
  }

  const renderText = () => {
    return (
      <group>
        <Text
          ref={ref}
          position={position}
          onPointerOver={over}
          onPointerOut={out}
          onClick={() => console.log('clicked')}
          {...fontProps}
        >
          {word}
          {/* <Html distanceFactor={100}>
            <span style={{ color: 'lightpink' }}>{word}</span>
          </Html> */}
        </Text>
      </group>
    )
  }

  const renderItem = () => {
    return type === 'image' ? renderImage() : renderText()
  }

  return <>{renderItem()}</>
}

const Cloud = ({ count = 4, radius = 20 }: { count: number; radius: number }) => {
  const words = useMemo(() => {
    const temp: [THREE.Vector3, string][] = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
          new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),
          randomWord(6)[0]
        ])
      }
    }

    return temp
  }, [count, radius])

  return (
    <>
      {words.map(([pos, word], index) => (
        <Item key={index} position={pos} word={word} type='image' />
      ))}
    </>
  )
}

const Demo: FC = () => {
  // const texture = useTexture(IMGS.earth)
  const pointDist = 5
  const raycaster = new Raycaster()
  const origVec = new Vector3()
  const dirVec = new Vector3()

  // Objects
  const objRef = useRef<Mesh | null>(null)
  const origMesh = useRef<Mesh | null>(null)
  const hitMesh = useRef<Mesh | null>(null)
  const cylinderMesh = useRef<Mesh | null>(null)

  // set transforms
  useEffect(() => {
    if (!objRef.current || !origMesh.current || !hitMesh.current || !cylinderMesh.current) {
      return
    }

    // hitMesh.current.scale.multiplyScalar(0.5)
    // origMesh.current.position.set(pointDist, 0, 0)
    // objRef.current.rotation.x = Math.random() * 10
    // objRef.current.rotation.y = Math.random() * 10
  }, [])

  const xDir = Math.random() - 0.5
  const yDir = Math.random() - 0.5

  useFrame((_, delta) => {
    // const obj: Mesh | null = objRef.current
    // if (!obj || !origMesh.current || !hitMesh.current || !cylinderMesh.current) {
    //   return
    // }
    // obj.rotation.x += xDir * delta
    // obj.rotation.y += yDir * delta
    // origMesh.current.updateMatrixWorld()
    // origVec.setFromMatrixPosition(origMesh.current.matrixWorld)
    // dirVec.copy(origVec).multiplyScalar(-1).normalize()
    // raycaster.set(origVec, dirVec)
    // const ray: any = raycaster
    // ray.firstHitOnly = true
    // const length = pointDist
    // hitMesh.current.position.set(pointDist - length, 0, 0)
    // cylinderMesh.current.position.set(pointDist - length / 2, 0, 0)
    // cylinderMesh.current.scale.set(1, length, 1)
    // cylinderMesh.current.rotation.z = Math.PI / 2
  })

  return (
    <group ref={objRef}>
      {/* <mesh ref={origMesh}>
        <sphereGeometry args={[0.1, 20, 20]} />
        <meshBasicMaterial color={0xffffff} />
      </mesh>
      <mesh ref={hitMesh}>
        <sphereGeometry args={[0.1, 20, 20]} />
        <meshBasicMaterial color={0xffffff} />
      </mesh> */}
      <mesh ref={cylinderMesh}>
        <cylinderGeometry args={[0.01, 0.01]} />
        <meshBasicMaterial color={0xffffff} transparent opacity={0.25} />
      </mesh>
    </group>
  )
}

const PerfectDemo: FC = () => {
  return (
    <Canvas dpr={[1, 2]} style={canvasStyle} camera={{ position: [0, 0, 40], fov: 90 }}>
      {/* <fog attach='fog' args={['#202025', 0, 80]} />
      <Cloud count={8} radius={20} />
      <Stars />
      <TrackballControls />
      <axesHelper />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color='#fff' />
      </mesh>
      <ambientLight intensity={1} /> */}

      {new Array(40).fill({}).map((_, id) => {
        return <Demo key={id} />
      })}

      <OrbitControls enablePan={false} zoomSpeed={0.5} />
    </Canvas>
  )
}

export default PerfectDemo
