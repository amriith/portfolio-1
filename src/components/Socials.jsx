import { useState } from "react";
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin-icon.svg"
import cursor from "../assets/cursor.svg"
import codepen from "../assets/codepen.svg"

export const Socials = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 flex"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={`flex flex-col items-center p-3 rounded-r-lg gap-6 border-r border-t border-b transition-all duration-300 ${
          isOpen 
            ? 'w-16 backdrop-blur-sm border-white/10 bg-white/5' 
            : 'w-8 bg-transparent border-white/10'
        }`}>
          <div className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <GithubIcon />
          </div>
          

          <div className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <LinkedinIcon />
          </div>

          <div className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <CodepenIcon />
          </div>

          
          <div className="text-white flex justify-center w-full">
            <span className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}> <CursorIcon/> </span>
          </div>
        </div>
      </div>
    </>
  ) 
}

export const GithubIcon = () => {
  return (
    <div>
      <a href="https://github.com/amriith" target="_blank" rel="noopener noreferrer">
        <img className="h-8 w-8" src={github} alt="GitHub Logo" />
      </a>
    </div>
  )
}

export const LinkedinIcon = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/amrith-jayadeep-672129211/" target="_blank" rel="noopener noreferrer">
        <img className="h-8 w-8" src={linkedin} alt="Linkedin Logo" />
      </a>
    </div>
  )
}
export const CodepenIcon =() => {
    return (
        <div>
            <a href="https://codepen.io/amrith" target="_blank" rel="noopener noreferrer">
            <img className="h-8 w-8" src={codepen} alt="Codepen Logo" />
             </a>
         </div>
    )
}

export const CursorIcon = () => {
  return (
    <div>
      <img className="h-8 w-8" src={cursor} alt="Cursor Logo" />
    </div>  
  )
}                                                                                                                                                                    