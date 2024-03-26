import { SiExpress } from 'react-icons/si'

const Express = () => {
  return (
    <div className="bg-black px-5 md:px-10 py-10">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-500 blur"></div>
        <div className="relative flex justify-center items-center gap-24 bg-black rounded-xl py-5 px-10">
          <SiExpress className="text-5xl md:text-7xl text-gray-300" />
        </div>
      </div>
    </div>
  )
}

export default Express
