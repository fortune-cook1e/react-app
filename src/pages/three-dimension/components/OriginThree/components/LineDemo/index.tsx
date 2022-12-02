import { useEffect } from 'react'
import { FC } from 'react'
import { useRef } from 'react'
import * as Three from 'three'

const LineDemo: FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const scene = new Three.Scene()
      const camera = new Three.PerspectiveCamera(75, 1, 0.1, 500)
      camera.position.set(0, 0, 100)
      camera.lookAt(0, 0, 0)

      const renderer = new Three.WebGLRenderer()

      renderer.setSize(500, 500)
      const hasChild = ref.current.hasChildNodes()
      if (hasChild) {
        ref.current.removeChild(ref.current.firstChild as HTMLCanvasElement)
      }

      ref.current.appendChild(renderer.domElement)

      const material = new Three.LineBasicMaterial({ color: '#fff' })

      const points = []
      points.push(new Three.Vector3(-10, 0, 0))
      points.push(new Three.Vector3(0, 10, 0))
      points.push(new Three.Vector3(10, 0, 0))
      const geometry = new Three.BufferGeometry().setFromPoints(points)

      const line = new Three.Line(geometry, material)
      scene.add(line)

      renderer.render(scene, camera)
    }
  }, [])

  return (
    <div>
      <h3>this is line demo</h3>
      <div ref={ref} />
    </div>
  )
}

export default LineDemo
