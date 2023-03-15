import PerformanceMonitor from './components/PerformanceMonitor'

const PlayGround = (): JSX.Element => {
  return (
    <section>
      <h1>this is play ground</h1>
      <div className='w-1/2 h-52 bg-red-200 text-center animate-move '>this is red box</div>
      <PerformanceMonitor />
    </section>
  )
}

export default PlayGround
