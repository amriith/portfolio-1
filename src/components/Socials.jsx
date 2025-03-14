import github from "../assets/github.svg"

export const Socials = () =>  {
   return  (
    <>
    <div> 
    <div className="bg-gradient-to-b from-blue-900 to-black w-16 h-full rounded-r-xl flex flex-col items-center py-6 gap-8">
        <GithubIcon/>
      </div>
    
     </div>
     </>
   ) 
}

export const GithubIcon =() =>{
    return (
        <div  className=" fixed top-1/2 transform -translate-y-1/2 z-50 z-50 flex">
    <a href="https://github.com/amriith" target="_blank" rel="noopener noreferrer">
        <img className="h-8 w-8" href="github.com/amriith" src={github} alt="GitHub Logo" style={{ color: 'white' }} />
     </a>
     </div>
    )
}