import { TypeAnimation } from "react-type-animation";
import { Appbar } from "../components/Appbar";
import { WorkExperienceSection } from '../components/WorkExperience';
import { useEffect } from "react";

export default function Home() {
  // We'll modify the scroll handler to work with GSAP
  const handleScroll = (e) => {
    const contentDiv = document.getElementById('scrollable-content');
    if (contentDiv) {
      // Let scrolling events pass through naturally for the work experience section
      // Only prevent default for other parts if needed
      const isWorkExperienceVisible = e.target.closest('.work-experience-container');
      
      if (!isWorkExperienceVisible) {
        contentDiv.scrollTop += e.deltaY;
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Appbar />
      <div className="flex-1 grid grid-cols-2 overflow-hidden">
     
        <div className="relative flex items-center justify-center">
       
          <div className="absolute text-center text-white">
            <div className="backdrop-blur-lg text-2xl">
              <div className="flex justify-center pb-4">
                <img
                  className="w-40 h-40 rounded-full"
                  src="/avatar.jpg"
                  alt="Rounded avatar"
                />
              </div>
              <div>Hello I'm Amrith Jayadeep 👋</div>
            </div>
            <div className="mt-8">
              <ChangingTexts />
            </div>
          </div>
        </div>

        <div 
          id="scrollable-content"
          className="text-slate-400 text-md pt-10 pb-20 overflow-y-auto max-h-screen pr-4"
        >
          <p className="mb-6">
            Experienced Software Developer with a strong foundation in full-stack development, specializing in building 
            scalable, high-performance web applications with a focus on backend architecture and system functionality. 
            Currently, I am pursuing a Master's in Information Technology at Deakin University, Melbourne. Beyond academics, 
            I have been freelancing, developing websites for local businesses, and building my own e-commerce platform, 
            <a href="https://mriid.com" className="text-bold text-white"> MRIID</a>, where I handle everything from backend 
            architecture to deployment. Previously, I worked as an Associate Software Engineer at 
            <a href="https://www.oneadvanced.com/" className="text-bold text-white"> OneAdvanced</a>, contributing to 
            large-scale enterprise applications.
          </p>

          <p className="mb-6">
            While I have experience across the stack, I find backend development particularly fascinating. Designing
            APIs, optimizing databases, and creating seamless integrations excites me more than UI design. I enjoy solving 
            complex problems and implementing scalable solutions.
          </p>

          <p className="mb-20">
            Beyond coding, I'm passionate about reading, hiking, cycling, working out, and practicing martial arts. I believe discipline and 
            perseverance, both in physical training and software development, go hand in hand in shaping my approach to 
            challenges—whether in technology or life.
          </p>

          <WorkExperienceSection/>
        </div>
      </div>
    </div>
  );
}

export function ChangingTexts() {
  return (
    <div className="text-center text-white text-2xl">
      <TypeAnimation
        sequence={[
          "I'm a Human Being",
          2000,
          "I'm a Geek",
          2000,
          "I'm a Software Engineer",
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
      />
    </div>
  );
}