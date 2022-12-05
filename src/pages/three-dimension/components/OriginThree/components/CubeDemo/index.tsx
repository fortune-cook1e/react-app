import { useSize } from 'ahooks'
import * as dat from 'dat.gui'
import { useEffect } from 'react'
import { FC, useRef } from 'react'
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const IMGS = {
  star: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670221848930-0-photo-1520034475321-cbe63696469a.webp',
  ball: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670221848928-0-photo-1557128928-66e3009291b5.webp',
  space:
    'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670222169178-0-photo-1462331940025-496dfbfc7564.webp'
}

const CubeDemo: FC = () => {
  const renderRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { innerWidth, innerHeight } = window

    if (renderRef.current) {
      const scene = new Three.Scene()

      const camera = new Three.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
      camera.position.set(0, 20, 20)
      camera.updateMatrix()

      const renderer = new Three.WebGLRenderer()
      renderer.setSize(innerWidth, innerHeight)

      const orbit = new OrbitControls(camera, renderer.domElement)
      orbit.update()

      const axesHelper = new Three.AxesHelper(5)
      scene.add(axesHelper)

      // 设置背景
      const textureLoader = new Three.TextureLoader()
      scene.background = textureLoader.load(IMGS.star)

      // box
      const boxGeometry = new Three.BoxGeometry()
      const boxMaterial = new Three.MeshBasicMaterial({ color: 0x00fff00 })
      const boxMesh = new Three.Mesh(boxGeometry, boxMaterial)
      boxMesh.rotation.x = 5
      boxMesh.rotation.y = 5
      scene.add(boxMesh)

      // box2
      const imgBoxGeometry = new Three.BoxGeometry(4, 4, 4)
      const imgBoxMaterial = new Three.MeshBasicMaterial({
        map: textureLoader.load(IMGS.space)
      })
      const imgBoxMesh = new Three.Mesh(imgBoxGeometry, imgBoxMaterial)
      imgBoxMesh.position.set(5, 5, 5)
      scene.add(imgBoxMesh)

      // board
      const planeGeometry = new Three.PlaneGeometry(30, 30)
      const planeMaterial = new Three.MeshBasicMaterial({ color: 0xffffff })
      const planeMesh = new Three.Mesh(planeGeometry, planeMaterial)
      planeMesh.rotation.x = -0.5 * Math.PI
      scene.add(planeMesh)

      // grid
      const gridHelper = new Three.GridHelper(30, 10)
      scene.add(gridHelper)

      // sphere
      const sphereGeometry = new Three.SphereGeometry(4)
      const sphereMaterial = new Three.MeshLambertMaterial({
        color: 0x0000ff
        // map: textureLoader.load(IMGS.ball)
      })
      const sphereMesh = new Three.Mesh(sphereGeometry, sphereMaterial)
      sphereMesh.position.set(-10, 10, 0)
      scene.add(sphereMesh)

      // light
      const ambientLight = new Three.AmbientLight(0x333333)
      scene.add(ambientLight)

      // gui
      const gui = new dat.GUI()
      const options = {
        sphereColor: '#ffea00',
        wireframe: false
      }

      gui.addColor(options, 'sphereColor').onChange(e => {
        sphereMesh.material.color.set(e)
      })

      gui.add(options, 'wireframe').onChange(e => {
        sphereMesh.material.wireframe = e
      })

      const hasChild = renderRef.current.hasChildNodes()
      if (hasChild) {
        renderRef.current.removeChild(renderRef.current.firstChild as HTMLCanvasElement)
      }
      renderRef.current.appendChild(renderer.domElement)

      renderer.render(scene, camera)

      // animation

      let step = 0
      const speed = 0.01

      const animate = () => {
        boxMesh.rotation.x += 0.01
        boxMesh.rotation.y += 0.01
        step += speed
        const positionY = 10 * Math.abs(Math.sin(step))
        sphereMesh.position.y = 10 * Math.abs(Math.sin(step))
        renderer.render(scene, camera)
      }

      renderer.setAnimationLoop(animate)

      const resize = () => {
        console.log('resize...')
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', resize)

      return () => {
        window.removeEventListener('resize', resize)
      }
    }
  }, [])

  return (
    <div ref={containerRef}>
      <h3>this origin three CubeDemo</h3>
      <div ref={renderRef} />
    </div>
  )
}

export default CubeDemo
