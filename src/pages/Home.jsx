import { TypeAnimation } from "react-type-animation";
import { Appbar } from "../components/Appbar";
import { WorkExperienceSection } from '../components/WorkExperience';
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Appbar />

      {/* 🛠️ Fixed: Use flex-col on mobile, grid on large screens */}
      <div className="flex-1 flex flex-col sm:grid sm:grid-cols-2 gap-8 p-4 sm:p-8 overflow-hidden">
        
        {/* 🏆 Left Section: Profile & Animated Text (No Absolute Positioning) */}
        <div className="flex flex-col items-center text-white text-center">
          <img
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full"
            src="/avatar.jpg"
            alt="Rounded avatar"
          />
          <h1 className="mt-4 text-2xl sm:text-3xl font-semibold">
            Hello, I'm Amrith Jayadeep 👋
          </h1>
          <ChangingTexts />
        </div>

        {/* 📜 Right Section: About + Work Experience */}
        <div id="scrollable-content" className="text-slate-400 text-lg overflow-y-auto">
          <p className="mb-6">
         I'm a software engineer with a passion for crafting efficient, 
          high-performance web applications featuring eye-catching interfaces. 
          I leverage the latest tech stacks to design scalable and robust solutions that stand out. 
          Currently pursuing  Master's in Information Technology with a specialization in Cloud Technology and Networking at Deakin University, 
          I’m continually exploring cutting-edge methods to optimize web applications using cloud innovations.
          </p>
          <p className="mb-10"> My experience spans freelancing for local businesses, where I've developed tailored websites, and building my own comprehensive e-commerce platform, 
            <a href="https://mriid.com" className="text-bold text-white"> MRIID</a>, where I handle everything from backend 
            architecture to deployment. Previously, I worked as an Associate Software Engineer at 
            <a href="https://www.oneadvanced.com/" className="text-bold text-white"> OneAdvanced</a>, contributing to 
            large-scale enterprise applications.
          </p>

          

          <p className="mb-10">
            Passionate about problem-solving, system design, and building high-performance applications. 
            Outside coding, I enjoy reading, hiking, cycling, and martial arts.
          </p>

          <WorkExperienceSection />
        </div>
      </div>
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