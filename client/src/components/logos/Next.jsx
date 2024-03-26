import { TbBrandNextjs } from 'react-icons/tb'

const Next = () => {
  return (
    <div className="bg-black px-5 md:px-10 py-10 text-white">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-white to-zinc-400 blur"></div>
        <div className="relative flex justify-center items-center gap-24 bg-black rounded-xl py-5 px-10">
          <TbBrandNextjs className="text-5xl md:text-7xl text-white" />
        </div>
      </div>
    </div>
  )
}

export default Next
