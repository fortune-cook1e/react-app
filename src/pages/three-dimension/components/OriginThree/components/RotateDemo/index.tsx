import { FC, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const IMGS = {
  earth:
    'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226065264-0-earth.jpg',
  sun: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226063598-0-sun.jpg',
  mars: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226074601-0-mars.jpg',
  star: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226433498-0-stars.jpg'
}

const RotateDemo: FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const { innerWidth, innerHeight } = window

      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(innerWidth, innerHeight)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000)
      camera.position.set(-90, 140, 140)

      const orbit = new OrbitControls(camera, renderer.domElement)
      orbit.update()

      const hasChild = canvasRef.current.hasChildNodes()
      if (hasChild) {
        canvasRef.current.removeChild(canvasRef.current.firstChild as HTMLCanvasElement)
      }
      canvasRef.current.appendChild(renderer.domElement)

      const ambientLight = new THREE.AmbientLight(0x333333)
      scene.add(ambientLight)

      const cubeTextureLoader = new THREE.CubeTextureLoader()
      scene.background = cubeTextureLoader.load([
        IMGS.star,
        IMGS.star,
        IMGS.star,
        IMGS.star,
        IMGS.star,
        IMGS.star
      ])

      const textureLoader = new THREE.TextureLoader()

      const createPlanete = (size: number, texture: string, position: number) => {
        const geo = new THREE.SphereGeometry(size, 30, 30)
        const mat = new THREE.MeshStandardMaterial({
          map: textureLoader.load(texture)
        })
        const mesh = new THREE.Mesh(geo, mat)
        const obj = new THREE.Object3D()
        obj.add(mesh)
        scene.add(obj)
        mesh.position.x = position
        return {
          mesh,
          obj
        }
      }

      const sunGeo = new THREE.SphereGeometry(16, 30, 30)
      const sunMat = new THREE.MeshBasicMaterial({
        map: textureLoader.load(IMGS.sun)
      })
      const sun = new THREE.Mesh(sunGeo, sunMat)
      scene.add(sun)

      const mercury = createPlanete(3.2, IMGS.earth, 28)
      const venus = createPlanete(5.8, IMGS.mars, 44)
      const earth = createPlanete(6, IMGS.earth, 62)
      const mars = createPlanete(4, IMGS.mars, 78)
      const jupiter = createPlanete(12, IMGS.mars, 100)

      const pointLight = new THREE.PointLight(0xffffff, 2, 300)
      scene.add(pointLight)

      const animate = () => {
        sun.rotateY(0.004)
        venus.mesh.rotateY(0.002)

        // 围绕转
        venus.obj.rotateY(0.005)
        renderer.render(scene, camera)
      }

      renderer.setAnimationLoop(animate)
    }
  }, [])

  return (
    <div>
      <div ref={canvasRef} />
    </div>
  )
}

export default RotateDemo
