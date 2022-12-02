import { useRef } from 'react'
import { useEffect } from 'react'
import { FC } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment'
import Stats from 'three/examples/jsm/libs/stats.module'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ModelDemo: FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mixer: any
    if (ref.current) {
      const clock = new THREE.Clock()
      const stats = Stats()

      ref.current.appendChild(stats.dom)

      const renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.outputEncoding = THREE.sRGBEncoding
      ref.current.appendChild(renderer.domElement)

      const pmremGenerator = new THREE.PMREMGenerator(renderer)

      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0xbfe3dd)
      scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture

      const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100)
      camera.position.set(5, 2, 8)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.target.set(0, 0.5, 0)
      controls.update()
      controls.enablePan = false
      controls.enableDamping = true

      const dracoLoader = new DRACOLoader()
      // dracoLoader.setDecoderPath('js/libs/draco/gltf/')

      const loader = new GLTFLoader()
      loader.setDRACOLoader(dracoLoader)

      loader.load(
        'models/LittlestTokyo.glb',
        function (gltf) {
          const model = gltf.scene
          model.position.set(1, 1, 0)
          model.scale.set(0.01, 0.01, 0.01)
          scene.add(model)

          mixer = new THREE.AnimationMixer(model)
          mixer.clipAction(gltf.animations[0]).play()

          // animate()
        },
        undefined,
        function (e) {
          console.error(e)
        }
      )

      window.onresize = function () {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      // function animate() {
      //   requestAnimationFrame(animate)

      //   const delta = clock.getDelta()

      //   mixer.update(delta)

      //   controls.update()

      //   stats.update()

      //   renderer.render(scene, camera)
      // }
    }
  }, [])

  return (
    <div>
      <h3> Model Demo</h3>
      <div ref={ref} />
    </div>
  )
}

export default ModelDemo
