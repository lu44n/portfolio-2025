import memoji from '../assets/images/memoji.png'
import { Typewriter } from 'react-simple-typewriter'

export function About() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-14"
      id="home"
    >
      <img
        src={memoji}
        draggable="false"
        alt="emoji"
        className="h-56 w-56 rounded-full bg-primary-gradient"
      />

      <h1 className="text-center text-5xl font-extrabold text-white">
        Mikael Martins
        <br />
        <span className="bg-primary-gradient bg-clip-text text-transparent">
          <Typewriter
            words={['Front-End Developer </>']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h1>

      <p className="text-gray-lightest text-center text-lg font-light">
        I am looking for my first internship, motivated by the desire to
        transform my theoretical knowledge into innovative and impactful
        practices. I have developed a passion for web development and a solid
        foundation in HTML, CSS and JavaScript. I am eager to collaborate on
        challenging projects and contribute to the success of a dynamic and
        creative team.
      </p>

      <div className="flex gap-6">
        <a
          className="w-52 cursor-pointer rounded-full bg-white px-6 py-5 text-center text-xl font-semibold text-gray-dark"
          href="mailto:luanmikaelmartins@gmail.com"
        >
          Get In Touch
        </a>
        <a
          className="w-52 cursor-pointer rounded-full border-2 border-white px-6 py-5 text-center text-xl font-semibold text-white"
          href="/CV-Mikael.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </div>
  )
}
