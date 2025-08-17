import { TypeAnimation } from "react-type-animation";
import { Appbar } from "../components/Appbar";
import { WorkExperienceSection } from '../components/WorkExperience';
import { Projects } from "../components/Projects";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Socials } from "../components/Socials";
import "../styles/animations.css"; 

export default function Home() {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Appbar />
      <Socials/>

      
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
              <div>
                <img
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full"
                  src="/avatar.jpg"
                  alt="Rounded avatar"
                />
              </div>
              {isAvatarHovered && (
                <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 text-4xl hand-wave">
                  👋
                </div>
              )}
            </div>
            <h1 className="mt-4 text-2xl sm:text-3xl font-semibold">
              Hello, I'm Amrith Jayadeep
            </h1>
            <ChangingTexts />
            <div className="flex flex-col gap-4 mt-8">
              <div 
                className="group hidden sm:flex items-center cursor-pointer"
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
              
              <div 
                className="group hidden sm:flex items-center cursor-pointer"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              > 
                <span className="nav-indicator h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <div className="text-slate-500 hover:text-teal-400 ml-4 font-bold tracking-widest">PROJECTS</div>
              </div>
            </div>
          </div>

          {/* Right Section: About + Work Experience */}
          <div className="text-slate-400 text-lg">
          <p className="mb-6">
            I'm a Software & DevOps Engineer with 3+ years of experience designing and automating 
             scalable, high-availability systems  across AWS, Azure, and GCP. 
            With a foundation in software engineering and a Master's in 
             Cloud & Network Engineering  from Deakin University, I specialize in building reliable 
            cloud platforms that accelerate developer velocity and enhance system resilience.
          </p>

          <p className="mb-10">
            My work spans from infrastructure automation (Terraform, CloudFormation) and 
            containerized microservices (Kubernetes, Docker) to CI/CD pipelines 
            (CodePipeline, GitHub Actions, Jenkins). 
            I’m passionate about platform engineering and building internal developer platforms (IDPs) 
            that simplify delivery and boost reliability.  
            Previously, I contributed to <a href="https://www.oneadvanced.com/" className="text-bold text-white">OneAdvanced</a>, 
            optimizing NHS UK’s Adastra system, and built <a href="https://mriid.com" className="text-bold text-white">MRIID</a>, 
            my own full-stack e-commerce platform.
          </p>

          <p className="mb-10">
            Outside of engineering, I enjoy reading, hiking, cycling, and martial arts — always looking 
            for ways to challenge myself and grow, both technically and personally.
          </p>  

            <WorkExperienceSection/>
           
            
          </div>
        </div>
      </main>
      <Projects/>
      {/* Footer is now part of the normal document flow */}
      <Footer/>
    </div>
  );
}

export function ChangingTexts() {
  return (
    <div className="text-center mt-4">
        <div className="flex items-center">
          <span className="text-green-400 text-sm font-mono mr-2">$</span>
          <TypeAnimation
            sequence={[
              "Human Being",
              1200,
              "Software Engineer",
              1200,
              "Infrastructure Specialist",
              1200,
              "Platform Engineer",
              1200,
              "Gamer",
              1200,
            ]}
            wrapper="span"
            cursor={false}
            repeat={Infinity}
            speed={30}
            className="text-slate-400 text-xl md:text-xl font-mono font-semibold select-none"
            style={{
              fontFamily: 'Consolas, Monaco, "Courier New", monospace',
            }}
          /><span className="text-slate-400 text-lg sm:text-xl font-mono font-semibold cursor-blink">_</span>
        </div>
    </div>
  );
}