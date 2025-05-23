import project_1 from '../assets/images/project_1.png'
import project_2 from '../assets/images/project_2.png'
import view_arrow from '../assets/icons/view.svg'

export function Projects() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 pb-24 pt-8">
      <h2 className="bg-orange-gradient bg-clip-text text-3xl font-extrabold text-transparent">
        PROJECTS
      </h2>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col">
          <img src={project_1} alt="Project 1" className="h-56 rounded-t-2xl" />
          <a
            href="https://github.com/lu44n/ExtinguishersMonitoring"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex cursor-pointer flex-row items-center justify-between rounded-b-2xl bg-gray-softlight px-5 py-2">
              <div className="flex flex-col">
                <p className="text-[10px] font-bold text-gray-lightest">
                  CLICK HERE TO VISIT
                </p>
                <p className="text-md font-extrabold text-white">
                  EXTINGUISHER MONITORING
                </p>
              </div>
              <img src={view_arrow} alt="view" />
            </div>
          </a>
        </div>

        <div className="flex flex-col">
          <img src={project_2} alt="Project 2" className="h-56 rounded-t-2xl" />
          <a
            href="https://github.com/lu44n/ClothingStore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row items-center justify-between rounded-b-2xl bg-gray-softlight px-5 py-2">
              <div className="flex flex-col">
                <p className="text-[10px] font-bold text-gray-lightest">
                  CLICK HERE TO VISIT
                </p>
                <p className="text-md font-extrabold text-white">E-CLOTHING</p>
              </div>
              <img src={view_arrow} alt="view" />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
