import Redux from './logos/Redux'
import Express from './logos/Express'
import Next from './logos/Next'
import Tailwind from './logos/Tailwind'
import Database from './logos/Database'

const Tech = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 bg-black px-5 md:px-10 py-10 text-white">
      <Redux />
      <Express />
      <Next />
      <Tailwind />
      <Database />
    </div>
  )
}

export default Tech
