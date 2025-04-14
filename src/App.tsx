import { Navbar } from './sections/navbar'
import { About } from './sections/home'
import { Projects } from './sections/projects'
import { Experience } from './sections/experience'
import { Footer } from './sections/footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center px-60">
        <section
          className="flex min-h-screen w-full items-center justify-center"
          id="home"
        >
          <About />
        </section>
        <section className="w-full scroll-mt-20" id="projects">
          <Projects />
        </section>
        <section className="w-full scroll-mt-28" id="experience">
          <Experience />
        </section>
      </main>
      <section className="w-full" id="contact">
        <Footer />
      </section>
    </>
  )
}

export default App
