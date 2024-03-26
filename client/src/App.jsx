import './App.css'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Tech from './components/Tech'

function App() {
  return (
    <div className="h-[100vh]">
      <div className={`bg-center bg-cover bg-[url(/img/bg-2.jpg)] h-[30%]`}>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-black/90 to-black/50 h-[100%]">
          <div className="flex justify-left items-end bg-gradient-to-r from-black/80 to-black/10 h-[100%] px-10 pb-28">
            {/* <Nameplate /> */}
            <div className="flex flex-col justify-center items-start p-2 text-white w-[100%]">
              {' '}
              <p className="text-2xl md:text-7xl">SCOTT LUCAS</p>
              <p className="text-sm md:text-lg">Temporary Div Here</p>
            </div>
          </div>
          <div className="hidden md:visible"></div>
        </div>
      </div>
      {/* -------- CARD GRID -------------------------- */}
      <Portfolio />
      {/* -------- CARD GRID -------------------------- */}
      <About />
      <Tech />
    </div>
  )
}

export default App
