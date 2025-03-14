import { TypeAnimation } from "react-type-animation";
import { Appbar } from "../components/Appbar";
import { WorkExperienceSection } from '../components/WorkExperience';
import { Projects } from "../components/Projects";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Socials } from "../components/Socials";

export default function Home() {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Appbar />


      {/* Main content area */}
      <main className="flex-1">
        {/* Use flex-col on mobile, grid on larger screens */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 p-4 sm:p-8">
          
          {/* Left Section: Profile & Animated Text */}
          <div className="flex flex-col items-center text-white pt-6 text-center sm:sticky sm:top-0 sm:self-start">
            <div 
              className="relative"
              onMouseEnter={() => setIsAvatarHovered(true)}
              onMouseLeave={() => setIsAvatarHovered(false)}
            >
              <div className={`transition-transform duration-300 ${isAvatarHovered ? 'scale-x-[-1]' : ''}`}>
                <img
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full"
                  src="/avatar.jpg"
                  alt="Rounded avatar"
                />
              </div>
              {isAvatarHovered && (
                <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 text-4xl animate-wave">
                  👋
                </div>
              )}
            </div>
            <h1 className="mt-4 text-2xl sm:text-3xl font-semibold">
              Hello, I'm Amrith Jayadeep
            </h1>
            <ChangingTexts />
            <div 
              className="group hidden sm:flex items-center mt-8 cursor-pointer"
              onClick={() => {
                const firstExperienceCard = document.getElementById('first-experience');
                if (firstExperienceCard) {
                  firstExperienceCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
            > 
              <span className="nav-indicator h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <div className="text-slate-500 hover:text-teal-400 ml-4 font-bold tracking-widest">EXPERIENCE</div>
            </div>
          </div>

          {/* Right Section: About + Work Experience */}
          <div className="text-slate-400 text-lg">
            <p className="mb-6">
              I'm a software engineer with a passion for crafting efficient, 
              high-performance web applications featuring eye-catching interfaces. 
              I leverage the latest tech stacks to design scalable and robust solutions that stand out. 
              Currently pursuing Master's in Information Technology with a specialization in Cloud Technology and Networking at Deakin University, 
              I'm continually exploring cutting-edge methods to optimize web applications using cloud innovations.
            </p>
            <p className="mb-10">
              My experience spans freelancing for local businesses, where I've developed tailored websites, and building my own comprehensive e-commerce platform, 
              <a href="https://mriid.com" className="text-bold text-white"> MRIID</a>, where I handle everything from backend 
              architecture to deployment. Previously, I worked as an Associate Software Engineer at 
              <a href="https://www.oneadvanced.com/" className="text-bold text-white"> OneAdvanced</a>, contributing to 
              large-scale enterprise applications.
            </p>

            <p className="mb-10">
              Passionate about problem-solving, system design, and building high-performance applications. 
              Outside coding, I enjoy reading, hiking, cycling, and martial arts.
            </p>

            <WorkExperienceSection/>
           
          </div>
        </div>
      </main>
      
      {/* Footer is now part of the normal document flow */}
      <Footer/>
    </div>
  );
}

export function ChangingTexts() {
  return (
    <div className="text-center text-white text-xl sm:text-2xl mt-4">
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