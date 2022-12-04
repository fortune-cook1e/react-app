import { useSize } from 'ahooks'
import { useEffect } from 'react'
import { FC, useRef } from 'react'
import * as Three from 'three'

const CubeDemo: FC = () => {
  const renderRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const size = useSize(containerRef)

  useEffect(() => {
    if (renderRef.current && size) {
      console.log('size..', size)
      const scene = new Three.Scene()
      const camera = new Three.PerspectiveCamera(75, 1, 0.1, 1000)
      const renderer = new Three.WebGLRenderer()

      renderer.setSize(500, 500)
      const hasChild = renderRef.current.hasChildNodes()
      if (hasChild) {
        renderRef.current.removeChild(renderRef.current.firstChild as HTMLCanvasElement)
      }

      renderRef.current.appendChild(renderer.domElement)

      const geometry = new Three.BoxGeometry(1, 1, 1)
      const material = new Three.MeshBasicMaterial({ color: '#fff' })
      const cube = new Three.Mesh(geometry, material)
      scene.add(cube)

      camera.position.z = 5

      renderer.render(scene, camera)
    }
  }, [size])

  return (
    <div ref={containerRef}>
      <h3>this origin three CubeDemo</h3>
      <div ref={renderRef} />
    </div>
  )
}

export default CubeDemo
