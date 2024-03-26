const Nameplate = () => {
  return (
    <div className="flex justify-center items-center my-5 text-white">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-orange-700 blur"></div>
        <div className="relative bg-zinc-900 rounded-md py-3 px-10">
          <p className="text-5xl font-bold text-shadow-lg shadow-white">
            SCOTT LUCAS
          </p>
        </div>
      </div>
    </div>
  )
}

export default Nameplate
