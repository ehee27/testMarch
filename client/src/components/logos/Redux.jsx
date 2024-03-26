import { SiRedux } from 'react-icons/si'

const Redux = () => {
  return (
    <div className="bg-black px-5 md:px-10 py-10 text-white">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-200 to-purple-600 blur"></div>
        <div className="relative flex justify-center items-center gap-24 bg-black rounded-xl py-5 px-10">
          <SiRedux className="text-5xl md:text-7xl text-purple-600" />
        </div>
      </div>
    </div>
  )
}

export default Redux
