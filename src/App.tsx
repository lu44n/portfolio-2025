import { Navbar } from './sections/navbar'
import { About } from './sections/home'

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center px-60 py-48 gap-20">
        <About />
      </main>
    </>
  )
}

export default App
