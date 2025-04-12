import logo from '../assets/images/logo.png'

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex w-full flex-row items-center justify-between bg-gray-light px-60 py-2 font-jakarta">
      <img src={logo} alt="Logo" draggable="false" className="h-16 w-16" />

      <div className="flex flex-row gap-20">
        <a
          className="text-md cursor-pointer font-light text-white transition-colors duration-300 hover:bg-primary-gradient hover:bg-clip-text hover:text-transparent"
          href="#home"
        >
          Home
        </a>
        <a
          className="text-md cursor-pointer font-light text-white transition-colors duration-300 hover:bg-orange-gradient hover:bg-clip-text hover:text-transparent"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="text-md cursor-pointer font-light text-white transition-colors duration-300 hover:bg-blue-gradient hover:bg-clip-text hover:text-transparent"
          href="#experience"
        >
          Experience
        </a>
        <a
          className="text-md cursor-pointer font-light text-white"
          href="#contact"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
