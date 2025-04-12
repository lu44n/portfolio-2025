import email_icon from '../assets/icons/email.svg'
import linkedin_icon from '../assets/icons/linkedin.svg'
import instagram_icon from '../assets/icons/instagram.svg'
import github_icon from '../assets/icons/github.svg'

export function Footer() {
  return (
    <footer className="flex w-full flex-col gap-12 bg-gray-softdark px-60 py-24">
      <p className="text-3xl font-bold text-white">Contact</p>
      <div className="flex flex-col gap-8">
        <p className="text-md text-gray-lightest">
          Computer Science student at Mauá Institute of Technology, with a
          passion for technology and a special interest in Web Development.
          <br />
          My academic trajectory and practical experiences reinforce my
          commitment to technological innovation and high-impact solutions.
        </p>
        <div className="flex flex-row items-center gap-2">
          <img
            src={email_icon}
            alt="email"
            className="h-5 w-5"
            draggable="false"
          />
          <p className="text-md text-gray-lightest">
            luanmikaelmartins@gmail.com
          </p>
        </div>
        <div className="flex flex-row gap-5">
          <a href="https://www.linkedin.com/in/mikaelmartinsdev/">
            <img src={linkedin_icon} alt="LinkedIn" className="h-7 w-7" />
          </a>
          <a href="https://www.instagram.com/lmikael_">
            <img src={instagram_icon} alt="LinkedIn" className="h-7 w-7" />
          </a>
          <a href="https://www.github.com/lu44n">
            <img src={github_icon} alt="GitHub" className="h-7 w-7" />
          </a>
        </div>
      </div>
    </footer>
  )
}
