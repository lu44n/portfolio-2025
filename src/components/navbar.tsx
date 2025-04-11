import logo from "../assets/logo.png";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-gray-light flex flex-row justify-between items-center px-60 py-2 font-jakarta z-50">
      <img src={logo} alt="Logo" draggable="false" className="h-16 w-16" />

      <div className="flex flex-row gap-24">
        <p className="text-white font-light text-md cursor-pointer hover:bg-primary-gradient hover:bg-clip-text hover:text-transparent">
          Home
        </p>
        <p className="text-white font-light text-md cursor-pointer hover:bg-orange-gradient hover:bg-clip-text hover:text-transparent">
          Projects
        </p>
        <p className="text-white font-light text-md cursor-pointer hover:bg-blue-gradient hover:bg-clip-text hover:text-transparent">
          Experience
        </p>
        <p className="text-white font-light text-md cursor-pointer">Contact</p>
      </div>
    </header>
  );
}
