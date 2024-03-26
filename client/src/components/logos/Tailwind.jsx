import { SiTailwindcss } from 'react-icons/si'

const Tailwind = () => {
  return (
    <div className="bg-black px-5 md:px-10 py-10 text-white">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-sky-200 to-blue-400 blur"></div>
        <div className="relative flex justify-center items-center gap-24 bg-black rounded-xl py-5 px-10">
          <SiTailwindcss className="text-5xl md:text-7xl text-sky-400" />
        </div>
      </div>
    </div>
  )
}

export default Tailwind
