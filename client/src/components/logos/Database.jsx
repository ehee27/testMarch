import { FaDatabase } from 'react-icons/fa'

const Database = () => {
  return (
    <div className="bg-black px-5 md:px-10 py-10">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-800 blur"></div>
        <div className="relative flex justify-center items-center gap-24 bg-black py-5 px-10 rounded-xl">
          <FaDatabase className="text-5xl md:text-7xl text-white" />
        </div>
      </div>
    </div>
  )
}

export default Database
