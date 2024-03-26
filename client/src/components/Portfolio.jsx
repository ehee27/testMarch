// import twoSeven from '../../public/img/twoSevenTech.png'
// import shoTime from '../../public/img/baseball27.png'
// import sooperGames from '../../public/img/sopperGames.png'
// import NFL from '../../public/img/nfl.png'
// import figma from '../../public/img/figma.png'

const cardData = [
  {
    id: 1,
    title: 'SooperGames',
    description: 'This is the descrition of the card.',
    link: 'https://www.espn.com/',
    pic: 'sooperGames.png',
  },
  {
    id: 2,
    title: 'NFL News',
    description: 'This is the descrition of the card.',
    link: 'https://www.espn.com/',
    pic: 'nfl.png',
  },
  {
    id: 3,
    title: 'ShoTime',
    description: 'This is the descrition of the card.',
    link: 'https://www.espn.com/',
    pic: 'baseball27.png',
  },
  {
    id: 4,
    title: 'TwoSevenTechnical',
    description: 'This is the descrition of the card.',
    link: 'https://www.espn.com/',
    pic: 'twoSevenTech.png',
  },
  {
    id: 5,
    title: 'Figma Design',
    description: 'This is the descrition of the card.',
    link: 'https://www.espn.com/',
    pic: 'figma.png',
  },
]

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5 md:p-10 bg-gradient-to-t from-black to-black/80 border-4">
      {cardData?.map((item, i) => (
        <div
          key={i}
          className="flex flex-col rounded-md transition-all duration-200 hover:border-zinc-700 bg-transparent bg-zinc-950 hover:bg-zinc-950 hover:-translate-y-2 cursor-pointer mb-20 -mt-20 border-4 border-yellow-200"
        >
          {/* ---------- HEADER ----------------- */}
          <div className="border-4 border-red-300">
            <a
              href="https://sl27dev.com/"
              className="group px-5 py-4 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2
                className={`mb-3 text-2xl font-semibold group-hover:text-orange-600`}
              >
                {item.title}
                <span className="inline-block transition-transform group-hover:translate-x-3 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="text-white">{item.description}</p>
            </a>
          </div>

          {/* ---------- IMAGE ----------------- */}
          <div className="flex justify-center">
            <img className="h-[70%] w-[90%]" src={`/img/${item.pic}`}></img>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Portfolio
