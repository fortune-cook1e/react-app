import { useSize } from 'ahooks'
import { CSSProperties, FC, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { AmbientLight } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const WIDTH = 800
const HEIGHT = 500

const LightCubeDemo: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const threeRef = useRef<HTMLDivElement>(null)

  // const render = () => {
  //   if (renderer && scene && camera) {
  //     renderer.render(scene, camera)
  //   }
  // }

  const init = () => {
    if (threeRef.current) {
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0xbfe3dd)
      // scene.overrideMaterial = new THREE.MeshBasicMaterial({ color: 'green' })

      const camera = new THREE.PerspectiveCamera(40, WIDTH / HEIGHT, 0.1, 1000)
      camera.lookAt(0, 0, 0)
      camera.position.set(50, 50, 50)

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      })
      renderer.setSize(WIDTH, HEIGHT)

      const hasChild = !!threeRef.current?.childNodes.length
      if (hasChild) {
        threeRef.current.innerHTML = ''
      }
      threeRef.current?.appendChild(renderer.domElement)

      window.addEventListener('resize', () => {
        renderer.setSize(WIDTH, HEIGHT)
        camera.aspect = 1
        camera.far = 100000
        camera.updateProjectionMatrix()
      })

      const controls = new OrbitControls(camera, renderer.domElement)

      // 中间白色方块
      const cubeGeometry = new THREE.BoxGeometry(5, 5, 5)
      const whiteMaterial = new THREE.MeshBasicMaterial({
        color: '#fff'
      })
      const cubeMesh = new THREE.Mesh(cubeGeometry, whiteMaterial)
      cubeMesh.position.set(0, 0, 0)
      scene.add(cubeMesh)

      // red ball
      const ballGeometry = new THREE.SphereGeometry(5, 5, 5)
      const ballMaterial = new THREE.MeshBasicMaterial({ color: 'red' })
      const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial)
      ballMesh.position.set(10, 10, 10)
      scene.add(ballMesh)

      // light
      const ambientLight = new AmbientLight('#000', 0.2)
      scene.add(ambientLight)

      const animate = () => {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
      }
      animate()
    }
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div ref={containerRef} style={{ width: '800px', height: '500px' }}>
      <h3>Light Cube Demo</h3>
      <div ref={threeRef} />
    </div>
  )
}

export default LightCubeDemo
