import inovv_logo from '../assets/images/inovv.jpeg'

export function Experience() {
  return (
    <div className="flex w-full flex-col justify-center gap-8 pb-24">
      <h2 className="bg-blue-gradient bg-clip-text text-center text-3xl font-extrabold text-transparent">
        EXPERIENCE
      </h2>
      <div className="flex flex-col gap-7">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-5">
            <img
              src={inovv_logo}
              alt="INOVV"
              className="h-9 w-9 rounded-lg"
              draggable="false"
            />
            <p className="text-xl font-bold text-white">
              Front-End Developer at INOVV
            </p>
          </div>
          <p className="text-sm text-gray-lighter">Nov 2024 - April 2025</p>
        </div>
        <p className="text-sm text-gray-lighter">
          I work as a Front-End Developer (Freelance) on a project for a StartUp
          called INOVV Solucoes. The project is called iCreator, a platform that
          facilitates contact between digital influencers and brands that are
          looking for publicity. In this project, we use React, TypeScript,
          TailwindCSS, Hexagonal Architecture and Git/GitHub, in addition to
          agile methodologies for software development and delivery.
        </p>
      </div>
    </div>
  )
}
